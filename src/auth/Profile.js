import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import highlights from "./../assets/status.jpeg";
import highlights2 from "./../assets/status2.jpeg";
import highlights3 from "./../assets/status3.jpeg";
import highlights4 from "./../assets/status4.jpeg";
import highlights5 from "./../assets/status5.jpeg";
import highlights6 from "./../assets/status6.jpeg";
import userProfile from "./../assets/download (2).jpeg";

const Profile = () => {
  return (
    <Container className="mt-5 pt-4">
      <Row className="justify-content-center">
        <Col md={4} className="text-center">
          <Image
            style={{ height: "165px", width: "165px" }}
            src={userProfile}
            roundedCircle
          />
          <h3 className="mt-3">john_doe</h3>
          <Button variant="outline-secondary" className="mt-2">
            Edit Profile
          </Button>
        </Col>
        <Col md={8}>
          <Row>
            <Col xs={4} className="text-center">
              <strong>150</strong> <p>Posts</p>
            </Col>
            <Col xs={4} className="text-center">
              <strong>500</strong> <p>Followers</p>
            </Col>
            <Col xs={4} className="text-center">
              <strong>300</strong> <p>Following</p>
            </Col>
          </Row>
          <Row className="mt-4">
            {/* Grid of Posts */}
            <Col xs={4}>
              <Image style={{height:"100%", maxWidth:"100%", padding:"3px"}} className="highlights-picture" src={highlights} fluid />
            </Col>
            <Col xs={4}>
              <Image style={{height:"100%", maxWidth:"100%", padding:"3px"}} className="highlights-picture" src={highlights2} fluid />
            </Col>
            <Col xs={4}>
              <Image style={{height:"100%", maxWidth:"100%", padding:"3px"}} className="highlights-picture" src={highlights3} fluid />
            </Col>
            <Col xs={4}>
              <Image style={{height:"100%", maxWidth:"100%", padding:"3px"}} className="highlights-picture" src={highlights4} fluid />
            </Col>
            <Col xs={4}>
              <Image style={{height:"100%", maxWidth:"100%", padding:"3px"}} className="highlights-picture" src={highlights5} fluid />
            </Col>
            <Col xs={4}>
              <Image style={{height:"100%", maxWidth:"100%", padding:"3px"}} className="highlights-picture" src={highlights6} fluid />
            </Col>
            <Col xs={4}>
              <Image style={{height:"100%", maxWidth:"100%", padding:"3px"}} className="highlights-picture" src={highlights2} fluid />
            </Col>
            {/* Add more images for more posts */}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
