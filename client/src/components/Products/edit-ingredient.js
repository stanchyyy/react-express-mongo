import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import { useParams, useNavigate } from "react-router";
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

function LayerOptions(oldValue){
    const layers = ["top","middle","bottom"];
    let arrangedLayers = [...layers];
    let oldLayerIndex = layers.indexOf(oldValue);
    if(oldLayerIndex!==0){
        let swapValue = layers[0];
        let swapIndex = oldLayerIndex;
        arrangedLayers[0]=oldValue;
        arrangedLayers[swapIndex] = swapValue;
    }
    const result = arrangedLayers.map((layer)=>
    <option value={layer}>{layer}</option>

)
        return result;
}

function SaltLevel(oldValue){
    const [radioValue, setRadioValue] = useState(oldValue);
    useEffect(() => { setRadioValue(oldValue)}, [oldValue] )
    console.log(oldValue +' and the use state'+ radioValue);


    let radio = [0,1,2,3,4,5].map((level) => (
        
        <Form.Check 
        inline
        label={level}
        value={level}
        name="group1"
        type="radio"
        id={`inline-${level}`}
        checked={level.toString() === radioValue.toString()}
        onChange={(e) => setRadioValue(e.currentTarget.value)}
        />
    ))

    let result = 
    <ButtonGroup onChange={(e)=>updateForm({saltLevel: parseInt(e.target.value)})}>
        {radio}
    </ButtonGroup>

    return result;
}

function Vegan(oldValue){
    const [checkValue, setCheckValue] = useState(false);
    useEffect(() => { setCheckValue(oldValue)}, [oldValue] );
    console.log(oldValue +' and the use state'+ checkValue);


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

function Spicy(oldValue){
    const [checkValue, setCheckValue] = useState(false);
    useEffect(() => { setCheckValue(oldValue)}, [oldValue] );
    console.log(oldValue +' and the use state'+ checkValue);


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
                    <Card.Title>EDIT INGREDIENTS</Card.Title>
                    <Card.Text>This section allows you to edit the ingredient to fix initally wrongly defined values or adjust according to changed recipe.</Card.Text>
                    <Row xs={1} md={3} className="g-4 justify-content-md-center">
                        <Col>
                        <Form onSubmit={onSubmit}>
                        <FloatingLabel controlId="floatingInputName" label="Name" className="mb-3">
                        <Form.Control  type="text" placeholder="Name" value={form.name}
                                onChange={(e)=>updateForm({name: e.target.value})}/>
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingInputType" label="Type" className="mb-3">
                        <Form.Control  type="text" placeholder="Type" value={form.type}
                                onChange={(e)=>updateForm({type: e.target.value})}/>
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingInputImage" label="Image" className="mb-3">
                        <Form.Control  type="text" placeholder="Image" value={form.image}
                                onChange={(e)=>updateForm({image: e.target.value})}/>
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingSelectLayer" label="Layer">
                            <Form.Select aria-label="Floating label select layer" value={form.layer} onChange={(e)=>updateForm({layer: e.target.value})}>
                                {LayerOptions(form.layer)}
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
                        <Form.Group as={Stack} gap={3}   className="mb-3">
                            <Col >
                            <input type="submit" value="Update Ingredient" className="btn btn-primary" />
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

)
}
