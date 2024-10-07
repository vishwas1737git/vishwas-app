import React, { useEffect, useState } from "react";
import { Table, Alert } from "react-bootstrap";

const User = () => {
  const [data, setData] = useState([]);
  const [offline, setOffline] = useState(false); // Track offline status

  useEffect(() => {
    const Url = "https://jsonplaceholder.typicode.com/users";
    fetch(Url)
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData); // Set the data with the parsed JSON
        setOffline(false); // User is online, no need to show offline message
      })
      .catch((error) => {
        console.log("error", error);
        setOffline(true); // User is offline, show an alert message
      });
  }, []);

  console.log("Fetched data:", data);

  return (
    <div>
      <h1>User List</h1>
      {offline && (
        <Alert variant="warning">You are offline. Please chack your internet connection.</Alert>
      )}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address.street}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default User;
