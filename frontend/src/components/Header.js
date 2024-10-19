import React from 'react';
import "./Header.css";
import Carousel from 'react-bootstrap/Carousel';
import img1 from './Images/Im1.jpg';
import img2 from './Images/Im2.jpg';
import img3 from './Images/Im3.jpg';
import img4 from './Images/Im4.JPG';
import img5 from './Images/Im5.jpg';
import img6 from './Images/Im6.jpg';

const Header = () => {
  return (
    <div>
      
        <Carousel>
      <Carousel.Item>
        <img style={{height:'90vh'}}
        className="d-block w-100" src={img1} alt="" />
        <Carousel.Caption className="caption-left-middle">
          <h3 className="bold-text">Trusted Name For<br/> Pure Kithul <br/>Treacle, Jaggery and Sweetmeats...</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height:'90vh'}}
      className="d-block w-100" src={img2} alt="" />
        
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height:'90vh'}}
       className="d-block w-100" src={img3} alt="" />
        
      </Carousel.Item>
    </Carousel>

    <h2 className="primary-heading">Our Categories</h2>
    <div className='card-container'>
        <div className='card'>
            <img src={img4} alt=''/>
            <div className='card-content'>
                <h3>Kithul Products</h3>
                <a href=" " className='btn'>View</a>
            </div>
        </div>
        <div className='card'>
            <img src={img5} alt=''/>
            <div className='card-content'>
                <h3>Kithul Sweets</h3>
                <a href=" " className='btn'>View</a>
            </div>
        </div>
        <div className='card'>
            <img src={img6} alt=''/>
            <div className='card-content'>
                <h3>Special Sweets</h3>
                <a href=" " className='btn'>View</a>
            </div>
        </div>
        </div>
    </div>

    
  )
}

export default Header;