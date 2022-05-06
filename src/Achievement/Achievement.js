import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Carousel, Button, Row, Card } from 'react-bootstrap';
import IMG1 from '../../src/image/event1.jpg';
import IMG2 from '../../src/image/event3.jpg';
import IMG3 from '../../src/image/event4.jpg';
 
function Achievement() {
    return (
        <div md class="ourachi">
              <h1>Our Achievements</h1>
                <Carousel class="ourachicer">
                <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_8000/https://ieeeaiubsb.com/wp-content/uploads/2020/09/r10-web-01.png"
                        alt="First slide"
                      />  
                      
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_960/https://ieeeaiubsb.com/wp-content/uploads/2020/09/Honorable-Mention-01-01.png"
                        alt="Second slide"
                      />

                      
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_960/https://ieeeaiubsb.com/wp-content/uploads/2020/09/162856111_251025240075541_6139007134152635319_n-01-01.png"
                        alt="Third slide"
                      />
                    </Carousel.Item>
              </Carousel>
          </div> 
        
);
}

export default Achievement;