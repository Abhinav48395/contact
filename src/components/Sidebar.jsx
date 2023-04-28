import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


export default function Sidebar() {

  const navigate = useNavigate()

function send() {
   navigate("/contacts")
}

  return (
    <div className='sidebor'>
      <br /><br />
   
      <p  style={{cursor:"pointer"}}          onClick={send}>Contacts</p>
      <p style={{cursor:"pointer"}}>Frequently contacted</p>
      <p style={{cursor:"pointer"}}>Bin</p>
     

    </div>
  )
}
