import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

const URI = process.env.DB_URI


const client = new MongoClient(URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let db;

    export async function  connectToDB() {
    db = await client.db("pizzas");
      console.log("Connected successfully to BD.");

}

  export function getDb (){
    return db;
  }