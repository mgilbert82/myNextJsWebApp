import mongoose from "mongoose";

const connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO);
    //console.log("Connected to Mongoose !");
  } catch (error) {
    throw new Error("Connection failed !");
  }
};

export default connect;
