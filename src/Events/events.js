import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col,Carousel, Button, Navbar, Nav, Container, NavDropdown, Row, Card } from 'react-bootstrap';
import IMG1 from '../../src/image/event1.jpg';
import IMG2 from '../../src/image/event3.jpg';
import IMG3 from '../../src/image/event4.jpg';
import './events.css';
function events() {
    return (
        <div className='myevents'>
            <h1>Featured Events</h1>
            <Row>
                <Col md className="getanimation">
                <Card.Img src={IMG1}/>
                <Card.Body>
                    <Card.Title>IEEE CS LU SBC</Card.Title>
                    <Card.Text>Certificate and Prize-Giving Ceremony of LU Research Bootcamp 2021</Card.Text>
                    <Button>Read More..</Button>
                </Card.Body>
                
                </Col>
                <Col md className="getanimation">
                <Card.Img src={IMG3}/>
                <Card.Body>
                    <Card.Title>IEEE CS LU SBC</Card.Title>
                    <Card.Text>Certificate and Prize-Giving Ceremony of LU Research Bootcamp 2021</Card.Text>
                    <Button>Read More..</Button>
                </Card.Body>
                
                </Col>
                <Col md className="getanimation">
                     <Card.Img src={IMG2}/>
                     <Card.Body>
                        <Card.Title>IEEE CS LU SBC</Card.Title>
                        <Card.Text>Closing Ceremony of LU Research Bootcamp 2021</Card.Text>
                        <Button>Read More..</Button>
                    </Card.Body>
                </Col>
                
            </Row>
        </div>

);
}

export default events;