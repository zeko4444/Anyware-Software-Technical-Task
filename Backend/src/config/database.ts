import mongoose from "mongoose";

const dbConnection = () => {
  const db_uri = process.env.DB_URI;
  if (!db_uri) {
    throw new Error("DB_URI is not defined in the environment variables.");
  }
  mongoose
    .connect(db_uri)
    .then((conn) => {
      console.log(`Database connected : ${conn.connection.host}`);
    })
    .catch((err) => {
      console.log(`Database error : ${err.message}`);
      process.exit(1);
    });
};

export default dbConnection;
