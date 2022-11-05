import express from "express";
import cors from "cors";
import dotenv from "dotenv";

//import ingredientsRoute from "./routes/ingredients";
//import dbConn from "./db/conn";

//can this be converted to es6?
dotenv.config({ path: "./config.env" });
const port = process.env.PORT;


const app = express();
app.use(cors());
app.use(express.json());
//app.use(ingredientsRoute());
//const dbo = dbconn;
app.listen(port,()=>{
    app.get("/api/ingredients",(req,res)=>{
        res.send("reached not implemented db route")
    })
    console.log(`Server is listening on port ${port}`);
})