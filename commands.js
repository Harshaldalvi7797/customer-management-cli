const program = require("commander");
const { prompt } = require("inquirer");

const {
  addCustomer,
  findCustomer,
  removeCustomer,
  updateCustomer
} = require("./index");

program.version("1.0.0").description("client management system");

//customer question

const questions = [
  {
    type: "input",
    name: "firstName",
    message: "Customer firstname"
  },
  {
    type: "input",
    name: "lastName",
    message: "Customer lastname"
  },
  {
    type: "input",
    name: "email",
    message: "Customer email"
  },
  {
    type: "input",
    name: "phone_no",
    message: "Customer phone"
  }
];

// program
//   .command("add <firstName> <lastName> <email> <phone_no>")
//   .alias("a")
//   .description("Add customer")
//   .action((firstName, lastName, email, phone_no) => {
//     addCustomer({ firstName, lastName, email, phone_no });
//   });

program
  .command("add")
  .alias("a")

  .description("add customer")
  .action(() => {
    prompt(questions).then(answer => {
      addCustomer(answer);
    });
  });

program
  .command("find <firstName>")
  .alias("f")
  .description("find customer")
  .action(name => {
    findCustomer(name);
  });

//update command
program
  .command("update <_id>")
  .alias("u")
  .description("update customer")
  .action(_id => {
    prompt(questions).then(answer => {
      updateCustomer(_id, answer);
    });
  });

//remove command

program
  .command("remove <_id>")
  .alias("r")
  .description("remove customer")
  .action(_id => removeCustomer(_id));

program.parse(process.argv);
