import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { CiLocationOn} from 'react-icons/ci';
import { IoMdTimer } from 'react-icons/io';
import { AiOutlinePhone } from 'react-icons/ai';
import ListGroup from 'react-bootstrap/ListGroup';


let iconSize = 35;


function Locations(){
    return (
        <Container fluid>
        <Card className="text-center">

            <Card.Body>
                <Card.Text>{Text.text}</Card.Text>
                <h1>Locations</h1>

                <Row>
                    <Col >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1959.2260720476286!2d23.37391733873577!3d42.62908728580281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8716e575e63f%3A0xa066f21959946f62!2sPizza%20Lab!5e0!3m2!1sbg!2sbg!4v1682124460933!5m2!1sbg!2sbg" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Col>
                    <Col >
                    <Container>
                    <Row style={{"text-align" :"left"}} className="fs-3">
                        <ListGroup variant="flush" >
                            <ListGroup.Item  >
                                <CiLocationOn size={iconSize}/> 4 Samara St., 1715 Mladost 4, Sofia Located at: Advance Business Center 1
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <IoMdTimer size={iconSize}/> Every day from 11:00 to 22:00
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <AiOutlinePhone size={iconSize}/> +359 892 415 678
                            </ListGroup.Item>
                        </ListGroup>
                    </Row>
                    </Container>
                     </Col>
                </Row>
            </Card.Body>
            </Card>
            </Container>
    )
}


export default Locations;
