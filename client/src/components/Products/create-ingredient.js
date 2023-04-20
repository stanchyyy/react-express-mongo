import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import { useNavigate } from "react-router";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideImage from "../../img/products/edit-form-image.jpg"
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import Stack from "react-bootstrap/esm/Stack";

export default function CreateIngredient(){
    const [form, setForm] = useState({
        name: "",
        layer: "top",
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

    async function onSubmit(e){
        e.preventDefault();
        const addIngredient = {
            name: form.name,
            layer: form.layer,
            saltLevel: form.saltLevel,
            vegan: form.vegan,
            spicy: form.spicy,
            type: form.type,
            image: form.image
    }
    await fetch(`http://localhost:5001/api/ingredients/add`,{
        method : "POST",
        body: JSON.stringify(addIngredient),
        headers: {
            "Content-Type" : "application/json"
        },

    });
    navigate("/Products")


};

function LayerOptions(){
    const layers = ["top","middle","bottom"];
    const result = layers.map((layer)=>
    <option value={layer}>{layer}</option>

)
        return result;
}

function SaltLevel(){
    const [radioValue, setRadioValue] = useState(0);
    let radio = [0,1,2,3,4,5].map((level) => (
        
        <Form.Check 
        inline
        label={level}
        value={level}
        name="group1"
        type="radio"
        id={`inline-${level}`}
        onChange={(e) => setRadioValue(e.currentTarget.value)}
        />
    ))

    let result = 
    <ButtonGroup onChange={(e)=>updateForm({saltLevel: parseInt(e.target.value)})}>
        {radio}
    </ButtonGroup>

    return result;
}

function Vegan(){
    const [checkValue, setCheckValue] = useState(false);

    let result = 
    <Form.Check type="checkbox" id="check-api-checkbox-vegan">
    <Form.Check.Input type="checkbox" isValid checked={checkValue} onChange={(e)=>{
            if(e.target.checked){
                setCheckValue(true);
                updateForm({vegan: true})}
                else {
                    setCheckValue(false);
                    updateForm({vegan: false})
                    }
            }}/>
    <Form.Check.Label>Vegan</Form.Check.Label>
    </Form.Check>;

    return result;
}

function Spicy(){
    const [checkValue, setCheckValue] = useState(false);

    let result = 
    <Form.Check type="checkbox" id="check-api-checkbox-spicy">
    <Form.Check.Input type="checkbox" isInvalid checked={checkValue} onChange={(e)=>{
            if(e.target.checked){
                setCheckValue(true);
                updateForm({spicy: true})}
                else {
                    setCheckValue(false);
                    updateForm({spicy: false})
                    }
            }}/>
    <Form.Check.Label>Spicy</Form.Check.Label>
    </Form.Check>;

    return result;
}

    return (
        <Container>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>ADD INGREDIENT</Card.Title>
                    <Card.Text>This section allows you to add new ingredient with it's respective properties - salt level, type, spiciness, vegan, and add display image.</Card.Text>
                    <Row xs={1} md={3} className="g-4 justify-content-md-center">
                        <Col>
                        <Form onSubmit={onSubmit}>
                        <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
                        <Form.Control  type="text" placeholder="Name" value={form.name}
                                onChange={(e)=>updateForm({name: e.target.value})}/>
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingInput" label="Type" className="mb-3">
                        <Form.Control  type="text" placeholder="Type" value={form.type}
                                onChange={(e)=>updateForm({type: e.target.value})}/>
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingInput" label="Image" className="mb-3">
                        <Form.Control  type="text" placeholder="Image" value={form.image}
                                onChange={(e)=>updateForm({image: e.target.value})}/>
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingSelectLayer" label="Layer">
                            <Form.Select aria-label="Floating label select layer" value={form.layer} onChange={(e)=>updateForm({layer: e.target.value})}>
                                {LayerOptions()}
                                </Form.Select>
                            </FloatingLabel>
                        
                        <InputGroup>
                        <Form.Control plaintext readOnly defaultValue="Salt Level"  />
                        <div key="inline-radio" className="mb-3">
                        {SaltLevel(form.saltLevel)}
                        </div>
                        </InputGroup>

                        <div key="vegan-checkbox" className="mb-3">
                            {Vegan(form.vegan)}
                        </div>

                        <div key="spicy-checkbox" className="mb-3">
                            {Spicy(form.spicy)}
                        </div>
                        <br />
                        <Form.Group  as={Stack} gap={3}    className="mb-3">
                            <Col>
                            <input type="submit" value="Add Ingredient" className="btn btn-primary" />
                            </Col>
                            <Col>
                            <input value="Cancel" className="btn btn-light" onClick={()=>navigate("/Products")} />
                            </Col>
                        </Form.Group>
                        </Form>
                        </Col>
                        <Col>
                            <Image src={SideImage} fluid/>
                        </Col>
                    </Row>       
                </Card.Body>
            </Card>
        </Container>
)};



