import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "./Sidebar";
import axios from "axios";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { GoLocation } from "react-icons/go";

import { useNavigate } from "react-router-dom";

export default function Contact() {
  const [user, setUser] = useState([]);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchData(id);
    }
  }, [id]);

  const fetchData = (id) => {
    fetch(`http://localhost:5000/contacts/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  };

  console.log(user);

  const handleDelete = async (id) => {
    console.log(id);
    const response = await axios.delete(`http://localhost:5000/contacts/${id}`);
    if ((response.status = 200)) {
      alert("deleted");
      navigate("/contacts");
    }
  };

  function send(id) {
    navigate(`/Edit/${id}`);
  }

  return (
    <div>
      <Container fluid>
        <Row>
          <Col lg="3">
            <Sidebar></Sidebar>
          </Col>

          <Col>
            {" "}
            <div className="enclose2">
              {" "}
              <h1 className="cap_1">{user.avatar}</h1>
            </div>
            <h1>
              {user.fname} {user.lname}
            </h1>
            <hr />
            <Card>
              <Card.Body>
                <div>
                  {" "}
                  <Card.Text href={user.phone}>
                    <BsTelephone ></BsTelephone>&nbsp;:&nbsp;{user.phone}
                  </Card.Text>
                  <Card.Text>
                    {user.company}
                  </Card.Text>
                  <Card.Text><AiOutlineMail></AiOutlineMail>&nbsp;:&nbsp;{user.email}</Card.Text>
                  <Card.Text><GoLocation></GoLocation>&nbsp;:&nbsp;{user.address}</Card.Text>
                  <Card.Text>{user.website? <><CgWebsite></CgWebsite>&nbsp;:&nbsp;</>  : null}{user.website}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </Button>{" "}
                  <Button variant="warning" onClick={() => send(user.id)}>
                    Edit
                  </Button>{" "}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
