import inquirer from "inquirer";
import chalk from "chalk";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
console.log(chalk.greenBright("\n\t<<<<<<<<<<<<--------------------------->>>>>>>>>>>>>>\t\n"));
console.log(chalk.magentaBright.bold("\n\tWelcome to my ADVENTURE GAME\t\n"));
console.log(chalk.greenBright("\n\t<<<<<<<<<<<<--------------------------->>>>>>>>>>>>>>\t\n"));
let PlayerName = await inquirer.prompt([{
        name: "name",
        type: "input",
        message: chalk.bgBlue("\n\tPlease enter your name\n\t ")
    }
]);
let OpponentCharacter = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: chalk.bgBlueBright("\n\tSelect your opponent\n\t"),
        choices: ["Skeleton", "Witch", "Zombie"]
    }
]);
let p1 = new Player(Player.name);
let o1 = new Opponent(OpponentCharacter.select);
do {
    if (OpponentCharacter.select === "Skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: chalk.bgBlueBright("\n\tWhat would you like to do ?\t\n"),
                choices: ["Attack", "Drink Portion", "Run for your life"]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.bgRedBright("\n\tYou loose better luck for next time..... \t\n"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(chalk.bgBlueBright(" \n\tCONGRATULATION !!!! You win\t\n"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(`You drink health portion Your fuel is ${p1.fuel}`);
        }
        if (ask.opt == "Run for your life") {
            console.log(chalk.bgRedBright("You loose !!! , Best of luck for next time"));
            process.exit();
        }
    }
    //witch
    if (OpponentCharacter.select === "Witch") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: chalk.bgBlueBright("What would you like to do ?"),
                choices: ["Attack", "Drink Portion", "Run for your life"]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.bgRedBright("\n\tYou loose better luck for next time.....\t\n"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(chalk.bgBlueBright("\n\t CONGRATULATION !!!! You win\t\n"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.italic(`\n\tYou drink health portion Your fuel is ${p1.fuel}\t\n`));
        }
        if (ask.opt == "Run for your life") {
            console.log(chalk.bgRedBright("\n\tYou loose !!! , Best of luck for next time\t\n"));
            process.exit();
        }
    }
    //zombie
    if (OpponentCharacter.select === "Zombie") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: chalk.bgBlueBright("\n\tWhat would you like to do ? \t\n"),
                choices: ["Attack", "Drink Portion", "Run for your life"]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.bgRedBright("\n\tYou loose better luck for next time.....\t\n"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(chalk.bgBlue(" \n\tCONGRATULATION !!!! You win\t\n"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.italic(`\n\tYou drink health portion Your fuel is ${p1.fuel}\t\n`));
        }
        if (ask.opt == "Run for your life") {
            console.log(chalk.bgRedBright("\n\tYou loose !!! , Best of luck for next time\t\n"));
            process.exit();
        }
    }
} while (true);
