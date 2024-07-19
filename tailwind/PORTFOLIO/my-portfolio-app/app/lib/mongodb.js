import React from "react";
import mongoose from "mongoose";

const mongodb = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URL);
      console.log("Database is connected successfully");
    }
  } catch (error) {
    console.log(error);
  }
};

export default mongodb;
