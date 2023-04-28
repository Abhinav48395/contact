import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img from "./download.png";
import { useNavigate } from "react-router-dom";

export default function Home() {

  
  const navigate = useNavigate();



  const [users, setUsers] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:5000/contacts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  function send(id) {
    
  
    navigate(`/contacts/${id}`);
  }

  return (
    <div>
      <Container>
        <Row>
          {users.length > 0

            ? users.map((x) => (
              <>
                <Col lg="3">
                  <br />
                  <br />
                  <div key={x.id}>
                    <Card
                      style={{ width: "13rem", cursor: "pointer" }}
                      onClick={() => send(x.id)}
                    >
                      {/* <Card.Img variant="top" src={img} /> */}
                      <div className="enclose">
                        <h1 className="cap">{x.avatar}</h1>
                      </div>
                      <Card.Body>
                        <Card.Title>
                          {x.fname} {x.lname}
                        </Card.Title>
                        <Card.Title></Card.Title>
                        <Card.Text>{x.phone}</Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>{" "}
              </>
            ))







              
            
            : <Col><br /><br /><br /><h1 >No Contacts Found please Add Your Contacts
            </h1>
            <button>Add Contacts</button>
            </Col>
            
            }
           
        </Row>
      </Container>
    </div>
  );
}
