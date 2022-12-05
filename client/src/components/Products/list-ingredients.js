import Container from "react-bootstrap/Container"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Text from "../../local-json/products-text.json"
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ingredient = (ingredient)=>{
    (
        <Row xs={1} md={4} className="g-4">
            <Col>
                <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>{ingredient.name}</Card.Title>
                    <Card.Text>{ingredient.layer}</Card.Text>
                    <Card.Text>{ingredient.saltLevel}</Card.Text>
                    <Card.Text>{ingredient.Vegan}</Card.Text>
                    <Card.Text>{ingredient.type}</Card.Text>
                    <Card.Text>{ingredient.spicy}</Card.Text>
                    </Card.Body>
                </Card>
        </Col>
    </Row>
    )};

function ListIngredients(){

    const [ingredients, setIngredients] = useState([]);
     // This method fetches the records from the database.
    useEffect(()=>{
        async function getIngredients(){
            const response = await fetch("http://localhost:5001/api/ingredients");
            const ingredients = await response.json();
            console.log(ingredients);
            setIngredients(ingredients);
            console.log(ingredients);
        }
        getIngredients();
        return;
    }, [ingredient.length]);

    return(
        <Container>
            <Card className="text-center">
            <Card.Body>
            <Card.Title>{Text.heading}</Card.Title>
            <Card.Text>{Text.text}</Card.Text>
                <h2>Dough</h2>
                <Row xs={1} md={4} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
            </Card.Body>
            </Card>
        </Container>
    )
}
export default ListIngredients;