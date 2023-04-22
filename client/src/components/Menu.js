import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function Menu(){
    const [menu,setMenu] = useState([]);

    useEffect(() => {
        const getMenu = async () => {
            const menu = await (
                await fetch("http://localhost:5001/api/menu")).json();
            setMenu(menu);
        }
        getMenu();
    }, []);

    function categorizeMenu(){
        let categorizedItems = [];
        menu.forEach((item)=>{
            if(item.type in categorizedItems){
                categorizedItems[item.type].push(item);
            }else{
                categorizedItems[item.type] = [item];
            }
        })
        return (
            <Table  borderless hover variant="dark">
            {Object.keys(categorizedItems).map((category)=>{
                return (
                    <>
                        <thead >
                            <tr >
                                <th className="text-center bg-white text-dark"><h1 >{category.toUpperCase()}</h1></th>
                            </tr>
                        </thead>
                        <tbody>
                            {categorizedItems[category].map((item)=>{
                                return(
                                    <tr>
                                        <td>
                                        <Container className="text-center">
                                            <Row>
                                                <Col>
                                                    <h4><b>{item.name}</b></h4>
                                                    <h6 class="w3-text-grey">{item.ingredients.join(', ')}</h6>
                                                </Col>
                                                <Col>
                                                <h4><b>{item.price.$numberDecimal} leva</b></h4>
                                                </Col>
                                            </Row>
                                        </Container>
                                         

                                        </td>
                                    </tr>
                                )})}
                        </tbody>
                    </>
                )
            })}
        </Table>
    )}


    return (
        <Container fluid>
        <Card className="text-center">

            <Card.Body>
                <Card.Text>{Text.text}</Card.Text>
                {categorizeMenu()}
            </Card.Body>
            </Card>
            </Container>
        );
}

export default Menu;