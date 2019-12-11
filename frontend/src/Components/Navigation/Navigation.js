import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Navigation.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="main-navbar" variant="light">
            <Navbar.Brand as={Link} to="/myportfolio">
                <img src="/myportfolio/img/faviconX2.png" alt="Logo" className="main-logo" style={{width: '40px'}}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to="/myportfolio/about">About</Nav.Link>
                    <Nav.Link as={NavLink} to="/myportfolio/skills">Skills</Nav.Link>
                    <NavDropdown title="Portfolio" id="collasible-nav-dropdown">
                        <NavDropdown.Item as={NavLink} to="/myportfolio/portfolio">Biz2Click</NavDropdown.Item>
                        {/* <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#memes">Dank memes</Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/the-jack-white/" target="_blank">
                        <img src="/myportfolio/img/linkedin-logo.png" alt="LinkedIn-Logo" className="main-logo" style={{width: '25px'}}/>
                    </Nav.Link>
                    <Nav.Link href="https://github.com/the-jack-white" target="_blank">
                        <img src="/myportfolio/img/github-logo.svg" alt="GitHub-Logo" className="main-logo" style={{width: '25px'}}/>
                    </Nav.Link>
                    <Nav.Link href="/documents/JackWhiteCV_Dec2019.pdf" target="_blank" download>
                        <img src="/myportfolio/img/downloadX2.png" alt="Download-Logo" className="main-logo" style={{width: '25px'}}/>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;