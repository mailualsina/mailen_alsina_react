import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import CardWidget from './CardWidget';


function BsNavBar() {

    return (

        <div>
            
            <Navbar >
                <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <CardWidget />
                </Nav>
                </Container>
            </Navbar>

        </div>

    ) 

};

export default BsNavBar;