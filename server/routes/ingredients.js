import express from "express";
import {getDb} from "../db/conn.js"
import {Ingredient} from "../models/ingredientsModel.js";


export const ingredientsRoutes = express.Router();
const dbName = "pizzas";
const collection = "ingredients"

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
// This section will help you get a single ingredient by name.

ingredientsRoutes.route("/api/ingredients/:name").get((req,res)=>{
    console.log("reached find by name")
    let db_connect = getDb();
    let nameQuery = {name: req.params.name};
    db_connect.collection(collection).findOne(nameQuery,(err,result)=>{
        res.json(result);
    })
})
// This section will help you add ingredient.

ingredientsRoutes.route("/api/ingredients/add").post((req,res)=>{
    console.log("reached insert ingredient")
    let db_connect = getDb();
    let ingredientObject = new Ingredient(
        req.body.name,
        req.body.layer,
        req.body.saltLevel,
        req.body.vegan,
        req.body.spicy,
        req.body.type,
        req.body.image
    );
    if(Object.keys(req.body).length>0){
    db_connect.collection(collection).insertOne(ingredientObject,(error,result)=>{
        res.json(result);
    })}else{
        res.status(400).send({error: "All fields require values"})
    }
})

// This section will help you update a single ingredient by name.

ingredientsRoutes.route("/api/ingredients/update/:name").patch((req,res)=>{
    let db_connect = getDb();
    let nameQuery = {name: req.params.name};
    let newValue = {
        $set: new Ingredient(
            req.body.name,
            req.body.layer,
            req.body.saltLevel,
            req.body.vegan,
            req.body.spicy
        )
    }
    db_connect.collection(collection).updateOne(nameQuery,newValue,function(err,response){
        res.json(response);
    })

})

// This section will help you delete a record

ingredientsRoutes.route("/api/ingredients/delete/:name").delete((req,res)=>{
    let db_connect = getDb();
    let nameQuery = {name: req.params.name};
    db_connect.collection(collection).deleteOne(nameQuery,(error,response)=>{
        res.json(response);
    })
})