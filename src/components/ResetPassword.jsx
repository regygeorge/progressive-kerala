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
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [status, setStatus] = useState({ success: null, message: "" });

  const handleReset = async () => {
    if (!password || !token) return;

    try {
      await axios.post("/mnm-api/reset-password", {
        token,
        newPassword: password,
      });
      setStatus({ success: true, message: "Password reset successfully." });
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setStatus({ success: false, message: "Invalid or expired token." });
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={4} sx={{ p: 4, mt: 8, borderRadius: 3 }}>
        <Typography variant="h6" align="center" gutterBottom>
          Set New Password
        </Typography>

        {status.message && (
          <Alert severity={status.success ? "success" : "error"} sx={{ mb: 2 }}>
            {status.message}
          </Alert>
        )}

        <TextField
          fullWidth
          label="New Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
        />

        <Box mt={2}>
          <Button variant="contained" fullWidth onClick={handleReset}>
            Reset Password
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ResetPassword;
