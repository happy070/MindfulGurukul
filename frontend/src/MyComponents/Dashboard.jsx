import React from "react";
import { Row, Col } from "reactstrap";
import Menus from './menus'
import AllUsers from "./AllUsers";


function Dashboard() {
  return (
    <div>
      <Row>
        <Col md={4}>
          <Menus />
        </Col>
        <Col md={8}>
          <AllUsers />
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
