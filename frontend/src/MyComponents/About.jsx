import React from "react";
import { CardBody,Card } from "reactstrap";

function About(){

    return(
        <div style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ width: 1000, justifyContent: "center", margin: "10px" }}>
          <CardBody>
            <p>This was the assignment given  by mindfulfulgurukul pvt ltd. i have used react.js for frontent and Springboot for Backend. in this user can signup and login through email and password. After login he can register users in this website there name, email and phone number. when there is no user added the page will show an image of No User Found and After adding multiple users you can sort users according to A-Z , Z-A, last Inserted and Last Modified. you can also edit user details and can delete them also. For Deployment i have used Digital Ocean Droplet ubantu based CLI Operating System and File zilla for FTP and Domain from Hostinger.com</p>
          </CardBody>
        </Card>
      </div>
    )
}
export default About;