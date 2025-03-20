import { 
  Card, CardContent, Typography, Button, 
  Container, Box, Divider, Table, TableBody, TableCell, 
  TableContainer, TableHead, TableRow, Paper 
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Wildlife = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <Container maxWidth="md">
      {/* Main Card for Wildlife Policy */}
      <Card sx={{ mt: 6, p: 4, boxShadow: 4, borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom color="primary" fontWeight="bold">
            Kerala Wildlife Protection & Human-Wildlife Conflict Mitigation Policy (KWP-HWCMP)
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Policy Objective */}
          <Typography variant="h5" gutterBottom color="secondary" fontWeight="bold">
            1. Policy Objective
          </Typography>
          <Typography variant="body1" align="justify" paragraph>
            The **Kerala Wildlife Protection & Human-Wildlife Conflict Mitigation Policy (KWP-HWCMP)** aims to ensure the **coexistence of wildlife and humans** by focusing on **biodiversity conservation, AI-powered wildlife monitoring, and sustainable conflict prevention measures**.
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Key Components */}
          <Typography variant="h5" gutterBottom color="secondary" fontWeight="bold">
            2. Key Components of the Policy
          </Typography>

          {/* AI-Based Wildlife Monitoring */}
          <Typography variant="h6" color="primary" fontWeight="bold">
            A. AI-Based Wildlife Monitoring & Early Warning Systems
          </Typography>
          <Typography variant="body2">
            ✅ AI-powered **drone surveillance & thermal imaging** to track animal movements in real time.  
            ✅ **GPS collars for elephants, tigers, and leopards** to monitor migration patterns and potential conflicts.  
            ✅ **AI-based predictive analytics** to warn villages about potential wildlife movement near human settlements.  
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* Human-Wildlife Conflict Prevention */}
          <Typography variant="h6" color="primary" fontWeight="bold">
            B. Human-Wildlife Conflict Prevention Strategies
          </Typography>
          <Typography variant="body2">
            ✅ **AI-powered electric fencing** that activates based on real-time animal proximity detection.  
            ✅ **Smart lighting systems** near forest borders to deter wildlife from entering human settlements.  
            ✅ **Community-driven conflict response teams** trained to handle emergency wildlife encounters.  
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* Sustainable Habitat Conservation */}
          <Typography variant="h6" color="primary" fontWeight="bold">
            C. Sustainable Habitat Conservation & Reforestation
          </Typography>
          <Typography variant="body2">
            ✅ **AI-assisted afforestation programs** to restore animal habitats.  
            ✅ **Eco-corridors connecting fragmented forests** to reduce human-wildlife interaction.  
            ✅ **Ban on deforestation in high-conflict zones** to prevent habitat destruction.  
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* Compensation & Support System */}
          <Typography variant="h6" color="primary" fontWeight="bold">
            D. Wildlife Conflict Compensation & Farmer Protection
          </Typography>
          <Typography variant="body2">
            ✅ **Fast-track compensation** for farmers whose crops are damaged by wildlife.  
            ✅ **Insurance for human and livestock injuries** due to animal attacks.  
            ✅ **Government subsidies for non-lethal wildlife deterrents**, such as chili fences and beehive fencing.  
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
                  <TableCell>Eco-Tourism Revenue from AI-Powered Wildlife Safaris</TableCell>
                  <TableCell align="right">5,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>State-Wildlife Conservation Fund & Donations</TableCell>
                  <TableCell align="right">3,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>AI-Enabled Sustainable Forestry & Carbon Credit Trading</TableCell>
                  <TableCell align="right">4,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Government Budget Allocation for Wildlife Protection</TableCell>
                  <TableCell align="right">7,000</TableCell>
                </TableRow>
                <TableRow sx={{ backgroundColor: "#e3f2fd" }}>
                  <TableCell><strong>Total Estimated Revenue</strong></TableCell>
                  <TableCell align="right"><strong>₹19,000 crore/year</strong></TableCell>
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
            The **Kerala Wildlife Protection & Human-Wildlife Conflict Mitigation Policy (KWP-HWCMP)** ensures that Kerala's **wildlife and human settlements can coexist harmoniously** through **AI-powered monitoring, proactive conflict prevention, and sustainable conservation efforts**.  
            With an estimated **₹19,000 crore annual revenue**, Kerala will be able to **fund large-scale habitat protection, enhance eco-tourism, and implement advanced AI-driven wildlife management**.
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

export default Wildlife;
