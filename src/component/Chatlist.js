import React from "react";
import { Container, ListGroup, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const ChatList = () => {
  // Sample user data
  const users = [
    {
      id: 1,
      username: "john_doe",
      profileImage: "https://via.placeholder.com/50",
      status: "Active now",
    },
    {
      id: 2,
      username: "jane_smith",
      profileImage: "https://via.placeholder.com/50",
      status: "Offline",
    },
    {
      id: 3,
      username: "mark_willis",
      profileImage: "https://via.placeholder.com/50",
      status: "Active 10m ago",
    },
    {
      id: 4,
      username: "emily_stone",
      profileImage: "https://via.placeholder.com/50",
      status: "Offline",
    },
    // Add more users as needed...
  ];

  const navigat = useNavigate();

  const handleChat = () => {
    navigat("/messages");
  };

  return (
    <Container className="mt-4">
      <h5>User List</h5>
      <ListGroup variant="flush">
        {users.map((user) => (
          <ListGroup.Item
            onClick={handleChat}
            key={user.id}
            className="d-flex align-items-center"
            style={{ cursor: "pointer", padding: "15px 10px" }}
          >
            <Image
              src={user.profileImage}
              roundedCircle
              width="50"
              height="50"
              className="me-3"
            />
            <div>
              <strong>{user.username}</strong>
              <p style={{ fontSize: "12px", margin: 0, color: "#666" }}>
                {user.status}
              </p>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default ChatList;
