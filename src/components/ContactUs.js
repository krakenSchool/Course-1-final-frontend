import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { HomepageHeader } from "./HomepageHeader";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/contact",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        alert("Form submitted successfully");
      } else {
        alert("Form submission failed");
      }
    } catch (error) {
      console.error("Error occured in submission of form", error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mx: "150px",
        alignItems: "center",
      }}
    >
      <HomepageHeader />
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "50px", md: "auto" },
          width: "max-content",
          marginBottom: "15px",
        }}
      >
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: { xs: "250px", md: "auto" },
          }}
        >
          <TextField
            value={formData.firstName}
            name="firstName"
            label="First name"
            onChange={handleChange}
            required
          />
          <TextField
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            label="Last name"
            required
          />
          <TextField
            name="email"
            value={formData.email}
            label="Email"
            onChange={handleChange}
            required
          />
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            multiline
            rows={4}
            onChange={handleChange}
            required
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};
