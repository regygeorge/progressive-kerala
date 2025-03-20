import { 
  Card, CardContent, Typography, Button, 
  Container, Box, Divider, Table, TableBody, TableCell, 
  TableContainer, TableHead, TableRow, Paper 
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Sports = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <Container maxWidth="md">
      {/* Main Card for Sports Policy */}
      <Card sx={{ mt: 6, p: 4, boxShadow: 4, borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom color="primary" fontWeight="bold">
            Kerala Sports & Physical Education Development Policy (KSPEP)
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Policy Objective */}
          <Typography variant="h5" gutterBottom color="secondary" fontWeight="bold">
            1. Policy Objective
          </Typography>
          <Typography variant="body1" align="justify" paragraph>
            The **Kerala Sports & Physical Education Development Policy (KSPEP)** aims to **create a world-class sporting ecosystem** 
            by integrating **AI-driven training, cutting-edge sports infrastructure, and school-level talent development programs**.  
            The policy focuses on **grassroots sports, athlete welfare, and international-level coaching**.
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Key Components */}
          <Typography variant="h5" gutterBottom color="secondary" fontWeight="bold">
            2. Key Components of the Policy
          </Typography>

          {/* AI-Based Athlete Training */}
          <Typography variant="h6" color="primary" fontWeight="bold">
            A. AI-Based Athlete Training & Performance Analytics
          </Typography>
          <Typography variant="body2">
            ✅ AI-powered **motion capture and performance analysis** for athletes.  
            ✅ **AI-driven diet and training plans** based on real-time athlete data.  
            ✅ **Smart wearables and sensors** for tracking injury prevention and rehabilitation.  
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* Sports Infrastructure */}
          <Typography variant="h6" color="primary" fontWeight="bold">
            B. World-Class Sports Infrastructure Development
          </Typography>
          <Typography variant="body2">
            ✅ **Kerala International Sports City** to be built with **Olympic-grade facilities**.  
            ✅ **AI-powered stadium management** to enhance fan experience and optimize ticket pricing.  
            ✅ **Multipurpose sports academies in every district** for coaching and training.  
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* School-Level Sports Integration */}
          <Typography variant="h6" color="primary" fontWeight="bold">
            C. School-Level Physical Education & Talent Identification
          </Typography>
          <Typography variant="body2">
            ✅ **Mandatory daily physical education (PE) classes** in all schools.  
            ✅ AI-powered **sports talent identification system** to detect young athletes early.  
            ✅ **Integration of esports & virtual reality training** in school sports programs.  
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* Athlete Welfare & Career Development */}
          <Typography variant="h6" color="primary" fontWeight="bold">
            D. Athlete Welfare & Career Development
          </Typography>
          <Typography variant="body2">
            ✅ **State-funded athlete scholarships** for training in international facilities.  
            ✅ **Job security & pension plans** for retired athletes.  
            ✅ **AI-driven mental health programs** for athletes under high-pressure environments.  
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Revenue Model */}
          <Typography variant="h5" gutterBottom color="secondary" fontWeight="bold">
            3. Funding & Revenue Model
          </Typography>
          <TableContainer component={Paper} sx={{ mt: 2, mb: 4 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                  <TableCell><strong>Revenue Source</strong></TableCell>
                  <TableCell align="right"><strong>Estimated Revenue (₹ Crore/year)</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>AI-Powered Stadium & Sports Event Ticketing</TableCell>
                  <TableCell align="right">6,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Public-Private Partnerships (PPP) in Sports Academies</TableCell>
                  <TableCell align="right">5,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>State Sponsorships & Athlete Endorsements</TableCell>
                  <TableCell align="right">4,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Government Budget Allocation for Sports</TableCell>
                  <TableCell align="right">8,000</TableCell>
                </TableRow>
                <TableRow sx={{ backgroundColor: "#e3f2fd" }}>
                  <TableCell><strong>Total Estimated Revenue</strong></TableCell>
                  <TableCell align="right"><strong>₹23,000 crore/year</strong></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Divider sx={{ my: 3 }} />

          {/* Conclusion */}
          <Typography variant="h5" gutterBottom color="secondary" fontWeight="bold">
            4. Conclusion
          </Typography>
          <Typography variant="body1" align="justify" paragraph>
            The **Kerala Sports & Physical Education Development Policy (KSPEP)** will transform Kerala into **India’s premier sports hub** 
            by leveraging **AI, modern infrastructure, and school-level sports integration**.  
            With an estimated **₹23,000 crore annual revenue**, Kerala will be able to **train world-class athletes, host global sporting events, and promote youth participation in physical fitness**.
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Back to Home Button */}
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

export default Sports;
