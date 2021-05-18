/*
JSON.parse(): string -> javascript Objekt / Array
JSON.stringify(): javascript Objekt / Array -> string
*/

const jsonString2 = '[{"id": 10, "name": "niels"}]'
const parsedArray = JSON.parse(jsonString2);
console.log(parsedArray)
console.log(parsedArray[0].id);

console.log(JSON.stringify(parsedArray))