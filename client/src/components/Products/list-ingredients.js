import Container from "react-bootstrap/Container"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Text from "../../local-json/products-text.json"
import React from "react";



async function ListIngredients() {

    const response = await fetch("http://localhost:5001/api/ingredients");
    const data = await response.json();
    data.then((ingredients)=>
        ingredients.map((ingredient) =>
            <Row xs={1} md={4} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>{ingredient.name}</Card.Title>
                            <Card.Text>{ingredient.layer}</Card.Text>
                            <Card.Text>{ingredient.saltLevel}</Card.Text>
                            <Card.Text>{ingredient.vegan}</Card.Text>
                            <Card.Text>{ingredient.type}</Card.Text>
                            <Card.Text>{ingredient.spicy}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
    ));


    return (
        <Container>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>{Text.heading}</Card.Title>
                    <Card.Text>{Text.text}</Card.Text>
                    <h2>Dough</h2>
                    {data}
                </Card.Body>
            </Card>
        </Container>
    )
}
export default ListIngredients;