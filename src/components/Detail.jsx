import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const details = {
    1: { title: "AboutThisMovement", image: "/images/about.jpg", description: "About this initiative" },
    2: { title: "Tea Plantations", image: "/images/tea.jpg", description: "Enjoy the lush green tea plantations in Munnar." },
    3: { title: "Beaches", image: "/images/beaches.jpg", description: "Relax on the stunning beaches of Kerala." }
  };

  const detail = details[id];

  return (
    <div className="p-10 text-center">
      <img src={detail.image} alt={detail.title} className="w-full h-96 object-cover" />
      <Typography variant="h4" className="mt-4">{detail.title}</Typography>
      <Typography variant="body1" className="mt-2">{detail.description}</Typography>
    </div>
  );
};

export default Detail;
