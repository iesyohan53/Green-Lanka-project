import React from 'react';
import { Navbar, Nav, Form, Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Search from './layout/Search';
import { logout } from '../actions/userActions';
import logo from './Images/logo1.jpg';
import userimg from './Images/avatar.jpg'
import {useDispatch, useSelector} from 'react-redux'
import { useAlert } from 'react-alert';
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./NavScrollExample.css";

function NavScrollExample() {
  const alert = useAlert();
  const dispatch = useDispatch();

  const {user,loading} = useSelector(state => state.auth)
  const {cartItems} = useSelector(state=>state.cart)

  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    alert.success('Logged out successfully.')
  }
  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: '#0A6847' }}>
        <Container fluid>
          <Navbar.Brand href="/"><img src={logo} alt='logo' style={{ height: '30px' }} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link as={Link} to="/" style={{ color: 'white' }}>Home</Nav.Link>
              <Nav.Link as={Link} to="/about" style={{ color: 'white' }}>About Us</Nav.Link>
              <Nav.Link as={Link} to="/products" style={{ color: 'white' }}>Products</Nav.Link>
              <Nav.Link as={Link} to="/contact" style={{ color: 'white' }}>Contact Us</Nav.Link>
              
            </Nav>
            <Form className="d-flex">
              <div className='col-12 col-md-6 mt-2 mt-md-0'>
                <Search />
              </div>
              <div className='col-12 col-md-3 mt-4 mt-md-0 text-center'>
                <Link to ="/cart" style={{ textDecoration: 'none'}} />
                  <span id="cart" className="ml-3"></span>
                  <span className="ml-1" id="cart_count">{cartItems.length}</span>
              </div>
              
              <Link to="/cart" style={{textDecoration:'none'}}>
              <Button onClick={() => navigate("/cart")} variant="outline-light">
                <AiOutlineShoppingCart className="cart-icon" />
              </Button>
              </Link>

              {user ? (
                <div className='ml-4 dropdown d-inline'>
                  <Link to='#!' className='btn dropdown-toggle text-white mr-4' type='button' id='dropDownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                    <figure className='avatar avatar-nav'>
                        <img src={userimg} alt ="" 
                        className='rounded-circle'
                        />
                    </figure>
                    <span>{user && user.name}</span>
                    
                  </Link>

                <div className='dropdown-menu' aria-labelledby="dropDownMenuButton">

                  {user && user.role !== 'admin' ? (
                      <Link className='dropdown-item' to='/orders/me'>Orders</Link>
                  ): (
                      <Link className='dropdown-item' to='/dashboard'>Dashboard</Link>
                  )}
                  <Link className='dropdown-item' to='/me'>Profile</Link>
                  <Link className='dropdown-item text-danger' to='/' onClick={logoutHandler}>
                  Logout
                  </Link>
                </div>

                </div>
              ) : !loading && (
                <Button onClick={() => navigate("/login")} variant="outline-light">
                  Login
                </Button>
              )}

            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavScrollExample;
