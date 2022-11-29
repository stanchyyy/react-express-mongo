import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Text from "../../local-json/products-text.json"

function ListIngredients(){
    return(
        <Container>
            <Card className="text-center">
                <Card.Img variant="top" src="../img/ingredients.jpg"/>
                <Card.Title>{Text.heading}</Card.Title>

            </Card>
        </Container>
    )
}

export default ListIngredients;