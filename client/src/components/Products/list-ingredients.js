import Container from "react-bootstrap/Container"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Text from "../../local-json/products-text.json"
import CardGroup from 'react-bootstrap/CardGroup';
import React, { useEffect, useState } from "react";



function ListIngredients() {
    const [ingredients, setIngredients] = useState([]);

useEffect(()=>{
    const getIngredients = async()=> {
        const ingredients = await(
            await fetch("http://localhost:5001/api/ingredients")).json();
            setIngredients(ingredients);
        }
        getIngredients();
},[]);



function MapRecords(){
    return (
        ingredients.map((ingredient) =>
                <Col key = {ingredient._id}>
                <Card >
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>{ingredient.name}</Card.Title>
                        <Card.Text>{ingredient.layer}</Card.Text>
                        <Card.Text>{ingredient.saltLevel}</Card.Text>
                        <Card.Text>{String(ingredient.vegan)}</Card.Text>
                        <Card.Text>{ingredient.type}</Card.Text>
                        <Card.Text>{String(ingredient.spicy)}</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
))}

    return (
        <Container>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>{Text.heading}</Card.Title>
                    <Card.Text>{Text.text}</Card.Text>
                        <Row xs={1} md={4} className="g-4">
                            <Col>
                            <h2>Dough</h2>
                            </Col>
                        </Row>
                        <Row xs={1} md={3} className="g-4">
                        {MapRecords()}
                        </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}
export default ListIngredients;