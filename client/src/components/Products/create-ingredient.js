import React, { useState } from "react";
import {useNavigate } from "react-router";

export default function CreateIngredient(){
    const [form, setForm] = useState({
        name: "",
        layer: "",
        saltLevel: 0,
        vegan: false,
        spicy:false,
        type:""
    });

    const navigate = useNavigate();

    function updateForm(value){
        return setForm((prev)=>{
            return{...prev,...value};
        })
    }

};



