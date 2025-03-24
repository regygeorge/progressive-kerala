import React, { useEffect, useState } from "react";
import {
  TextField, Button, Typography, Container, Paper, Box, Divider, List, ListItem, ListItemText
} from "@mui/material";
import axios from "axios";
import TiptapEditor from "./TiptapEditor";
import { useNavigate } from "react-router-dom";

const AdminForm = () => {
  const [policyHead, setPolicyHead] = useState("KOAP");
  const [sectionTitle, setSectionTitle] = useState("");
  const [htmlContent, setHtmlContent] = useState("");
  const [sectionOrder, setSectionOrder] = useState("");
  const [sections, setSections] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user")); // assuming user info is saved as JSON with a roles array

  useEffect(() => {
    if (!user || !user.roles || !user.roles.includes("admin")) {
      navigate("/unauthorized"); // or show message if preferred
    }
  }, []);

  const fetchSections = () => {
    axios.get(`http://localhost:8085/mnm-api/policy/${policyHead}`)
      .then((res) => setSections(res.data))
      .catch((err) => console.error("Failed to fetch sections", err));
  };

  useEffect(() => {
    if (user?.roles?.includes("admin")) {
      fetchSections();
    }
  }, [policyHead]);

  const handleSubmit = async () => {
    const payload = {
      policyHead,
      sectionTitle,
      htmlContent,
      sectionOrder: parseInt(sectionOrder)
    };

    const endpoint = editingId
      ? `http://localhost:8085/mnm-api/policy/update/${editingId}`
      : "http://localhost:8085/mnm-api/policy/add";

    const method = editingId ? "put" : "post";

    try {
      await axios[method](endpoint, editingId ? { ...payload, id: editingId } : payload);
      setSectionTitle("");
      setHtmlContent("");
      setSectionOrder("");
      setEditingId(null);
      fetchSections();
    } catch (err) {
      console.error("Error saving section", err);
    }
  };

  const handleEdit = (section) => {
    setSectionTitle(section.sectionTitle);
    setHtmlContent(section.htmlContent);
    setSectionOrder(section.sectionOrder);
    setEditingId(section.id);
  };

  if (!user || !user.roles || !user.roles.includes("admin")) {
    return (
      <Container maxWidth="sm" sx={{ mt: 6 }}>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h6" color="error" align="center">
            You are not authorized to view this page.
          </Typography>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          {editingId ? "Edit" : "Add"} Policy Section
        </Typography>

        <TextField
          fullWidth
          label="Policy Head"
          value={policyHead}
          onChange={(e) => setPolicyHead(e.target.value)}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Section Title"
          value={sectionTitle}
          onChange={(e) => setSectionTitle(e.target.value)}
          sx={{ mb: 2 }}
        />

        <TiptapEditor 
          theme="snow"
          value={htmlContent}
          onChange={setHtmlContent}
          style={{ height: "200px", marginBottom: "16px" }}
        />

        <TextField
          fullWidth
          label="Section Order"
          type="number"
          value={sectionOrder}
          onChange={(e) => setSectionOrder(e.target.value)}
          sx={{ mb: 2 }}
        />

        <Button variant="contained" color="primary" onClick={handleSubmit}>
          {editingId ? "Update" : "Add"} Section
        </Button>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h6">Existing Sections</Typography>
        <List>
          {sections.map((sec) => (
            <ListItem
              key={sec.id}
              secondaryAction={
                <Button onClick={() => handleEdit(sec)} variant="outlined">
                  Edit
                </Button>
              }
            >
              <ListItemText
                primary={`${sec.sectionOrder}. ${sec.sectionTitle}`}
                secondary={sec.policyHead}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default AdminForm;
