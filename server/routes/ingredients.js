import express from "express";
import {getDb} from "../db/conn.js"
import { ObjectId } from "mongodb";



export const ingredientsRoutes = express.Router();
const dbName = "pizzas";
const collection = "ingredients"
//const objectId = ObjectId();

// This section will help you get a list of all the records.
ingredientsRoutes.route("/api/ingredients").get(function(req,res){
    console.log("reached find all")
    
    let db_connect = getDb(dbName);
    console.log(db_connect);
    db_connect.collection("ingredients").find({}).toArray((err,result)=>{
            res.json(result);
            console.log(result)
        })
})

ingredientsRoutes.route("/api/ingredients/:name").get((req,res)=>{
    console.log("reached find by name")
    let db_connect = getDb();
    let nameQuery = {name: req.params.name};
    db_connect.collection(collection).findOne(nameQuery,(err,result)=>{
        res.json(result);
    })
})