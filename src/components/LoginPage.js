import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

export const LoginPage = ({ onLogin }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "userName") {
      setUserName(value);
    } else {
      setPassword(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      userName: userName,
      pass: password,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        alert("Logging in ...");
        // saving the token... sessionStorage or localStorage
        sessionStorage.setItem("token", response.data.token);
        onLogin();
      }
    } catch (error) {
      console.log("Error", error);
      alert("Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="username"
        name="userName"
        value={userName}
        onChange={handleChange}
        required
      />
      <TextField
        label="password"
        name="password"
        value={password}
        onChange={handleChange}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};
