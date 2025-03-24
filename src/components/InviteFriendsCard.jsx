import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  Stack,
} from "@mui/material";
import axios from "axios";

const InviteFriendsCard = () => {
  const [friendEmail, setFriendEmail] = useState("");
  const [inviterEmail, setInviterEmail] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const payload = JSON.parse(atob(token.split(".")[1]));
      setInviterEmail(payload.sub);
    }
  }, []);

  const handleEmailInvite = async () => {
    try {
      await axios.post("/mnm-api/invite", {
        email: friendEmail,
        inviterEmail: inviterEmail,
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
    )}`;
    const message = encodeURIComponent(
      `Hey! I'm inviting you to join this platform. Click here to sign up: ${inviteLink}`
    );
    return `https://wa.me/?text=${message}`;
  };

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

          <Button
            variant="contained"
            color="success"
            component="a"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            fullWidth
          >
            Invite via WhatsApp
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default InviteFriendsCard;
