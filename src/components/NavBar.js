import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/logo-black.png'
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Container>
                <Navbar.Brand>
                    <img src={logo} alt="snapdish-logo" height="45" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link><i class="fa-solid fa-house-chimney-user"></i> Home</Nav.Link>
                        <Nav.Link><i class="fa-solid fa-user-group"></i> Sign In</Nav.Link>
                        <Nav.Link><i className="fas fa-user-plus"></i> Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NavBar;