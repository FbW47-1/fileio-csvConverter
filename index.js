const csv = require("csvtojson");
const fs = require("fs");
const { promisify } = require("util");
const writeFilePromise = promisify(fs.writeFile);
const args = process.argv.slice(2);

const csvConverter = (arr) => {
    // No arguments passed
    if (arr.length === 0) {
        console.log("Please provide a csv file to convet to JSON");
        process.exit;
    } else {
        const csvFilePath = arr[0];
        let jsonFilePath = csvFilePath.replace(".csv", ".json");
        if (!fs.existsSync(csvFilePath)) {
            console.error(`Something went wrong. Could not write json to: ${jsonFilePath}.\n${csvFilePath} does not exist. Check to make sure the file path to your csv is correct.`);
            return;
        }
        const writeFile = async () => {
            const jsonArr = await csv().fromFile(csvFilePath);
            /* console.log(jsonArr); */
            const jsonStr = JSON.stringify(jsonArr); //string
            await writeFilePromise(jsonFilePath, jsonStr);
            console.log(`JSON file saved at: ${jsonFilePath}`);
            
        };
        // One argument passed (Source CSV)
        if (arr.length === 1) {
            writeFile();
            // Two arguments passed (Source CSV, target JSON)
        } else {
            jsonFilePath = arr[1];
            writeFile();
        }
    }
}
csvConverter(args);

/*
To test in terminal:
node index.js                            //Please provide a csv file to convet to JSON
node index.js demo.csv                   //JSON file saved at: demo.json
node index.js demo.csv hello.json        //JSON file saved at: hello.json
node index.js dem.csv                    //Something went wrong. Could not write json to: dem.json.
                                          dem.csv does not exist. Check to make sure the file path to your csv is correct.
node index.js hello.csv hello.json      //Something went wrong. Could not write json to: hello.json.
                                          hello.csv does not exist. Check to make sure the file path to your csv is correct.
*/