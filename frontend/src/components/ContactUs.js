import React from 'react';
import "./ContactUs.css";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';

const ContactUs = () => {
  return (
    <div className='contactUs'>
        <div className='title'>
            <h1>Get in Touch</h1>
        </div>
        <div className='box'>
            
            <div className='contact form'>
                <h3>Send a Message</h3>
                <form>
                    <div className='formBox'>
                        <div className='row50'>
                            <div className='inputBox'>
                                <span>First Name</span>
                                <input type='text' placeholder='Sandaruwan'></input>
                            </div>
                            <div className='inputBox'>
                                <span>Last Name</span>
                                <input type='text' placeholder='Jayasinghe'></input>
                            </div>
                        </div>

                        <div className='row50'>
                            <div className='inputBox'>
                                <span>Email</span>
                                <input type='text' placeholder='sandaruwan@gmail.com'></input>
                            </div>
                            <div className='inputBox'>
                                <span>Mobile</span>
                                <input type='text' placeholder='+94 987 654 3250'></input>
                            </div>
                        </div>

                        <div className='row100'>
                            <div className='inputBox'>
                                <span>Message</span>
                                <textarea placeholder='Write your message here...'></textarea>
                            </div>
                        </div>

                        <div className='row100'>
                            <div className='inputBox'>
                                <input type="submit" value="Send"></input>
                            </div>
                        </div>
                        
                    </div>
                </form>
            </div>


            <div className='contact info'>
                <h3>Contact Info</h3>
                <div className='infoBox'>
                    <div>
                        <span><FaHome /></span>
                        <p>No:345/2,Molagoda,Kegalle<br/>Sri Lanka</p>
                    </div>
                    <div>
                        <span><MdEmail  /></span>
                        <a href="mailto:greenlankaproducts@gmail.com">greenlankaproducts@gmail.com</a>
                    </div>
                    <div>
                        <span><FaPhoneAlt /></span>
                        <a href="tel:+94 770 402 794">+94 770 402 794</a>
                    </div>
                    
                </div>
            </div>


            <div className='contact map'>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.8801417379836!2d80.38422907405096!3d7.254479814239377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae314093c2f0ccb%3A0xe78bd76c94c3c3ff!2sKITHULA%20-%20GREEN%20LANKA%20PRODUCTS!5e0!3m2!1sen!2slk!4v1718366073344!5m2!1sen!2slk" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
            </div>
        </div>
    </div>
  )
}

export default ContactUs