import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import aboutImage from "../assets/about.jpg";

import educationImage from "../assets/education.jpg";
import socialSecurityImage from "../assets/socialsecurity.jpg";
import abkariImage from "../assets/abkari.jpg";
import revenueImage from "../assets/revenue.jpg";
import healthcareImage from "../assets/healthcare.jpg";
import transportImage from "../assets/transport.jpg";
import wildlifeImage from "../assets/wildlife.jpg";
import sportsImage from "../assets/sports.jpg";
const Home = () => {
  const cards = [
    { id: 1, title: "About Progressive Kerala movement   " , image: aboutImage, path: "/about"},
    { id: 2, title: "Our Vision on Education System", image: educationImage, path: "/education" },
    { id: 3, title: "Our Vision on Social Security", image: socialSecurityImage, path: "/socialSecurity" },
    { id: 4, title: "Our Vision on Abkari Policy", image: abkariImage, path: "/abkari" },
    { id: 5, title: "Our Vision on State Revenue", image: revenueImage, path: "/revenue" },
    { id: 6, title: "Our Vision on Healthcare", image: healthcareImage, path: "/healthcare" },
    { id: 7, title: "Our Vision on Transportation", image: transportImage, path: "/transportation" },
    { id: 8, title: "Human-Wildlife Challenges", image: wildlifeImage, path: "/wildlife" },
    { id: 9, title: "Sports and Physical Education", image: sportsImage , path: "/sports" },
    { id: 10, title: "Invite Others", image: sportsImage , path: "/invite" },
    { id: 11, title: "Admin Page", image: sportsImage , path: "/admin" },
  ];

  return (
    <div className="p-6">
      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card.id}>
            <Link to={card.path} style={{ textDecoration: "none" }}>
              <Card sx={{ display: "flex", flexDirection: "row", height: 120 }}>
                {/* Image Section (1/4th of the width) */}
                <Box sx={{ width: "25%", overflow: "hidden" }}>
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                  />
                </Box>

                {/* Text Section (3/4th of the width) */}
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
