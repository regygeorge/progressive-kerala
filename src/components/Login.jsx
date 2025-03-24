import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!emailOrUsername || !password) {
      setErrorMsg("Please enter both fields.");
      return;
    }
  
    try {
      const response = await axios.post('/mnm-api/login', {
        username: emailOrUsername,
        password: password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      const { token, email } = response.data;
  
      // Store token and email in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("userEmail", email); // <-- store email for Abkari page
  
      // Navigate to dashboard or home
      navigate("/");
    } catch (error) {
      setErrorMsg("Invalid credentials. Please try again.");
    }
  };
  
  return (
    <Container maxWidth="xs">
      <Paper elevation={4} sx={{ p: 4, mt: 8, borderRadius: 3 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Welcome Back 👋
        </Typography>

        {errorMsg && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {errorMsg}
          </Alert>
        )}

        <TextField
          fullWidth
          label="Email or Username"
          variant="outlined"
          margin="normal"
          value={emailOrUsername}
          onChange={(e) => setEmailOrUsername(e.target.value)}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Box mt={2}>
          <Button
            variant="contained"
            fullWidth
            color="primary"
            onClick={handleLogin}
          >
            Login
          </Button>
        </Box>

        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Don’t have an account?{" "}
          <Button size="small" onClick={() => navigate("/signup")}>
            Sign up
          </Button>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Login;
