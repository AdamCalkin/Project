import React from 'react';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


const NavBar = () => {
        return (
            <React.Fragment>
                <Navbar bg="dark" expand="lg">
                <Navbar.Brand href="https://www.cleanandgreen.co.nz" target="_blank">Clean + Green</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#Home">Home</Nav.Link>
                    <Nav.Link href="./about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </React.Fragment> 
        );
    }

 
export default NavBar;