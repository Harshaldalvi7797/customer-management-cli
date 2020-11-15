const program = require("commander");

const { addCustomer, findCustomer } = require("./index");

program.version("1.0.0").description("client management system");

program.parse(process.argv);
