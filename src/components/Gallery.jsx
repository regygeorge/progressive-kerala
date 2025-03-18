import { Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Gallery = () => {
  const cards = [
    { id: 1, title: "Backwaters", image: "/images/backwaters.jpg" },
    { id: 2, title: "Tea Plantations", image: "/images/tea.jpg" },
    { id: 3, title: "Beaches", image: "/images/beaches.jpg" }
  ];

  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card) => (
        <Card key={card.id} className="cursor-pointer" component={Link} to={`/detail/${card.id}`}>
          <img src={card.image} alt={card.title} className="w-full h-64 object-cover" />
          <CardContent>
            <Typography variant="h5" align="center">{card.title}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Gallery;
