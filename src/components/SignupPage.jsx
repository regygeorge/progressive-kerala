import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Stack,
  Box,
  Alert,
} from "@mui/material";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const SignupPage = () => {
  const [searchParams] = useSearchParams();
  const referrer = searchParams.get("ref");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    referrerEmail: referrer || "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignup = async () => {
    try {
      await axios.post("/mnm-api/signup", formData);
      alert("Signup successful!");
    } catch (err) {
      console.error(err);
      setError("Signup failed. Please check your invite or try again.");
    }
  };

  if (!referrer) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Alert severity="error">Signup is by invitation only.</Alert>
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
    >
      <Card sx={{ maxWidth: 400, p: 3, borderRadius: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            You're Invited!
          </Typography>
          <Typography variant="subtitle2" align="center" gutterBottom>
            Referred by <strong>{referrer}</strong>
          </Typography>

          <Stack spacing={2}>
            <TextField
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              required
            />

            {error && <Alert severity="error">{error}</Alert>}

            <Button
              variant="contained"
              color="primary"
              onClick={handleSignup}
              fullWidth
            >
              Sign Up
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SignupPage;
