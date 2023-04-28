import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import img from './download.png'
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



export default function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand classname="logo" >
            

            <Link to="/contacts"  ><img src={img} style={{height:40,width:50}}  alt="" /></Link>
          </Navbar.Brand>


          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className="ml-auto">
            <Nav.Link className="none">
              <Link to="/contacts" className="no" >
                Contacts
              </Link>
            </Nav.Link>
            <Nav.Link className="none">
              <Link to="/postcontact" className="no" >
                Add Contact
              </Link>
            </Nav.Link>
           
          
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
