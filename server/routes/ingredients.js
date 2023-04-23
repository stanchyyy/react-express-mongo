import express from "express";
import {getDb} from "../db/conn.js"
import {Ingredient} from "../models/ingredientsModel.js";
import { ObjectId } from "mongodb";

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

// This section will help you get a list of all the menu records.
ingredientsRoutes.route("/api/menu").get(function(req,res){
    console.log("reached menu")
    
    let db_connect = getDb(dbName);
    console.log(db_connect);
    db_connect.collection("menu").find({}).toArray((err,result)=>{
            res.json(result);
            console.log(result)
        })
})

// This section will help you get a single ingredient by name.

ingredientsRoutes.route("/api/ingredients/:id").get((req,res)=>{
    console.log("reached find by id")
    let db_connect = getDb();
    let idQuery = {_id: ObjectId(req.params.id)};
    db_connect.collection(collection).findOne(idQuery,(err,result)=>{
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

ingredientsRoutes.route("/api/ingredients/update/:id").patch((req,res)=>{
    let db_connect = getDb();
    let idQuery = {_id: ObjectId(req.params.id)};
    let newValue = {
        $set: new Ingredient(
            req.body.name,
            req.body.layer,
            req.body.saltLevel,
            req.body.vegan,
            req.body.spicy,
            req.body.type,
            req.body.image
        )
    }
    db_connect.collection(collection).updateOne(idQuery,newValue,function(err,response){
        res.json(response);
    })

})

// This section will help you delete a record

ingredientsRoutes.route("/api/ingredients/delete/:id").delete((req,res)=>{
    let db_connect = getDb();
    let idQuery = {_id: ObjectId(req.params.id)};
    db_connect.collection(collection).deleteOne(idQuery,(error,response)=>{
        res.json(response);
    })
})
