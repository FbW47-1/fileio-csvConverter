const csv = require("csvtojson");
const fs = require("fs");
const args = process.argv.slice(2);

const csvConverter = (arr) => {
    // No arguments passed
    if (arr.length === 0) {
        console.log("Please provide a csv file to convet to JSON");
        process.exit;
    } else {
        const csvFilePath = arr[0];
        if (!fs.existsSync(csvFilePath)) {
            console.error(`Error: ${csvFilePath} does not exist. Check to make sure the file path to your csv is correct.`);
            return;
        }
        let jsonFilePath = csvFilePath.replace(".csv", ".json");
        const writeMe = async () => {
            const jsonObj = await csv().fromFile(csvFilePath);
            const jsonStr = JSON.stringify(jsonObj);
            fs.writeFile(jsonFilePath, jsonStr, (err) => {
                if (err) throw err;
                console.log(`JSON file saved at: ${jsonFilePath}`);
            });
        };
        // One argument passed (Source CSV)
        if (arr.length === 1) {
            writeMe();
            // Two arguments passed (Source CSV, target JSON)
        } else {
            jsonFilePath = arr[1];
            writeMe();
        }
    }
}
csvConverter(args);

/*
To test in terminal:
node index.js //Please provide a csv file to convet to JSON
node index.js demo.csv //JSON file saved at: demo.json
node index.js demo.csv hello.json //JSON file saved at: hello.json
node index.js dem.csv //Error: dem.csv does not exist. Check to make sure the file path to your csv is correct.
node index.js hello.csv hello.json //Error: hello.csv does not exist. Check to make sure the file path to your csv is correct.
*/