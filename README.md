# CSV Converter

Create a program that converts [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) files into JSON files, using the [`csvtojson`](https://www.npmjs.com/package/csvtojson) library.

## Constraints

* The program should accept one or two arguments. If no arguments are passed, the program should exit the process and print a message to the user (see examples).

* If only one argument is passed, the program should convert the file in that path to a json file in the same directory.

* If two arguments are passed, the program should write the file to the path in the second argument.

* If the program cannot read or write the file, it should print out a message to the user (see examples).

## Examples

### One argument passed (Source CSV)

```bash
$ node index.js demo.csv
> "JSON file saved at: demo.json"
```

### Two arguments passed (Source CSV, target JSON)

```bash
$ node index.js demo.csv hello.json
> "JSON file saved at: hello.json"
```

### No arguments passed

```bash
$ node index.js
> "Please provide a csv file to convet to JSON"
```

### An error occured

```bash
$ node index.js dem.csv hello.json
> "Something went wrong, Could not write json to: hello.json"
```
