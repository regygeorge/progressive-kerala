import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  TextField,
  Button,
  Paper
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const DynamicPage = ({ policyHead }) => {
  const [sections, setSections] = useState([]);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [replyInputs, setReplyInputs] = useState({});
  const userEmail = localStorage.getItem("userEmail");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/mnm-api/policy/${policyHead}`)
      .then((res) => setSections(res.data.sort((a, b) => a.sectionOrder - b.sectionOrder)))
      .catch((err) => console.error("Failed to fetch policy sections", err));
  }, [policyHead]);

  useEffect(() => {
    axios
      .get(`/mnm-api/comments/by-policy/${policyHead}`)
      .then((res) => setComments(res.data))
      .catch((err) => console.error("Failed to fetch comments", err));
  }, [policyHead]);

  const handleCommentSubmit = async () => {
    if (!commentText.trim()) return;
    try {
      await axios.post("/mnm-api/comments/add", {
        policyHead,
        userEmail,
        commentText
      });
      setCommentText("");
      const res = await axios.get(`/mnm-api/comments/by-policy/${policyHead}`);
      setComments(res.data);
    } catch (err) {
      console.error("Failed to post comment", err);
    }
  };

  const handleReplySubmit = async (commentId) => {
    const reply = replyInputs[commentId]?.commentText;
    if (!reply?.trim()) return;

    try {
      await axios.post(`/mnm-api/comments/reply/${commentId}`, {
        userEmail,
        commentText: reply
      });
      setReplyInputs((prev) => ({ ...prev, [commentId]: undefined }));
      const res = await axios.get(`/mnm-api/comments/by-policy/${policyHead}`);
      setComments(res.data);
    } catch (err) {
      console.error("Failed to post reply", err);
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Card sx={{ mb: 4 }}>
        <CardContent>
          {sections.map((section) => (
            <Box key={section.id} sx={{ mb: 4 }}>
              <Typography variant="h5" gutterBottom>
                {section.sectionTitle}
              </Typography>
              {section.imageBase64 && (
                <img
                  src={section.imageBase64}
                  alt={section.sectionTitle}
                  style={{ maxWidth: "100%", maxHeight: 300, borderRadius: 8 }}
                />
              )}
              <div dangerouslySetInnerHTML={{ __html: section.htmlContent }} />
            </Box>
          ))}
        </CardContent>
      </Card>

      {/* Comments Section */}
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            💬 Comments on the Policy
          </Typography>

          {comments.map((cmt, i) => (
            <Box key={i} sx={{ mb: 2 }}>
              <Paper sx={{ p: 2, backgroundColor: "#f9f9f9" }}>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>{cmt.userEmail}</Typography>
                <Typography variant="body2">{cmt.commentText}</Typography>

                {userEmail && (
                  <Button
                    size="small"
                    onClick={() => setReplyInputs(prev => ({ ...prev, [cmt.id]: {} }))}
                    sx={{ mt: 1 }}
                  >
                    Reply
                  </Button>
                )}
              </Paper>

              {(cmt.replies || []).map((reply, j) => (
                <Paper
                  key={j}
                  sx={{
                    ml: 4,
                    mt: 1,
                    p: 2,
                    backgroundColor: "#f0f0f0",
                    borderLeft: "3px solid #ccc"
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>{reply.userEmail}</Typography>
                  <Typography variant="body2">{reply.commentText}</Typography>
                </Paper>
              ))}

              {userEmail && replyInputs[cmt.id] !== undefined && (
                <Box sx={{ ml: 4, mt: 1 }}>
                  <TextField
                    size="small"
                    label="Your Reply"
                    fullWidth
                    multiline
                    rows={2}
                    onChange={(e) =>
                      setReplyInputs(prev => ({
                        ...prev,
                        [cmt.id]: {
                          ...prev[cmt.id],
                          commentText: e.target.value
                        }
                      }))
                    }
                  />
                  <Button
                    variant="outlined"
                    sx={{ mt: 1 }}
                    onClick={() => handleReplySubmit(cmt.id)}
                  >
                    Submit Reply
                  </Button>
                </Box>
              )}
            </Box>
          ))}

          {userEmail ? (
            <Box sx={{ mt: 2 }}>
              <TextField
                label="Add a comment"
                size="small"
                fullWidth
                multiline
                rows={2}
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              />
              <Button
                variant="contained"
                sx={{ mt: 1 }}
                onClick={handleCommentSubmit}
              >
                Post Comment
              </Button>
            </Box>
          ) : (
            <Typography variant="body2" sx={{ mt: 2, color: "gray" }}>
              Please <Button size="small" onClick={() => navigate("/login")}>login</Button> to comment.
            </Typography>
          )}
        </CardContent>
      </Card>

      {/* Back to Home */}
      <Box display="flex" justifyContent="center" mt={4}>
        <Button variant="contained" color="primary" size="large" onClick={() => navigate("/")}>
          Back to Home
        </Button>
      </Box>
    </Container>
  );
};

export default DynamicPage;
