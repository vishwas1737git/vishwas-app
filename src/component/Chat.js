// src/component/Chat.js

import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import { Container, Form, Button } from "react-bootstrap";

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hello! How are you?",
      timestamp: "10:00 AM",
      user: {
        name: "Alice",
        avatar: "https://via.placeholder.com/50",
        isCurrentUser: false,
      },
    },
    {
      text: "I am good, thanks! How about you?",
      timestamp: "10:01 AM",
      user: {
        name: "You",
        avatar: "https://via.placeholder.com/50",
        isCurrentUser: true,
      },
    },
    {
      text: "Hello! How are you?",
      timestamp: "10:00 AM",
      user: {
        name: "Alice",
        avatar: "https://via.placeholder.com/50",
        isCurrentUser: false,
      },
    },
    {
      text: "I am good, thanks! How about you?",
      timestamp: "10:01 AM",
      user: {
        name: "You",
        avatar: "https://via.placeholder.com/50",
        isCurrentUser: true,
      },
    },
    {
      text: "Hello! How are you?",
      timestamp: "10:00 AM",
      user: {
        name: "Alice",
        avatar: "https://via.placeholder.com/50",
        isCurrentUser: false,
      },
    },
    {
      text: "I am good, thanks! How about you?",
      timestamp: "10:01 AM",
      user: {
        name: "You",
        avatar: "https://via.placeholder.com/50",
        isCurrentUser: true,
      },
    },
    {
      text: "Hello! How are you?",
      timestamp: "10:00 AM",
      user: {
        name: "Alice",
        avatar: "https://via.placeholder.com/50",
        isCurrentUser: false,
      },
    },
    {
      text: "I am good, thanks! How about you?",
      timestamp: "10:01 AM",
      user: {
        name: "You",
        avatar: "https://via.placeholder.com/50",
        isCurrentUser: true,
      },
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return; // Prevent sending empty messages

    const newMessage = {
      text: inputMessage,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      user: {
        name: "You",
        avatar: "https://via.placeholder.com/50",
        isCurrentUser: true,
      },
    };

    setMessages([...messages, newMessage]);
    setInputMessage("");
  };

  return (
    <>
      <Container
        style={{
          position: "relative",
          top: "70px",
          overflowY: "scroll",
          height: "calc(100vh - 120px)",
        }}
      >
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} user={message.user} />
        ))}
      </Container>
      <Form
        onSubmit={handleSendMessage}
        className="mt-3"
        style={{
          position: "fixed",
          bottom: 0,
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: "10px",
        }}
      >
        <Form.Group controlId="messageInput">
          <Form.Control
            type="text"
            placeholder="Type your message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-2">
          Send
        </Button>
      </Form>
    </>
  );
};

export default Chat;
