import React from "react";

import { Card, Container, Row, Col } from "react-bootstrap";

function Compliments() {
  return (
    <>
      <Container>
        <Row>
          <Col>
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>Compliment #1036</Card.Title>
                  {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                  <Card.Text>
                    Keep that mask on, it looks great on you!
                  </Card.Text>
                  <Card.Link href="#">Tell me another</Card.Link>
                </Card.Body>
              </Card>
          </Col>
          <Col>
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>Compliment #1099</Card.Title>
                  {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                  <Card.Text>You're beautiful!</Card.Text>
                  <Card.Link href="#">Tell me another</Card.Link>
                </Card.Body>
              </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Compliments;
