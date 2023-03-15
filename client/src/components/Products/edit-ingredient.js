import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import { useParams, useNavigate } from "react-router";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideImage from "../../img/products/edit-form-image.jpg"
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';

export default function Edit() {
    const [form, setForm] = useState({
        name: "",
        layer:"",
        saltLevel:"",
        vegan: "",
        spicy:"",
        type:"",
        image:""
    });

    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        async function fetchData(){
            const id = params.id.toString;
            const response = await fetch(`http://localhost:5001/api/ingredients/${params.id}`);
            if(!response.ok){
                const message = `An error has occured: ${response.statusText}`;
                window.alert(message);
                return;
            }
            const record = await response.json();
            if (!record) {
                window.alert(`Record with id ${id} not found`);
                navigate("/");
                return;
              }
              setForm(record);
        }
        fetchData();

        return;

    },[params.id, navigate]);

    function updateForm(value){
        return setForm((prev)=>{
            return {...prev,...value};
        });
    }


    async function onSubmit(e){
        e.preventDefault();
        const editedIngredient = {
            name: form.name,
            layer: form.layer,
            saltLevel: form.saltLevel,
            vegan: form.vegan,
            spicy: form.spicy,
            type: form.type,
            image: form.image
    }
    await fetch(`http://localhost:5001/api/ingredients/update/${params.id}`,{
        method : "PATCH",
        body: JSON.stringify(editedIngredient),
        headers: {
            "Content-Type" : "application/json"
        },

    });
    navigate("/Products")


};

return (
        <Container>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>EDIT INGREDIENTS</Card.Title>
                    <Card.Text>This section allows you to edit the ingredient to fix initally wrongly defined values or adjust according to changed recipe.</Card.Text>
                    <Row xs={1} md={3} className="g-4 justify-content-md-center">
                        <Col>
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name : </label>
                                <input type="text" className="form-control" id="name" value={form.name}
                                onChange={(e)=>updateForm({name: e.target.value})} />
                            </div>
                            <div className="form-group">
                            <label htmlFor="layer">Layer : </label>
                            <input type="text" className="form-control" id="layer" value={form.layer}
                            onChange= {(e)=> updateForm({layer: e.target.value})} />
                            </div>
                            <div className="form-group">
                            <label htmlFor="saltLevel">Salt Level : </label>
                            <input type="text" className="form-control" id="saltLevel" value={form.saltLevel}
                            onChange= {(e)=> updateForm({saltLevel: e.target.value})} />
                            </div>
                            <div className="form-group">
                            <label htmlFor="saltLevel">Vegan : </label>
                            <input type="text" className="form-control" id="vegan" value={form.vegan}
                            onChange= {(e)=> updateForm({vegan: e.target.value})} />
                            </div>
                            <div className="form-group">
                            <label htmlFor="spicy">Spicy : </label>
                            <input type="text" className="form-control" id="spicy" value={form.spicy}
                            onChange= {(e)=> updateForm({spicy: e.target.value})} />
                            </div>
                            <div className="form-group">
                            <label htmlFor="type">Type : </label>
                            <input type="text" className="form-control" id="type" value={form.type}
                            onChange= {(e)=> updateForm({type: e.target.value})} />
                            </div>
                            <div className="form-group">
                            <label htmlFor="image">Image : </label>
                            <input type="text" className="form-control" id="image" value={form.image}
                            onChange= {(e)=> updateForm({image: e.target.value})} />
                            </div>
                            <br />
                            <div className="form-group">
                                <input type="submit" value="Update Ingredient" className="btn btn-primary" />
                            </div>
                        </form>
                        </Col>
                        <Col>

                            <Image src={SideImage} fluid/>

                        </Col>
                    </Row>       
                </Card.Body>
            </Card>
        </Container>

)
}
