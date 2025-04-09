import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Grid,
  Box,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import axios from "axios";

const AdminCardForm = () => {
  const [title, setTitle] = useState("");
  const [path, setPath] = useState("");
  const [policyHead, setPolicyHead] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [order, setOrder] = useState("");
  const [cards, setCards] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [cardToDelete, setCardToDelete] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const res = await axios.get("/mnm-api/policy-cards");
      setCards(res.data);
    } catch (err) {
      console.error("Error fetching cards", err);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    setUploading(true);

    try {
      const res = await axios.post("/mnm-api/upload-image", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setImageUrl(res.data); // e.g., /images/filename.jpg
    } catch (err) {
      console.error("Image upload failed", err);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async () => {
    const payload = {
      title,
      path,
      policyHead,
      order: parseInt(order),
      imageUrl,
    };

    const endpoint = editingId
      ? `/mnm-api/policy-cards/update/${editingId}`
      : "/mnm-api/policy-cards/add";

    const method = editingId ? "put" : "post";

    try {
      await axios[method](endpoint, editingId ? { ...payload, id: editingId } : payload);
      resetForm();
      fetchCards();
    } catch (err) {
      console.error("Error saving card", err);
    }
  };

  const resetForm = () => {
    setTitle("");
    setPath("");
    setPolicyHead("");
    setImageUrl("");
    setOrder("");
    setEditingId(null);
  };

  const handleEdit = (card) => {
    setTitle(card.title);
    setPath(card.path);
    setPolicyHead(card.policyHead || "");
    setImageUrl(card.imageUrl || "");
    setOrder(card.order || "");
    setEditingId(card.id);
  };

  const confirmDelete = (card) => {
    setCardToDelete(card);
    setDeleteDialogOpen(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/mnm-api/policy-cards/delete/${cardToDelete.id}`);
      setDeleteDialogOpen(false);
      setCardToDelete(null);
      fetchCards();
    } catch (err) {
      console.error("Error deleting card", err);
    }
  };

  return (
    <Container maxWidth="md">
      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          {editingId ? "Edit" : "Add"} Policy Card
        </Typography>

        <TextField
          fullWidth
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Path (e.g., /education)"
          value={path}
          onChange={(e) => setPath(e.target.value)}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Policy Head (e.g., EDUCATION)"
          value={policyHead}
          onChange={(e) => setPolicyHead(e.target.value.toUpperCase())}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Display Order"
          type="number"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          sx={{ mb: 2 }}
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ marginBottom: 8 }}
        />
        {uploading && <Typography variant="body2">Uploading...</Typography>}

        {imageUrl && (
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2">Preview:</Typography>
            <img
              src={imageUrl}
              alt="Preview"
              style={{ maxWidth: "100%", maxHeight: 200 }}
            />
          </Box>
        )}

        <Button variant="contained" color="primary" onClick={handleSubmit}>
          {editingId ? "Update" : "Add"} Card
        </Button>

        <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
          Existing Cards
        </Typography>

        <Grid container spacing={2}>
          {cards.map((card) => (
            <Grid item xs={12} sm={6} md={4} key={card.id}>
              <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  style={{ height: 100, objectFit: "cover", width: "100%" }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="subtitle1">{card.title}</Typography>
                  <Typography variant="body2" color="textSecondary">{card.path}</Typography>
                  <Typography variant="body2" color="textSecondary">PolicyHead: {card.policyHead}</Typography>
                  <Typography variant="body2" color="textSecondary">Order: {card.order}</Typography>
                  <Box sx={{ mt: 1, display: "flex", gap: 1 }}>
                    <Button size="small" variant="outlined" onClick={() => handleEdit(card)}>Edit</Button>
                    <Button size="small" color="error" variant="outlined" onClick={() => confirmDelete(card)}>Delete</Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>

      <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
        <DialogTitle>Delete Confirmation</DialogTitle>
        <DialogContent>
          Are you sure you want to delete <strong>{cardToDelete?.title}</strong>?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleDelete} color="error" variant="contained">Delete</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AdminCardForm;
