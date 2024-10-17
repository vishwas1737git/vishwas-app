import React, { useState, useEffect, useRef, useCallback } from "react";
import { Modal, Image, Container, Button, Nav } from "react-bootstrap";
import Feed from "./Feed";
import status1 from "./../assets/status.jpeg";
import status2 from "./../assets/status2.jpeg";
import status3 from "./../assets/status3.jpeg";
import status4 from "./../assets/status4.jpeg";
import status5 from "./../assets/status5.jpeg";
import status6 from "./../assets/status6.jpeg";
import userProfileImage from "./../assets/status6.jpeg";
import { FaFacebookMessenger, FaPlus } from "react-icons/fa";
// import { Container, Nav, Dropdown } from "react-bootstrap";

const Stories = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentStory, setCurrentStory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null); // Track current index in stories array
  const [progress, setProgress] = useState(0); // Progress for the timer bar
  const intervalRef = useRef(null); // Ref to clear the interval
  const videoRef = useRef(null); // Ref for the video element

  const stories = [
    {
      id: 1,
      username: "pallav_bhadva",
      profileImage: status1,
      type: "image",
      mediaUrl: status1,
    },
    {
      id: 2,
      username: "jane_smith",
      profileImage: status2,
      type: "video",
      mediaUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 3,
      username: "jakhar_yodha",
      profileImage: status3,
      type: "image",
      mediaUrl: status3,
    },
    {
      id: 4,
      username: "lalit_user",
      profileImage: status4,
      type: "image",
      mediaUrl: status4,
    },
    {
      id: 5,
      username: "garib_ki_duniya",
      profileImage: status5,
      type: "image",
      mediaUrl: status5,
    },
    {
      id: 6,
      username: "love_failure",
      profileImage: status6,
      type: "image",
      mediaUrl: status6,
    },
    {
      id: 7,
      username: "broken_heart",
      profileImage: "https://via.placeholder.com/50",
      type: "image",
      mediaUrl: "https://via.placeholder.com/500",
    },
    // Add more stories here...
  ];

  const handleStoryClick = (story, index) => {
    setCurrentStory(story);
    setCurrentIndex(index);
    setShowModal(true);
    setProgress(0); // Reset progress on new story
  };

  const handleClose = () => {
    setShowModal(false);
    setCurrentStory(null);
    setCurrentIndex(null);
    setProgress(0);
    clearInterval(intervalRef.current); // Clear interval on close
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const showNextStory = useCallback(() => {
    if (currentIndex !== null && currentIndex < stories.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentStory(stories[nextIndex]);
      setCurrentIndex(nextIndex);
      setProgress(0);
    } else {
      handleClose();
    }
  });

  const showPreviousStory = () => {
    if (currentIndex !== null && currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentStory(stories[prevIndex]);
      setCurrentIndex(prevIndex);
      setProgress(0);
    }
  };

  // Handle progress for image stories
  useEffect(() => {
    if (showModal && currentStory?.type === "image") {
      const duration = 15; // Duration in seconds
      const increment = 100 / ((duration * 1000) / 50); // Progress increment based on 50ms interval
      intervalRef.current = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(intervalRef.current);
            showNextStory(); // Move to the next story after 15 seconds
            return 100;
          }
          return prevProgress + increment;
        });
      }, 50);
    }

    return () => clearInterval(intervalRef.current); // Clean up on unmount
  }, [currentStory]);

  // Handle progress for video stories
  const handleVideoProgress = () => {
    if (videoRef.current) {
      const video = videoRef.current;
      const currentProgress = (video.currentTime / video.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const handleStoryNavigation = (e) => {
    const clickX = e.clientX;
    const screenWidth = window.innerWidth;

    if (clickX < screenWidth / 2) {
      showPreviousStory();
    } else {
      showNextStory();
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingInline: "15px", paddingTop: "10px" 
        }}
      >
        <h2 style={{fontFamily:"cursive"}}>MyApp</h2>
        <FaFacebookMessenger  color="black" size={24} />
      </div>
      <Container
        fluid
        className="d-flex overflow-auto mt-3"
        style={{
          padding: "10px",
          whiteSpace: "nowrap",
          position: "relative",
          // top: "50px",
        }}
      >
        {/* Self Story Section */}
        <div className="text-center mx-2">
          <Button
            variant="outline-primary"
            style={{
              borderRadius: "50%",
              width: "60px",
              height: "60px",
              padding: 0,
              position: "relative",
            }}
          >
            <Image
              src={userProfileImage}
              roundedCircle
              width="60"
              height="60"
              style={{ border: "4px solid black" }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "0",
                right: "0",
                backgroundColor: "black",
                borderRadius: "50%",
                padding: "2px",
                color: "white",
              }}
            >
              <FaPlus size={14} />
            </div>
          </Button>
          <p style={{ fontSize: "12px" }}>Your Story</p>
        </div>

        {/* Render other user stories */}
        {stories.map((story, index) => (
          <div
            key={story.id}
            className="text-center mx-2"
            onClick={() => handleStoryClick(story, index)}
          >
            <Image
              src={story.profileImage}
              roundedCircle
              width="60"
              height="60"
            />
            <p style={{ fontSize: "12px" }}>{story.username}</p>
          </div>
        ))}
      </Container>

      {/* Modal to show the story */}
      <Modal
        show={showModal}
        onHide={handleClose}
        centered
        onClick={handleStoryNavigation} // Add click event for navigation
      >
        {currentStory && (
          <div>
            <Modal.Header closeButton>
              <div style={{ display: "flex", gap: "10px" }}>
                <Image
                  src={currentStory.profileImage}
                  style={{
                    height: "25px",
                    width: "auto",
                    borderRadius: "100%",
                  }}
                />
                <Modal.Title>{currentStory.username}</Modal.Title>
              </div>
            </Modal.Header>

            {/* Progress bar */}
            <div style={{ width: "100%", background: "#ddd", height: "5px" }}>
              <div
                style={{
                  width: `${progress}%`,
                  height: "5px",
                  background: "linear-gradient(to right, #fdc830, #f37335)",
                  transition: "width 0.1s",
                }}
              ></div>
            </div>

            <Modal.Body className="text-center">
              {currentStory.type === "image" ? (
                <Image
                  src={currentStory.mediaUrl}
                  alt="Story"
                  fluid
                  style={{ height: "80vh", width: "auto" }}
                />
              ) : (
                <video
                  ref={videoRef}
                  controls
                  style={{ height: "80vh", width: "auto" }}
                  onTimeUpdate={handleVideoProgress}
                  onEnded={showNextStory} // Move to next story when video ends
                  autoPlay
                >
                  <source src={currentStory.mediaUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </Modal.Body>
          </div>
        )}
      </Modal>

      <Feed />
    </>
  );
};

export default Stories;
