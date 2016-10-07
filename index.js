var chalk = require("chalk");

var message = chalk.blue("Hello ") + chalk.red("World ") + chalk.green("I " + chalk.yellow("am ") + chalk.white("cool!"));
console.log(message)