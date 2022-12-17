const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connect = () => {
  return mongoose
    .connect(process.env.MONGOURL)
    .then(() => console.log("Database connected"))
    .catch((e) => console.log(e.message));
};

module.exports = connect;
