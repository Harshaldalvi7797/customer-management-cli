const mongoose = require("mongoose");

//mapp global promise  - get rid of warning
mongoose.Promise = global.Promise;

//connect to db
const db = mongoose.connect("mongodb:localhost:27017/customercli", {
  useMongoClient: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});
