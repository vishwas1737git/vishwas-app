import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Navbar,
  Nav,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import highlights from "./../assets/status.jpeg";
import highlights2 from "./../assets/status2.jpeg";
import highlights3 from "./../assets/status3.jpeg";
import highlights4 from "./../assets/status4.jpeg";
import highlights5 from "./../assets/status5.jpeg";
import highlights6 from "./../assets/status6.jpeg";
import userProfile from "./../assets/download (2).jpeg";
import { MdOutlineStorage } from "react-icons/md";

const Profile = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingInline: "15px",
          paddingTop: "10px",
        }}
      >
        <h2>john_doe</h2>
        <Nav.Link href="/SettingsPage">
          <MdOutlineStorage color="black" size={24} />
        </Nav.Link>
      </div>

      <Container>
        <Row className="justify-content-center">
          <Col md={4} className="text-center">
            {/* Profile Details */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <Image
                style={{ height: "80px", width: "80px" }}
                src={userProfile}
                roundedCircle
              />
              <div style={{ display: "flex", gap: "12px" }}>
                <div>
                  <strong>150</strong> <p>Posts</p>
                </div>
                <div>
                  <strong>500</strong> <p>Followers</p>
                </div>
                <div>
                  <strong>300</strong> <p>Following</p>
                </div>
              </div>
            </div>

            {/* Bio Section */}
            <div style={{ textAlign: "left", padding: "0 15px" }}>
              <strong>John Doe</strong>
              <p>
                Passionate traveler. Food lover. Photography enthusiast.
                Exploring the world one step at a time.
              </p>
              <p>📍 New York City</p>
              <p>📧 john.doe@email.com</p>
            </div>

            {/* Posts Grid */}
            <Row className="mt-4">
              <Col xs={4}>
                <Image
                  style={{ height: "100%", maxWidth: "100%", padding: "3px" }}
                  className="highlights-picture"
                  src={highlights}
                  fluid
                />
              </Col>
              <Col xs={4}>
                <Image
                  style={{ height: "100%", maxWidth: "100%", padding: "3px" }}
                  className="highlights-picture"
                  src={highlights2}
                  fluid
                />
              </Col>
              <Col xs={4}>
                <Image
                  style={{ height: "100%", maxWidth: "100%", padding: "3px" }}
                  className="highlights-picture"
                  src={highlights3}
                  fluid
                />
              </Col>
              <Col xs={4}>
                <Image
                  style={{ height: "100%", maxWidth: "100%", padding: "3px" }}
                  className="highlights-picture"
                  src={highlights4}
                  fluid
                />
              </Col>
              <Col xs={4}>
                <Image
                  style={{ height: "100%", maxWidth: "100%", padding: "3px" }}
                  className="highlights-picture"
                  src={highlights5}
                  fluid
                />
              </Col>
              <Col xs={4}>
                <Image
                  style={{ height: "100%", maxWidth: "100%", padding: "3px" }}
                  className="highlights-picture"
                  src={highlights6}
                  fluid
                />
              </Col>
              <Col xs={4}>
                <Image
                  style={{ height: "100%", maxWidth: "100%", padding: "3px" }}
                  className="highlights-picture"
                  src={highlights2}
                  fluid
                />
              </Col>
              {/* Add more images for more posts */}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
