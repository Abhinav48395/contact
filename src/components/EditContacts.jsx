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

import { useParams } from "react-router-dom";



export default function EditContacts() {


    const navigate = useNavigate();


    const [user, setUser] = useState([]);


    const { id } = useParams();

  const [getid,setGetid]= useState(id)
    const [fname, setFname] = useState("");
    const [avatar, setavatar] = useState();
    const [lname, setLname] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setphone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [website, setWebsite] = useState("");

    useEffect(() => {
        if (getid) {
          fetchData(getid);
        }
      }, [getid]);
    
      const fetchData = (id) => {
        fetch(`http://localhost:5000/contacts/${getid}`)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            setFname(data.fname)
            setLname(data.lname)
            setCompany(data.company)
            setEmail(data.email)
            setphone(data.phone)
            setWebsite(data.website)
            setAddress(data.address)
            setavatar(data.avatar)
          });
      };





   


    const [nameErrMsg, setNameErrMsg] = useState(null);
  
    useEffect(() => {
      const part = fname.slice(0, 1);
      const part1 = lname.slice(0, 1);
      setavatar(part + part1);
    });




    function editSubmit(getid) {

       console.log(getid);
        // e.preventDefault();
    
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
            .put(`http://localhost:5000/contacts/${getid}`, data)
    
            .then(function (response) {
              console.log(response.status);
    
              if ((response.status = 201)) {
                alert("Edited successfully");
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
    <Container >
      <Row>
        <Col lg="3"><Sidebar></Sidebar></Col>
        <Col lg="9"><br />
          <h1>EDIT YOUR CONTACT</h1><br />
          {nameErrMsg && <Alert variant="danger">{nameErrMsg}</Alert>}
          <input
            type="text"
            name="fname"
            id=""
            className="poststyle"

            value={fname}
            placeholder="First name"
            onChange={(e) => {
              setFname(e.target.value);
              setNameErrMsg(null);
            }}
          />{" "}
            <br /><br />
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
            <br /><br />
          <input
            type="text"
            name="company"
            id=""
            value={company}
            className="poststyle"

            placeholder="company"
            onChange={(e) => {
              setCompany(e.target.value);
              setNameErrMsg(null);
            }}
          />{" "}
            <br /><br />
          <input
            type="number"
            name="phone"
            id=""
            value={phone}
            className="poststyle"

            placeholder="phone"
            onChange={(e) => setphone(e.target.value)}
          />{" "}
            <br /><br />
          <input
            type="email"
            name="email"
            id=""
            value={email}
            className="poststyle"

            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
            <br /><br />
          <input
            type="text"
            name="address"
            id=""
            value={address}
            className="poststyle"

            placeholder="address"
            onChange={(e) => setAddress(e.target.value)}
          />{" "}
            <br /><br />
          <input
            type="text"
            name="website"
            id=""
            value={website}
            className="poststyle"

            placeholder="website"
            onChange={(e) => setWebsite(e.target.value)}
          />{" "}
          <br /> <br />
          <Button variant="primary" onClick={()=>editSubmit(getid)}>
            Save
          </Button>{" "}
        </Col>
      </Row>
    </Container>
  </div>
  )
}
