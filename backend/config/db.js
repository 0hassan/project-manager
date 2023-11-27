const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const MONGO_URI = "mongodb://localhost:27017/projectManager";
    const conn = await mongoose.connect(MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// export default connectDb;
module.exports = connectDb;
