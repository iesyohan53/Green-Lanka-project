import React from 'react';
import "./About.css";
import img7 from './Images/Im7.jpg';


const About = () => {
  return (

    <div>
    <div className='heading'>
      <h1>About Us</h1>
    </div>
    <div className='container'>
      <section className='about'>
      <div className='about-image'>
      <img src={img7} alt=''/>
      </div>
      <div className='about-content'>
        <p>
        The kithul tree (Caryota urens), a remarkable species native to Sri Lanka, thrives in tropical 
        climates and plays a pivotal role in the island’s culture, economy, and cuisine. Distinguished by its feathery, 
        bipinnate leaves and tall, slender trunk, the kithul tree is not only a striking element of the landscape 
        but also a vital resource for the production of traditional foods and materials. The sap extracted from its
        inflorescence is skillfully processed into kithul jaggery, a rich, caramel-like sugar that enhances a variety of 
        local desserts and beverages. This sap, through fermentation, also becomes the base for toddy,
        a popular alcoholic drink. Additionally, the fiber from the kithul's trunk and leaves is utilized for making robust
        ropes and mats. Beyond its economic contributions, the kithul tree is deeply rooted in Sri Lankan heritage, 
        symbolizing sustainability and the intricate relationship between nature and traditional practices. 
        As a multifaceted plant, the kithul stands as a testament to the enduring bond between Sri Lankan people 
        and their natural environment
        </p>
        <a href="" className='read-more'>Read More</a>
      </div>
      </section>
    </div>

    <div className='primary-heading'>
      <p>Vision</p>
    </div>
    <div className='text'>
    <p>Establish a strong kithul industry that provides high quality service to the kithul farmers and
    consumers.</p>
    </div>

    <div className='primary-heading'>
      <p>Mission</p>
    </div>
    <div className='text'>
    <p>Organize kithul producers, improve the quality of kithul products, introduce new
       technology in to kithul industry and improve the living standards of the producers
       by purchasing their products and make available pure kithul products in the
       market.</p>
    </div>
    </div>
    
  )
}

export default About;