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

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ success: null, message: "" });

  const handleSubmit = async () => {
    if (!email) {
      setStatus({ success: false, message: "Please enter your email." });
      return;
    }

    try {
      await axios.post("/mnm-api/forgot-password", { email });
      setStatus({
        success: true,
        message: "A reset link has been sent to your email.",
      });
    } catch (err) {
      setStatus({ success: false, message: "Failed to send reset link." });
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={4} sx={{ p: 4, mt: 8, borderRadius: 3 }}>
        <Typography variant="h6" align="center" gutterBottom>
          Reset Your Password
        </Typography>

        {status.message && (
          <Alert severity={status.success ? "success" : "error"} sx={{ mb: 2 }}>
            {status.message}
          </Alert>
        )}

        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
        />

        <Box mt={2}>
          <Button variant="contained" fullWidth onClick={handleSubmit}>
            Send Reset Link
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ForgotPassword;
