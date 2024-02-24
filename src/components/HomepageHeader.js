import React from "react";
import { Box, Typography, Link, Paper } from "@mui/material";

export const HomepageHeader = () => {
  return (
    <header>
      <Paper
        sx={{
          textAlign: "center",
          backgroundColor: "grey",
          padding: "2rem",
          marginY: "1.5rem",
          borderRadius: "4px",
          width: "350px",
        }}
      >
        <Box
          component="img"
          src="/logo192.png"
          sx={{
            width: 40,
            height: 40,
            margin: "auto",
          }}
          alt="logo"
        />
        <Link href="/" underline="none" color="inherit">
          <Typography
            variant="h4"
            component="h1"
            sx={{ color: "white", fontWeight: "bold", marginTop: "1rem" }}
          >
            My First Blog
          </Typography>
        </Link>
        <Typography variant="subtitle1" sx={{ color: "grey.300" }}>
          Portfolio and Technology
        </Typography>
        <Link href="/contact" underline="none" color="inherit">
          <Typography variant="subtitle1" sx={{ color: "grey.300" }}>
            Contact us
          </Typography>
        </Link>
      </Paper>
    </header>
  );
};
