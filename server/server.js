import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {MongoClient} from "mongodb";
import {connectToDB, getDb} from "./db/conn.js"
import {ingredientsRoutes} from "./routes/ingredients.js"
dotenv.config({ path: "./config.env" });

const port = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use(ingredientsRoutes);


app.listen(port,()=>{
    connectToDB();
})

console.log(`Server is listening on port ${port}`);