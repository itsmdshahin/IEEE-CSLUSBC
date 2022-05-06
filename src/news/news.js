import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Button, Row, Card } from 'react-bootstrap';
import IMG1 from '../../src/image/event1.jpg';
import IMG2 from '../../src/image/event3.jpg';
import IMG3 from '../../src/image/event4.jpg';
 
function news() {
    return (
        <div className='myevents'>
            <h1>News</h1>
            <Row md>
                <Col lg={3} md={6} className="#">
                <Card.Img src={IMG1}/>
                <Card.Body>
                    <Card.Title>Certificate and Prize-Giving Ceremony of LU Research Bootcamp 2021</Card.Title>
                    <Card.Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione enim dicta ut ullam, eaque u nda e esse nam quisquam, ea impedit omnis nihil asperiores neque incidunt, totam molestiae hic? Facilis asperiores tenetur in neque minus corporis dolores, suscipit sed eius veniam adipisci iure quia cupiditate blanditiis. Iure illo numquam nam harum?</Card.Text>
                    <Button>Read More..</Button>
                </Card.Body>
                </Col>
                <Col lg={3} md={6}>
                    <Card.Img src={IMG2}/>
                    <Card.Body>
                        <Card.Title>Certificate and Prize-Giving Ceremony of LU Research Bootcamp 2021</Card.Title>
                        <Card.Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione enim dicta ut ullam, eaque u nda e esse nam quisquam, ea impedit omnis nihil asperiores neque incidunt, totam molestiae hic? Facilis asperiores tenetur in neque minus corporis dolores, suscipit sed eius veniam adipisci iure quia cupiditate blanditiis. Iure illo numquam nam harum?</Card.Text>
                        <Button>Read More..</Button>
                    </Card.Body>

                </Col>
                <Col lg={3} md={6} className="#">
                <Card.Img src={IMG3}/>
                <Card.Body>
                    <Card.Title>Certificate and Prize-Giving Ceremony of LU Research Bootcamp 2021</Card.Title>
                    <Card.Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione enim dicta ut ullam, eaque u nda e esse nam quisquam, ea impedit omnis nihil asperiores neque incidunt, totam molestiae hic? Facilis asperiores tenetur in neque minus corporis dolores, suscipit sed eius veniam adipisci iure quia cupiditate blanditiis. Iure illo numquam nam harum?</Card.Text>
                        <Button>Read More..</Button>
                </Card.Body>
                
                </Col>
                <Col lg={3} md={6} className="#">
                     <Card.Img src={IMG2}/>
                     <Card.Body>
                        <Card.Title>Certificate and Prize-Giving Ceremony of LU Research Bootcamp 2021</Card.Title>
                        <Card.Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione enim dicta ut ullam, eaque u nda e esse nam quisquam, ea impedit omnis nihil asperiores neque incidunt, totam molestiae hic? Facilis asperiores tenetur in neque minus corporis dolores, suscipit sed eius veniam adipisci iure quia cupiditate blanditiis. Iure illo numquam nam harum?</Card.Text>
                        <Button>Read More..</Button>
                    </Card.Body>
                </Col>
                
            </Row>
            <Row md>
                <Col lg={3} md={6} className="#">
                <Card.Img src={IMG3}/>
                <Card.Body>
                    <Card.Title>Certificate and Prize-Giving Ceremony of LU Research Bootcamp 2021</Card.Title>
                    <Card.Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione enim dicta ut ullam, eaque u nda e esse nam quisquam, ea impedit omnis nihil asperiores neque incidunt, totam molestiae hic? Facilis asperiores tenetur in neque minus corporis dolores, suscipit sed eius veniam adipisci iure quia cupiditate blanditiis. Iure illo numquam nam harum?</Card.Text>
                        <Button>Read More..</Button>
                </Card.Body>
                </Col>
                <Col lg={3} md={6} >
                    <Card.Img src={IMG1}/>
                    <Card.Body>
                        <Card.Title>Certificate and Prize-Giving Ceremony of LU Research Bootcamp 2021</Card.Title>
                        <Card.Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione enim dicta ut ullam, eaque u nda e esse nam quisquam, ea impedit omnis nihil asperiores neque incidunt, totam molestiae hic? Facilis asperiores tenetur in neque minus corporis dolores, suscipit sed eius veniam adipisci iure quia cupiditate blanditiis. Iure illo numquam nam harum?</Card.Text>
                        <Button>Read More..</Button>
                    </Card.Body>

                </Col>
                <Col lg={3} md={6}  className="#">
                <Card.Img src={IMG2}/>
                <Card.Body>
                    <Card.Title>Certificate and Prize-Giving Ceremony of LU Research Bootcamp 2021</Card.Title>
                    <Card.Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione enim dicta ut ullam, eaque u nda e esse nam quisquam, ea impedit omnis nihil asperiores neque incidunt, totam molestiae hic? Facilis asperiores tenetur in neque minus corporis dolores, suscipit sed eius veniam adipisci iure quia cupiditate blanditiis. Iure illo numquam nam harum?</Card.Text>
                        <Button>Read More..</Button>
                </Card.Body>
                
                </Col>
                <Col lg={3} md={6} className="#">
                     <Card.Img src={IMG3}/>
                     <Card.Body>
                        <Card.Title>Certificate and Prize-Giving Ceremony of LU Research Bootcamp 2021</Card.Title>
                        <Card.Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione enim dicta ut ullam, eaque u nda e esse nam quisquam, ea impedit omnis nihil asperiores neque incidunt, totam molestiae hic? Facilis asperiores tenetur in neque minus corporis dolores, suscipit sed eius veniam adipisci iure quia cupiditate blanditiis. Iure illo numquam nam harum?</Card.Text>
                        <Button>Read More..</Button>
                    </Card.Body>
                </Col>
                
            </Row>
        </div>

);
}

export default news;