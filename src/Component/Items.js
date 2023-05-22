import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { accessories } from "../Data";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Items = () => {
  return (
    <Row>
      <h3>This is items page</h3>
      {accessories.map((item) => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>Name: {item.name} </Card.Title>
              <Card.Text>Price: {item.price}</Card.Text>
              <Button variant="primary"> BUY </Button>
              <Button variant="danger">
                <Link to="itemsDetails">ItemsDetails</Link>
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </Row>
  );
};

export default Items;
