import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
const dbPort = process.env.DB_PORT;

export const db = mongoose.connect(`mongodb://${dbHost}:${dbPort}/${dbName}`).then(res => {
  console.log(`mongodb://${dbHost}:${dbPort}/${dbName}`);
  if (res) {
    console.log(`Database connection succeffully to ${dbName}`);
  }
}).catch(err => {
  console.log(err);
})