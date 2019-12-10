import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Navigation.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="main-navbar" variant="light">
            <Navbar.Brand as={Link} to="/">
                <img src="/img/faviconX2.png" alt="Logo" className="main-logo" style={{width: '40px'}}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                    <Nav.Link as={NavLink} to="/skills">Skills</Nav.Link>
                    <NavDropdown title="Portfolio" id="collasible-nav-dropdown">
                        <NavDropdown.Item as={NavLink} to="/portfolio#biz2click">Biz2Click</NavDropdown.Item>
                        {/* <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#memes">Dank memes</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;