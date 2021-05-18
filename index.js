const fs = require('fs');
const { promisify } = require('util');
const csv = require('csvtojson');
const path = require('path');

const writeFile = promisify(fs.writeFile);
let [csvFilePath, targetPath] = process.argv.slice(2);
//If no arguments are passed,
if(!csvFilePath) {
    console.error("Please provide a csv file to convet to JSON");
    process.exit();
}
// If only one argument is passed
if(!targetPath) {
    const {dir, name} = path.parse(csvFilePath);
    targetPath = path.join(dir, `${name}.json`);
}

csv().fromFile(csvFilePath)
    //JSON.stringify(value[, replacer[, space]])
    //value: The value to be converted to a JSON string.
    //replacer:null=> all object properties are included in the resulting JSON string.
    
    .then(jsonData => writeFile(targetPath, JSON.stringify(jsonData, null, 2)))
    .then(() => console.log(`JSON file saved at: ${targetPath}`))
    //If the program cannot read or write the file,
    .catch(err => console.log(`Something went wrong, Could not write json to: ${targetPath}`));


 