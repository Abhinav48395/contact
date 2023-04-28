import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

export default function Postcontacts() {
  const [fname, setFname] = useState("");
  const [avatar, setavatar] = useState();
  const [lname, setLname] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setphone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");

  const [nameErrMsg, setNameErrMsg] = useState(null);

  useEffect(() => {
    const part = fname.slice(0, 1);
    const part1 = lname.slice(0, 1);
    setavatar(part + part1);
  });

  const navigate = useNavigate();

  function Submit(e) {
    e.preventDefault();

    if (!fname & !lname & !company) {
      setNameErrMsg("first name, Last name and company is mandatory");
    } else {
      const data = {
        fname,
        lname,
        avatar,
        company,
        phone,
        email,
        address,
        website,
      };

      axios
        .post("http://localhost:5000/contacts", data)

        .then(function (response) {
          console.log(response.status);

          if ((response.status = 201)) {
            navigate("/contacts");
          }

          return response;
        })
        .catch(function (error) {
          return error;
        });
    }
  }

  return (
    <div className="align">
      <br />
      <Container fluid>
        <Row>
          <Col lg="3">
            <Sidebar></Sidebar>
          </Col>
          <Col lg="9">
            <br />
            <h1>CREATE YOUR CONTACT</h1> <br />
            {nameErrMsg && <Alert variant="danger">{nameErrMsg}</Alert>}
            <input
              type="text"
              name="fname"
              id=""
              className="poststyle"
              value={fname}
              placeholder="First Name"
              onChange={(e) => {
                setFname(e.target.value);
                setNameErrMsg(null);
              }}
            />{" "}
            <br />
            <br />
            <input
              type="text"
              name="lname"
              id=""
              className="poststyle"
              value={lname}
              placeholder="Last Name"
              onChange={(e) => {
                setLname(e.target.value);
                setNameErrMsg(null);
              }}
            />{" "}
            <br />
            <br />
            <input
              type="text"
              name="company"
              id=""
              className="poststyle"
              value={company}
              placeholder="company"
              onChange={(e) => {
                setCompany(e.target.value);
                setNameErrMsg(null);
              }}
            />{" "}
            <br />
            <br />
            <input
              type="number"
              name="phone"
              id=""
              className="poststyle"
              value={phone}
              placeholder="phone"
              onChange={(e) => setphone(e.target.value)}
            />{" "}
            <br />
            <br />
            <input
              type="email"
              name="email"
              className="poststyle"
              id=""
              value={email}
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />{" "}
            <br />
            <br />
            <input
              type="text"
              name="address"
              id=""
              className="poststyle"
              value={address}
              placeholder="address"
              onChange={(e) => setAddress(e.target.value)}
            />{" "}
            <br />
            <br />
            <input
              type="text"
              name="website"
              id=""
              className="poststyle"
              value={website}
              placeholder="website"
              onChange={(e) => setWebsite(e.target.value)}
            />{" "}
            <br /> <br />
            <Button variant="primary" onClick={Submit}>
              Save
            </Button>{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
