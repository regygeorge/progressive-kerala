import React, { useState } from "react";
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
  const token = searchParams.get("token");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    referrerEmail: referrer || "",
    token: token || "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignup = async () => {
    if (!referrer || !token) {
      setError("This signup link is invalid or expired.");
      return;
    }

    try {
      await axios.post("/mnm-api/signup", formData);
      setSuccess(true);
      setError("");
    } catch (err) {
      console.error(err);
      setError(err.response?.data || "Signup failed. Please try again.");
    }
  };

  if (!referrer || !token) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Alert severity="error">Signup is by valid invitation only.</Alert>
      </Box>
    );
  }

  if (success) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Alert severity="success">
          Signup successful! You can now <strong>login</strong>.
        </Alert>
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
