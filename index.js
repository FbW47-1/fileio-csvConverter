const csv = require('csvtojson');
const fs = require('fs');
const { promisify } = require('util');
const writeFile = promisify(fs.writeFile);
const args = process.argv.slice(2);

// Async / Await 
const csvConversion = async (csvPath, jsonPath) => {
    try {
        // Hier soll die datei konvertiert werden
        const jsonArr = await csv().fromFile(csvPath);
        // Wir wandeln unser array wieder in einen string um.
        const jsonString = JSON.stringify(jsonArr);
        await writeFile(jsonPath, jsonString); // writeFile("demo.json", [{"firstName":"Leandro","lastName":"Frigerio","age":"39","language":"Italian"}])
        console.log("file written.");
    } catch (err) {
        console.log("File couldn't be read or written.")
    }
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