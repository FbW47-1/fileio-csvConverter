const args = process.argv.slice(2); // argumente aus Terminal akzeptieren/ bearbeiten [Array]
const csv = require('csvtojson'); // csv Bibliothek
const fs = require('fs'); // mit Dateisystem arbeiten/ Dateien lesen und schreiben [readFile, writeFile]
const { promisify } = require('util');

const writeFile = promisify(fs.writeFile);


const convertCSVToJSON = async(path, destinationPath) => {

    try {
        // Datei konvertieren
        const jsonArray = await csv().fromFile(path);

        // array in str umwandeln
        const jsonString = JSON.stringify(jsonArray);

        // wird in andere Datei gespeichert
        await writeFile(destinationPath, jsonString);

        console.log(`JSON file saved at: ${destinationPath}`);
    } catch (err) {
        console.log(`Something went wrong, could not write ${path} to: ${destinationPath}!`);
    }

}


if (args.length === 0) {
    console.log("Please provide a csv file to convert to JSON");
    process.exit();
}

if (args.length === 1) {
    const csvFilePath = args[0];
    convertCSVToJSON(csvFilePath, 'demo.json');

}

// * If two arguments are passed, the program should write the file to the path in the second argument.
if (args.length === 2) {
    const csvFilePath = args[0];
    const jsonFilePath = args[1];
    convertCSVToJSON(csvFilePath, jsonFilePath);
}