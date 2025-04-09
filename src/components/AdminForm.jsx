import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminForm = () => {
  const [policyHead, setPolicyHead] = useState("");
  const [availableHeads, setAvailableHeads] = useState([]);
  const [sectionTitle, setSectionTitle] = useState("");
  const [sectionBody, setSectionBody] = useState("");
  const [sectionOrder, setSectionOrder] = useState("");
  const [sections, setSections] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [sectionToDelete, setSectionToDelete] = useState(null);

  const navigate = useNavigate();
  const roles = JSON.parse(localStorage.getItem("userRole") || "[]");

  useEffect(() => {
    if (!roles.includes("ROLE_ADMIN")) {
      navigate("/unauthorized");
    }
  }, []);

  useEffect(() => {
    axios.get("/mnm-api/policy/heads")
      .then((res) => {
        setAvailableHeads(res.data);
        if (res.data.length > 0) {
          setPolicyHead(res.data[0]);
        }
      })
      .catch((err) => console.error("Failed to fetch policy heads", err));
  }, []);

  const fetchSections = () => {
    axios.get(`/mnm-api/policy/${policyHead}`)
      .then((res) => setSections([...res.data].sort((a, b) => a.sectionOrder - b.sectionOrder)))
      .catch((err) => console.error("Failed to fetch sections", err));
  };

  useEffect(() => {
    if (policyHead) {
      fetchSections();
    }
  }, [policyHead]);

  const handleSubmit = async () => {
    const payload = {
      policyHead,
      sectionTitle,
      htmlContent: sectionBody,
      sectionOrder: parseInt(sectionOrder),
    };

    const endpoint = editingId
      ? `/mnm-api/policy/update/${editingId}`
      : "/mnm-api/policy/add";

    const method = editingId ? "put" : "post";

    try {
      await axios[method](endpoint, editingId ? { ...payload, id: editingId } : payload);
      setSectionTitle("");
      setSectionBody("");
      setSectionOrder("");
      setEditingId(null);
      fetchSections();
    } catch (err) {
      console.error("Error saving section", err);
    }
  };

  const handleEdit = (section) => {
    setSectionTitle(section.sectionTitle);
    setSectionBody(section.htmlContent);
    setSectionOrder(section.sectionOrder);
    setEditingId(section.id);
  };

  const confirmDelete = (section) => {
    setSectionToDelete(section);
    setDeleteDialogOpen(true);
  };

  const handleDelete = async () => {
    if (!sectionToDelete) return;

    try {
      await axios.delete(`/mnm-api/policy/delete/${sectionToDelete.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      setDeleteDialogOpen(false);
      setSectionToDelete(null);
      fetchSections();
    } catch (err) {
      console.error("Error deleting section", err);
    }
  };

  return (
    <Container maxWidth="md">
      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          {editingId ? "Edit" : "Add"} Policy Section
        </Typography>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel id="policy-head-label">Policy Head</InputLabel>
          <Select
            labelId="policy-head-label"
            value={policyHead}
            onChange={(e) => setPolicyHead(e.target.value)}
            label="Policy Head"
          >
            {availableHeads.map((head) => (
              <MenuItem key={head} value={head}>
                {head}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          fullWidth
          label="Section Title"
          value={sectionTitle}
          onChange={(e) => setSectionTitle(e.target.value)}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Section Body (HTML)"
          multiline
          rows={6}
          value={sectionBody}
          onChange={(e) => setSectionBody(e.target.value)}
          sx={{ mb: 2 }}
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
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Button onClick={() => handleEdit(sec)} variant="outlined" size="small">
                    Edit
                  </Button>
                  <Button onClick={() => confirmDelete(sec)} variant="outlined" color="error" size="small">
                    Delete
                  </Button>
                </Box>
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

      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
      >
        <DialogTitle>Delete Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete the section titled <strong>{sectionToDelete?.sectionTitle}</strong>?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleDelete} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AdminForm;
