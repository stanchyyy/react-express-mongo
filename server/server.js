import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {MongoClient} from "mongodb";

import {connectToDB, getDb} from "./db/conn.js"

//import ingredientsRoute from "./routes/ingredients";

dotenv.config({ path: "./config.env" });
const port = process.env.PORT;
const uri = process.env.DB_URI;

const app = express();
app.use(cors());
app.use(express.json());
//app.use(ingredientsRoute());


app.listen(port,()=>{
    connectToDB((err)=>{
        if(err) console.log(err);
    })

    console.log(`Server is listening on port ${port}`);
})