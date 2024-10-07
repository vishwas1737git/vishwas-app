// src/component/ChatMessage.js

import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./chat.css"; // Optional: for custom styles

const ChatMessage = ({ message, user }) => {
  return (
    <div style={{height:"auto"}}>
      <Row className="mb-3">
        <Col
          xs={2}
          className="d-flex justify-content-center align-items-center"
        >
          <img src={user.avatar} alt={user.name} className="avatar" />
        </Col>
        <Col xs={10}>
          <Card className={user.isCurrentUser ? "my-message" : "other-message"}>
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>{message.text}</Card.Text>
              <small className="text-muted">{message.timestamp}</small>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ChatMessage;