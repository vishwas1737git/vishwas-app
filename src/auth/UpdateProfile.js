import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateProfileAction,
  userPofileAction,
} from "../redux/Action/AuthAction";
import { Link } from "react-router-dom";

const UserProfileBio = () => {
  const dispatch = useDispatch();

  // Fetch profile data from Redux state
  const { profileLoader, profileSuccess, profileError } = useSelector(
    (state) => state.user
  );

  const [profile, setProfile] = useState({
    name: "",
    username: "",
    bio: "",
    location: "",
    email: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [newProfile, setNewProfile] = useState({ ...profile });
  console.log("newProfilenewProfilenewProfile", newProfile);

  // Fetch profile details when the component mounts
  useEffect(() => {
    dispatch(userPofileAction());
  }, []);

  // Update local state when profile data is successfully fetched
  console.log(
    "profileSuccessprofileSuccessprofileSuccessprofileSuccess",
    profileSuccess
  );
  useEffect(() => {
    if (profileSuccess) {
      // Populate local profile state with the fetched data
      setProfile({
        name: profileSuccess.name,
        username: profileSuccess.username,
        bio: profileSuccess.bio,
        location: profileSuccess.location,
        email: profileSuccess.email,
      });
      setNewProfile({
        name: profileSuccess.name,
        username: profileSuccess.username,
        bio: profileSuccess.bio,
        location: profileSuccess.location,
        email: profileSuccess.email,
      });
    }
  }, [profileSuccess]);

  // Handle profile updates and save
  const handleSaveProfile = () => {
    // Dispatch action to update profile
    dispatch(updateProfileAction(newProfile));

    // Update the main profile state
    setProfile(newProfile);
    setIsEditing(false); // Exit editing mode
  };

  return (
    <div style={{ textAlign: "left", padding: "0 15px" }}>
      {profileLoader && <p>Loading profile...</p>}
      {profileError && <p>Error loading profile: {profileError}</p>}

      {/* {!isEditing ? (
        <>
          <strong>{profile.name}</strong>
          <p>{profile.username}</p>
          <p>{profile.bioText}</p>
          <p>{profile.location}</p>
          <p>{profile.email}</p>
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        </>
      ) : ( */}
      <>
        {/* Editable input for name */}
        <label>
          Name:
          <input
            type="text"
            value={newProfile.name}
            onChange={(e) =>
              setNewProfile({ ...newProfile, name: e.target.value })
            }
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "14px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginBottom: "10px",
            }}
          />
        </label>

        {/* Editable input for username */}
        <label>
          Username:
          <input
            type="text"
            value={newProfile.username}
            onChange={(e) =>
              setNewProfile({ ...newProfile, username: e.target.value })
            }
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "14px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginBottom: "10px",
            }}
          />
        </label>

        {/* Editable input for bio text */}
        <label>
          Bio:
          <textarea
            value={newProfile.bio}
            onChange={(e) =>
              setNewProfile({ ...newProfile, bio: e.target.value })
            }
            rows={3}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "14px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginBottom: "10px",
            }}
          />
        </label>

        {/* Editable input for location */}
        <label>
          Location:
          <input
            type="text"
            value={newProfile.location}
            onChange={(e) =>
              setNewProfile({ ...newProfile, location: e.target.value })
            }
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "14px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginBottom: "10px",
            }}
          />
        </label>

        {/* Editable input for email */}
        <label>
          Email:
          <input
            type="email"
            value={newProfile.email}
            onChange={(e) =>
              setNewProfile({ ...newProfile, email: e.target.value })
            }
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "14px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginBottom: "10px",
            }}
          />
        </label>

        <br />
        {/* Save and cancel buttons */}
        {/* <button onClick={handleSaveProfile} style={{ marginRight: "10px" }}>
          Save
        </button> */}
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={handleSaveProfile}
            className="btn"
            style={{
              backgroundColor: "black",
              color: "white",
            }}
          >
            Save
          </button>
          <button
            onClick={handleSaveProfile}
            className="btn"
            style={{
              border: "2px solid black", // Black border for the outline
            }}
          >
            <Link
              style={{
                color: "black", // Text color matches the button's text color
                textDecoration: "none",
              }}
              to={"/profile"}
            >
              Cancel
            </Link>
          </button>
        </div>
      </>
      {/* )} */}
    </div>
  );
};

export default UserProfileBio;
