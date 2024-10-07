import React from 'react';
import { Card, Container, Row, Col, Button, Image } from 'react-bootstrap';
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';

import post1 from "./../assets/download (2).jpeg"
import post2 from "./../assets/download.jpeg"
import status1 from "./../assets/status.jpeg";
import status2 from "./../assets/status2.jpeg";
import status3 from "./../assets/status3.jpeg";
import status4 from "./../assets/status4.jpeg";
import status5 from "./../assets/status5.jpeg";
import status6 from "./../assets/status6.jpeg";

const Feed = () => {
    const posts = [
        {
            id: 1,
            username: 'john_doe',
            imageUrl: post1,
            caption: 'Enjoying the sunset at the beach!',
            profileImage: post2
        },
        {
            id: 2,
            username: 'jane_smith',
            imageUrl: post2,
            caption: 'Morning vibes ☕️',
            profileImage: post1
        },
        {
            id: 3,
            username: 'alice_wonder',
            imageUrl: status1,
            caption: 'Hiking the mountains today! 🏞️',
            profileImage: status2
        },
        {
            id: 4,
            username: 'bob_builder',
            imageUrl: status2,
            caption: 'Finished my latest building project! 🏗️💪',
            profileImage: status3
        },
        {
            id: 5,
            username: 'charlie_chaplin',
            imageUrl: status3,
            caption: 'Had a great time at the comedy show last night! 😂',
            profileImage: status4
        },
        {
            id: 6,
            username: 'daisy_rose',
            imageUrl: status4,
            caption: 'My flower garden is in full bloom! 🌸🌼',
            profileImage: status5
        },
        {
            id: 7,
            username: 'evelyn_shaw',
            imageUrl: status5,
            caption: 'Exploring the beautiful streets of Paris! 🇫🇷❤️',
            profileImage: status6
        },
        {
            id: 8,
            username: 'frank_fish',
            imageUrl: status6,
            caption: 'Caught some big ones today! 🎣🐟',
            profileImage: status1
        },
        {
            id: 9,
            username: 'grace_hopper',
            imageUrl: status1,
            caption: 'Learned so much at the tech conference! 🚀💻',
            profileImage: status2
        },
        {
            id: 10,
            username: 'henry_hughes',
            imageUrl: status2,
            caption: 'Just finished a cooking class! 🍳👩‍🍳',
            profileImage: status3
        }
    ];
    

  return (
    <Container className="mt-5 pt-4">
      {posts.map((post) => (
        <Card className="mb-4" key={post.id}>
          <Card.Header className="d-flex align-items-center">
            <Image src={post.profileImage} roundedCircle width="40" height="40" className="me-3" />
            <strong>{post.username}</strong>
          </Card.Header>
          <Card.Img variant="top" src={post.imageUrl} />
          <Card.Body>
            <div className="d-flex justify-content-between mb-3">
              <FaHeart size={24} />
              <FaComment size={24} />
              <FaShare size={24} />
            </div>
            <Card.Text>
              <strong>{post.username}</strong> {post.caption}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default Feed;
