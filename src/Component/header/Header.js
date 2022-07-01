import React,{useState} from 'react';
import "./style.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import {Link} from 'react-router-dom'

const Header = () => {
  const[backgrounds,setBackgrounds]= useState(false);
  const changeBackground= ()=>{
    if(window.scrollY> 500){
      setBackgrounds(true);
    }
    else{
      setBackgrounds(false);
    }
  }
  window.addEventListener("scroll",changeBackground)
    return ( 
        <Navbar  expand="lg" className={backgrounds?'navbars':'navbar'} variant="dark">
      <Container>
        <Navbar.Brand >Learning Platform</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navLinks">
                <li> <Link to="/" className='link'>Home</Link> </li>
                <li> <Link to="/about" className='link'>About</Link> </li>
                <li> <Link to="/contact" className='link'>Contact</Link> </li>
            </Nav>
                <Nav className='icons'>
                <Nav.Link href="#link" ><BsFacebook/></Nav.Link>
                <Nav.Link href="#link" ><BsTwitter/></Nav.Link>
            <Nav.Link href="#link" ><BsLinkedin/></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

     );
}
 
export default Header;