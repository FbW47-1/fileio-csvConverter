const csv = require('csvtojson');
const fs = require('fs');
const { promisify } = require('util');
const writeFile = promisify(fs.writeFile);
const args = process.argv.slice(2);

// Promises (oldschool)
const csvConversion = (csvPath, jsonPath) => {
    csv().fromFile(csvPath)
        .then((jsonArr) => {
            const jsonString = JSON.stringify(jsonArr);
            return writeFile(jsonPath, jsonString);
        })
        .then(() => {
            console.log("file written.");
        })
        .catch((err) => {
            console.log("File couldn't be read or written.");
        })
}


// If no arguments are passed, the program should exit the process and print a message to the user.
if(args.length === 0) {
    console.log("No paths given");
    process.exit();
}

if(args.length === 1) {
    const csvPath = args[0]; // "./demo.csv"
    csvConversion(csvPath, "demo.json"); // csvConversion("./demo.csv")
}

if(args.length === 2) {
    const csvPath = args[0];
    const jsonPath = args[1];
    csvConversion(csvPath, jsonPath);
}