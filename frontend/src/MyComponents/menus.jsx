import React from "react";
import { ListGroup,ListGroupItem } from "reactstrap";

function Menus() {
    return (
      <ListGroup className="my-4" style={{marginLeft:50}}> 
      <a className="custom-link" href="/AllUsers" style={{ textDecoration: 'none' }}>
        <ListGroupItem action>
          All Users
        </ListGroupItem>
        </a>    
      <a className="custom-link" href="/AddUsers" style={{ textDecoration: 'none' }}>
        <ListGroupItem action>
          Add Users
        </ListGroupItem>
        </a> 
        <a className="custom-link" href="/About" style={{ textDecoration: 'none' }}>
        <ListGroupItem action>
          About
        </ListGroupItem>
        </a>  
        <a className="custom-link" href="/logout" style={{ textDecoration: 'none' }}>
        <ListGroupItem action>
          Logout
        </ListGroupItem>
        </a>  
      </ListGroup>
    );
  }
  export default Menus;