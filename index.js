const csv = require('csvtojson');
const fs = require("fs");
const {promisify} = require('util');
const writeFile = promisify(fs.writeFile);
const args = process.argv.slice(2);

const fileConverter = async (csvPath, jsonPath) => {
    // Here shoould be the csv data converting
    const jsonArr = await csv().fromFile(csvPath);
    // Here converting array to string
    const jsonString = JSON.stringify(jsonArr);
    
    await writeFile(jsonPath, jsonString);
    console.log("JSON file saved at: demo.json");
}
    // If no arguments are passed, the program should exit the process and print a message to the user.
    if(args.length === 0){
        console.log("Please provide a proper CSV file name to convert to JSON");
        process.exit();
    }; 

    if(args.length === 1){
        const csvPath = args[0];
        fileConverter(csvPath, "demo.json");

    };

    if(args.length === 2){
        const csvPath = args[0];
        const jsonPath = args[1];
        fileConverter(csvPath, jsonPath);
    };

