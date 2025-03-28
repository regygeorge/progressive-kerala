import React, { useEffect, useState } from "react";
import {
  Card, CardContent, Typography, Button, TextField,
  Container, Box, Divider, Paper
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const About = () => {
  const navigate = useNavigate();
  const [sections, setSections] = useState([]);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [replyInputs, setReplyInputs] = useState({});
  const policyHead = "PKABOUT";

  const userEmail = localStorage.getItem("userEmail"); // get email from login

  useEffect(() => {
    axios.get(`/mnm-api/policy/${policyHead}`)
      .then(res => {
        const sorted = res.data.sort((a, b) => a.sectionOrder - b.sectionOrder);
        setSections(sorted);
      })
      .catch(err => console.error("Error loading policy sections", err));
    axios.get(`/mnm-api/comments/by-policy/${policyHead}`)
      .then(res => setComments(res.data))
      .catch(err => console.error("Error loading comments", err));
  }, []);

  const handleCommentSubmit = () => {
    if (!commentText || !userEmail) return;

    const commentData = { userEmail, commentText, policyHead };

    axios.post("/mnm-api/comments/add", commentData)
      .then((res) => {
        setComments(prev => [...prev, res.data]);
        setCommentText("");
      })
      .catch(err => console.error("Error posting comment", err));
  };

  const handleReplySubmit = (parentCommentId) => {
    const reply = replyInputs[parentCommentId];
    if (!reply?.commentText || !userEmail) return;

    const replyData = {
      userEmail,
      commentText: reply.commentText
    };

    axios.post(`/mnm-api/comments/reply/${parentCommentId}`, replyData)
      .then(() => {
        setComments(prev =>
          prev.map(comment =>
            comment.id === parentCommentId
              ? { ...comment, replies: [...(comment.replies || []), replyData] }
              : comment
          )
        );
        setReplyInputs(prev => {
          const updated = { ...prev };
          delete updated[parentCommentId];
          return updated;
        });
      })
      .catch(err => console.error("Error posting reply", err));
  };

  return (
    <Container maxWidth="md">
      <Card sx={{ mt: 6, p: 4, boxShadow: 4, borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom color="primary" fontWeight="bold">
            About Progressive Kerala
          </Typography>

          <Divider sx={{ my: 3 }} />

          {sections.map((section, index) => (
            <Box key={index} sx={{ mb: 6 }}>
              <Typography variant="h5" gutterBottom color="secondary" fontWeight="bold">
                {section.sectionOrder}. {section.sectionTitle}
              </Typography>
              <Box
                component="div"
                sx={{
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  "& table": {
                    width: "100%",
                    borderCollapse: "collapse",
                    marginTop: 2,
                  },
                  "& th, & td": {
                    border: "1px solid #ddd",
                    padding: "8px",
                    textAlign: "left",
                  },
                  "& th": {
                    backgroundColor: "#f5f5f5",
                    fontWeight: "bold",
                  },
                  "& tr:nth-of-type(even)": {
                    backgroundColor: "#f9f9f9",
                  },
                  "& ul": {
                    paddingLeft: "1.5rem"
                  },
                  "& li": {
                    marginBottom: "0.5rem"
                  }
                }}
                dangerouslySetInnerHTML={{ __html: section.htmlContent }}
              />
              <Divider sx={{ my: 4 }} />
            </Box>
          ))}

          {/* Global Comments Section */}
          <Box sx={{ mt: 4, p: 2, border: "1px solid #ccc", borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              💬 Comments:
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

                {/* Replies */}
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

                {/* Reply Input */}
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

            {/* New Comment Input */}
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
          </Box>

          <Box display="flex" justifyContent="center" mt={4}>
            <Button variant="contained" color="primary" size="large" onClick={() => navigate("/")}>
              Back to Home
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default About;
