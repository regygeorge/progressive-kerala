import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get("/mnm-api/policy-cards")
      .then((res) => setCards(res.data))
      .catch((err) => console.error("Failed to load cards", err));
  }, []);

  return (
    <div className="p-6">
      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card.id}>
            <Link to={card.path} style={{ textDecoration: "none" }}>
              <Card sx={{ display: "flex", flexDirection: "row", height: 120 }}>
                <Box sx={{ width: "25%", overflow: "hidden" }}>
                  <img 
                    src={card.imageUrl} 
                    alt={card.title} 
                    style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                  />
                </Box>
                <CardContent sx={{ width: "75%", display: "flex", alignItems: "center" }}>
                  <Typography variant="h6">{card.title}</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
