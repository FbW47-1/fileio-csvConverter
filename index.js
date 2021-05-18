/* * The program should accept one or two arguments. If no arguments are passed, the program should exit the process and print a message to the user (see examples).
* If only one argument is passed, the program should convert the file in that path to a json file in the same directory.
* If two arguments are passed, the program should write the file to the path in the second argument.
* If the program cannot read or write the file, it should print out a message to the user (see examples) */

const csv = require('csvtojson');
const fs = require('fs');
const { promisify } = require('util');
const writeFile = promisify(fs.writeFile);
const args = process.argv.slice(2);


const csvConversion = async (csvPath) => {
    // Hier soll die datei konvertiert werden
    const jsonArr = await csv().fromFile(csvPath);
    // Wir wandeln unser array wieder in einen string um.
    const jsonString = JSON.stringify(jsonArr);
    await writeFile('./result.json', jsonString);
    console.log("file written.");
}


// If no arguments are passed, the program should exit the process and print a message to the user.
if(args.length === 0) {
    console.log("No paths given");
    process.exit();
}

if(args.length === 1) {
    const csvPath = args[0];
    csvConversion(csvPath);
}