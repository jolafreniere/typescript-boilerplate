import * as Commander from "commander";

export class Main {

    public run = () => {
      const cmd = new Commander.Command()
      cmd.name("hello")
        .version("0.0.1")
        .description("Hello World!")
        .addArgument(new Commander.Argument("<name>", "Your name"))
        .option("-c, --capitalize", "Capitalizes the output")
        .option("-a, --age <age>", "Your age")
        .action((name, options) => {
            const output = options.capitalize ? name.toUpperCase() : name;
            console.log(`Hello ${output}!`);
            if (options.age) {
                console.log(`You are ${options.age} years old.`);
            }
        })
        .parse(process.argv);
      console.log("running...");
    }
  }

export const instance = new Main();