import Container from "react-bootstrap/Container"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Text from "../../local-json/products-text.json"
import React, { useEffect, useState } from "react";
import { IngredientsImg } from "../../img/img.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup, faSquare } from '@fortawesome/free-solid-svg-icons'
import { faSquare as faSquareRegular } from "@fortawesome/free-regular-svg-icons";
import "../styles/list-ingredients.css"
import { Link } from "react-router-dom";
import { BsPatchPlus  } from 'react-icons/bs';


function ListIngredients() {
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        const getIngredients = async () => {
            const ingredients = await (
                await fetch("http://localhost:5001/api/ingredients")).json();
            setIngredients(ingredients);
        }
        getIngredients();
    }, []);

    function MapSaltLevel(level, icon, maxLevel, altIcon) {
        let saltComponent = [];
        for (let i = 0; i < level; i++) {
            saltComponent.push(<FontAwesomeIcon icon={icon} />)
        }
        for (let y = level; y < maxLevel; y++) {
            saltComponent.push(<FontAwesomeIcon icon={altIcon} />)
        }
        return (
            <Stack direction="horizontal" gap={1} className="justify-content-md-center">
                {saltComponent}
            </Stack>
        )
    }

    function Pills(vegan,spicy) {
        let veganPill = <Row md={1}>
                            <Col className="justify-content-md-center">
                                <Badge pill bg="success">Vegan</Badge>
                            </Col>
                        </Row>;
        if(!vegan){
            veganPill = <Row md={1} style={{ visibility: 'hidden'}}>
                            <Col className="justify-content-md-center">
                                <Badge pill bg="success">Vegan</Badge>
                            </Col>
                        </Row>;
        }
        let hotPill =   <Row md={1}>
                            <Col>
                                <Badge pill bg="danger">Hot</Badge>
                            </Col>
                        </Row>;
        if(!spicy){
            hotPill= <Row md={1} style={{ visibility: 'hidden'}}>
                            <Col>
                                <Badge pill bg="danger">Hot</Badge>
                            </Col>
                        </Row>;
        }
        return (
            <Container>
                {veganPill}
                {hotPill}
            </Container>
        )
    }

    async function deleteRecord(id) {
        await fetch(`http://localhost:5001/api/ingredients/delete/${id}`, {
          method: "DELETE"
        });
      
        const newIngredients = ingredients.filter((el) => el._id !== id);
        setIngredients(newIngredients);
      }

    function MapRecords(filter) {
        let filteredIngredients = ingredients.filter(ingredinet => ingredinet.type === filter)
        return (
            filteredIngredients.map((ingredient) =>
                <Col key={ingredient._id}>
                    <Card>
                        <Card.Img src={Object.keys(IngredientsImg).includes(ingredient.image) ? IngredientsImg[ingredient.image] : IngredientsImg["null.png"]} />
                        <Card.Body>
                            <Card.Title>{ingredient.name}</Card.Title>
                            <Card.Title>{Pills(ingredient.vegan,ingredient.spicy)}</Card.Title>
                            <Card.Text><FontAwesomeIcon icon={faLayerGroup} /> {ingredient.layer}</Card.Text>
                            <Card.Text>Salt Level {MapSaltLevel(ingredient.saltLevel, faSquare, 5, faSquareRegular)}</Card.Text>
                            <Stack direction="horizontal" gap={3} className="justify-content-md-center">
                            <Link className="btn btn-link" to={`/Products/edit/${ingredient._id}`}>
                                <Button  variant="secondary">
                                    Edit
                                </Button>
                            </Link>
                            <Button  variant="outline-danger" onClick={() => {
                                deleteRecord(ingredient._id);
                                }}>Delete</Button>
                            </Stack>
                            
                        </Card.Body>
                    </Card>
                </Col>
            ))
    }


    return (
        <Container id="list-ingredients">
                    <Card className="text-center">
            
            <Card.Body>
                <Card.Title><h2>{Text.heading}</h2></Card.Title>
                <Card.Text>{Text.text}</Card.Text>
                <Row xs={1} md={3} className="g-4 justify-content-md-center">
                        <Col>
                            <h2>Dough</h2>
                            <hr className="hr hr-blurry" />
                        </Col>
                    </Row>
                    <Row xs={1} md={4} className="g-4">
                        {MapRecords("dough")}
                    </Row>
                    <Row xs={1} md={3} className="g-4 justify-content-md-center">
                        <Col>
                            <h2>Vegetables</h2>
                            <hr className="hr hr-blurry" />
                        </Col>
                    </Row>
                    <Row xs={1} md={4} className="g-4">
                        {MapRecords("vegetable")}
                    </Row>
                    <Row xs={1} md={3} className="g-4 justify-content-md-center">
                        <Col>
                            <h2>Meat</h2>
                            <hr className="hr hr-blurry" />
                        </Col>
                    </Row>
                    <Row xs={1} md={4} className="g-4">
                        {MapRecords("meat")}
                    </Row>
                    <Row xs={1} md={3} className="g-4 justify-content-md-center">
                        <Col>
                            <h2>Cheese</h2>
                            <hr className="hr hr-blurry" />
                        </Col>
                    </Row>
                    <Row xs={1} md={4} className="g-4">
                        {MapRecords("cheese")}
                    </Row>
            </Card.Body>
        </Card>
        
        {/* <a href="/Products/add" id="add-ingredient-button" class="btn btn-success btn-lg my-float" role="button"><BsPatchPlus/> Add</a> */}

        <Link className="btn btn-success btn-lg my-float" to={`/Products/add`} id="add-ingredient-button">

                                <BsPatchPlus/> Add

                            </Link>

        </Container>
    )
}
export default ListIngredients;