let arr=process.argv.slice(2)
if(arr.length===0){
    console.log("kein Argumet vorhanden")
    process.exit
}

const { promisify } = require('util');
const fs=require("fs")

const whriteFile=promisify(fs.watchFile)

const path=require("path")

const csvFilePath=arr[0]
const jsonFilePath=arr[1]
const csv=require('csvtojson')

if(arr.length===1){
    csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
        console.log("JSON file saved at: demo.json");
        process.exit/*  */
    })
    .catch((err)=>console.log(err))
}

if(arr.length===2){
    csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
        fs.writeFile(jsonFilePath,csvFilePath, (err,data)=>{
            console.log("JSON file saved at: hello.json")
            process.exit
        })
    })
/*     .catch((err)=>console.log(err))
 */}

 
// Async / await usage
/* const jsonArray=await csv().fromFile("./demo.csv"); */

