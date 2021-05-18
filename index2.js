const args=process.argv.slice(2);
const csv= require("csvtojson");
const fs= require("fs");
const{promisify}=require("util");
const writeFile=promisify(fs.writeFile);


    const convertCSVtoJSON=async(csvFilePath,jsonPath)=>{
        try{
        const jsonArr= await csv().fromFile(csvFilePath);
        const jsonString=JSON.stringify(jsonArr);
        await writeFile(jsonPath,jsonString);
        console.log(`JSON file saved at:${jsonPath}`)

        }catch(err){
            console.log("Something went wrong, Could not write json to: hello.json")
        }
       
        

    }
    if(args.length===1){
        convertCSVtoJSON(args[0],"demo.json");
    }else if(args.length===2){
         jsonPath=args[1];
       convertCSVtoJSON(args[0],jsonPath);
    
 
}





