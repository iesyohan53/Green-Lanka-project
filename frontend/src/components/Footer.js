import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {FaHome,FaPhoneAlt} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Footer() {
  return (
    <div style={{ backgroundColor: '#0A6847' }}>
    <div className ='container'>
        <div className='row py-5 text-white'>
            <div className='col-md-3 col-sm-12'>
                <h4 className="text-warning">Company Name</h4>
                <p>In this section write about your company</p>
            </div>
            <div className='col-md-3 col-sm-12'>
                <h4 className="text-warning">Useful Links</h4>
                <p>Home</p>
                <p>About us</p>
                <p>Products</p>
                <p>Contact us</p>
            </div>
            <div className='col-md-3 col-sm-12'>
                <h4 className="text-warning">Address</h4>
                <FaHome className='me-2' />Green Lanka<br/>
                <FaPhoneAlt className='me-2' />0770402794<br/>
                <MdEmail className='me-2'  />greenlankaproducts@gmail.com<br/>
                </div>
            
        </div>
   
    </div>
    </div>
  )
}

export default Footer