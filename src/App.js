import React from 'react';
import './App.css';
import Event from './Events/events';
import News from './news/news';
import Achi from './Achievement/Achievement';
import Header from './Header/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Navbar, Nav, Container, NavDropdown,Row,Col } from 'react-bootstrap';
import { Button } from 'bootstrap';


function App() {
  return (
    
    
      <div className="App">
            <Header /> 

            <div className='myhome'>
                <div className='bannerContent'>
                    <div className='ieee-cs'>
                      <div className='ieee bannerH1'>IEEE</div>
                      <div className='computer-society'>
                        <div className='computer'>Computer</div>
                        <div className='society'>Society</div>
                      </div>
                    </div>
                    <div className='sbc bannerH1'>
                    STUDENT BRANCH CHAPTER
                    </div>
                    <div className='bannerDivider'></div>
                    <div className='leading-university'>Leading University , Ragibnagar, Sylhet-3112, Bangladesh</div>
                    <div className='banner-about-us-btn pill-fill-btn'> About us </div>
                </div>
            </div>

            <Container className="mycon">
            
            <Achi />

            <Event/>  

            <News />
            
           
           
            <div> 
            <footer className="App-bottom">
              <p>copyright &copy; 2022</p>
            </footer> 
            </div> 
            </Container>
        </div> 
  );
}

export default App;
