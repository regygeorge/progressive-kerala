import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  Stack,
  Alert,
} from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";

const InviteFriendsCard = () => {
  const [friendEmail, setFriendEmail] = useState("");
  const [inviterEmail, setInviterEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [whatsappToken, setWhatsappToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        setInviterEmail(payload.sub);
        setIsLoggedIn(true);
      } catch (e) {
        console.error("Invalid token");
      }
    }
  }, []);

  
  const handleEmailInvite = async () => {
    if (!friendEmail) {
      alert("Please enter your friend's email.");
      return;
    }
  
    try {
      const token = crypto.randomUUID(); // ✅ NEW token every time
      await axios.post("/mnm-api/invite", {
        email: friendEmail,
        inviterEmail,
        inviteType: "EMAIL",
        token,
      });
  
      alert("Invitation sent via email!");
      setFriendEmail("");
    } catch (error) {
      console.error("Failed to send invitation:", error);
      alert("Failed to send invitation.");
    }
  };
  
  const whatsappLink = () => {
    const inviteLink = `https://www.progressivekerala.org/signup?ref=${encodeURIComponent(
      inviterEmail
    )}&token=${whatsappToken}`;
    const message = encodeURIComponent(
      `Hey! I'm inviting you to join this platform. Click here to sign up: ${inviteLink}`
    );
    return `https://wa.me/?text=${message}`;
  };

  if (!isLoggedIn) {
    return (
      <Card
        sx={{
          maxWidth: 400,
          mx: "auto",
          mt: 4,
          boxShadow: 3,
          borderRadius: 3,
        }}
      >
        <CardContent>
          <Typography variant="h6" align="center" gutterBottom>
            Invite Friends
          </Typography>
          <Alert severity="info" sx={{ mt: 2, textAlign: "center" }}>
            Please <Link to="/login">log in</Link> to invite your friends.
          </Alert>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 4,
        boxShadow: 3,
        borderRadius: 3,
      }}
    >
      <CardContent>
        <Typography variant="h5" align="center" gutterBottom>
          Invite Your Friends
        </Typography>

        <Stack spacing={2}>
          <TextField
            label="Friend's Email"
            type="email"
            value={friendEmail}
            onChange={(e) => setFriendEmail(e.target.value)}
            fullWidth
          />

          <Button
            variant="contained"
            color="primary"
            onClick={handleEmailInvite}
            fullWidth
          >
            Send Email Invite
          </Button>

          <Typography
            align="center"
            sx={{ color: "gray", fontWeight: "bold", mt: 1 }}
          >
            OR
          </Typography>

          <Button
  variant="contained"
  color="success"
  fullWidth
  onClick={async (e) => {
    e.preventDefault();

    try {
      const token = crypto.randomUUID();
      await axios.post("/mnm-api/invite", {
        inviterEmail,
        inviteType: "WHATSAPP",
        token,
      });

      const inviteLink = `https://www.progressivekerala.org/signup?ref=${encodeURIComponent(inviterEmail)}&token=${token}`;
      const message = `Hey! I'm inviting you to join this platform. Click here to sign up: ${inviteLink}`;

      // Final encoded WhatsApp URL
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;

      // Navigate (mobile-safe)
      window.location.href = whatsappUrl;
    } catch (err) {
      console.error("Failed to generate WhatsApp invite", err);
      alert("Failed to generate WhatsApp invite.");
    }
  }}
>
  Invite via WhatsApp
</Button>



        </Stack>
      </CardContent>
    </Card>
  );
};

export default InviteFriendsCard;
