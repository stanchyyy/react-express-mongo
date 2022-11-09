import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

const dbConnection = process.env.DB_URI;
const client = new MongoClient(dbConnection,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

let db;

    export async function  connectToDB () {
    await client.connect().then((value)=>{
      db = value.db("pizzas");
      console.log("Connected successfully to BD.");
    },(err)=>{
      console.log(err);
    });

  }

  export function getDb (){
    return db;
  }

