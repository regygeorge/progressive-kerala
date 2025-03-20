import { Card, CardContent, Typography, Button, Container, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <Container maxWidth="md">
      {/* Main Card for About Section */}
      <Card sx={{ mt: 6, p: 4, boxShadow: 3, borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            About the Initiative
          </Typography>

          <Typography variant="body1" align="justify" paragraph>
            <strong>Progressive Kerala</strong> is a movement dedicated to transforming the state into a developed region 
            by harnessing the power of information technology. We aim to <strong>increase the standard of living</strong> 
            and <strong>empower every citizen</strong> to build a better future.
          </Typography>

          <Typography variant="body1" align="justify" paragraph>
            Despite frequent <strong>political changes</strong>, Kerala has struggled to achieve major breakthroughs 
            in governance and development. This movement seeks to break the cycle of stagnation by focusing on 
            <strong>technology-driven solutions</strong>.
          </Typography>

          <Typography variant="body1" align="justify" paragraph>
            Our initiative is centered on <strong>eliminating corruption, ensuring transparency, and optimizing 
            administrative efficiency</strong>. By leveraging IT solutions, we strive to create a system where governance 
            is <strong>accountable, effective, and truly beneficial</strong> to every citizen.
          </Typography>

          <Typography variant="body1" align="justify" paragraph>
            This is not just a vision, but a practical approach to <strong>modernizing governance</strong> in Kerala, 
            bringing it on par with leading nations in the world.
          </Typography>

          {/* Back to Home Button */}
          <Box display="flex" justifyContent="center" mt={4}>
            <Button 
              variant="contained" 
              color="primary" 
              size="large" 
              onClick={() => navigate("/")}
            >
              Back to Home
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default About;
