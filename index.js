const mongoose = require("mongoose");
// Map global promise - get rid of warning
mongoose.Promise = global.Promise;
// Connect to db
const db = mongoose
  .connect("mongodb://localhost:27017/customercli", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Mongodb connected"))
  .catch(err => console.log(err));

//Import Model
const Customer = require("./Models/customer");

//Add customer

const addCustomer = customer => {
  Customer.create(customer).then(customer => {
    console.info("customer addedd");
    db.close();
  });
};

//find customer

const findCustomer = name => {
  const search = new RegExp(name, "i");
  Customer.find({ $or: [{ firstName: search }, { lastName: search }] }).then(
    customer => {
      console.info(customer);
      console.info(`${customer.length} matches`);
      db.close();
    }
  );
};

//export all methods
module.exports = {
  addCustomer,
  findCustomer
};
