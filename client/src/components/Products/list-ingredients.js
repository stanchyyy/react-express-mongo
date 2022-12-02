import Container from "react-bootstrap/Container"
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Text from "../../local-json/products-text.json"
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RecordList(){

}

function ListIngredients(){
    return(
        <Container>
            <Card className="text-center">
            <Card.Body>
                <Card.Title>{Text.heading}</Card.Title>
                <Card.Text>{Text.text}</Card.Text>
                <h2>Dough</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Layer</th>
                            <th>Salt Level</th>
                            <th>Spicy</th>
                            <th>Vegan</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>{RecordList()}</tbody>
                </Table>
                </Card.Body>
            </Card>
        </Container>
    )
}
export default ListIngredients;