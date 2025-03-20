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
            The <strong>Kerala Wildlife Protection & Human-Wildlife Conflict Mitigation Policy (KWP-HWCMP)</strong> aims to ensure the 
            <strong> coexistence of wildlife and humans</strong> by focusing on <strong>biodiversity conservation, AI-powered wildlife 
            monitoring, and sustainable conflict prevention measures</strong>.
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
            ✅ AI-powered <strong>drone surveillance & thermal imaging</strong> to track animal movements in real time. <br/>
            ✅ <strong>GPS collars for elephants, tigers, and leopards</strong> to monitor migration patterns and potential conflicts. <br/>
            ✅ <strong>AI-based predictive analytics</strong> to warn villages about potential wildlife movement near human settlements.
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* Human-Wildlife Conflict Prevention */}
          <Typography variant="h6" color="primary" fontWeight="bold">
            B. Human-Wildlife Conflict Prevention Strategies
          </Typography>
          <Typography variant="body2">
            ✅ <strong>AI-powered electric fencing</strong> that activates based on real-time animal proximity detection. <br/>
            ✅ <strong>Smart lighting systems</strong> near forest borders to deter wildlife from entering human settlements. <br/>
            ✅ <strong>Community-driven conflict response teams</strong> trained to handle emergency wildlife encounters.
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* Sustainable Habitat Conservation */}
          <Typography variant="h6" color="primary" fontWeight="bold">
            C. Sustainable Habitat Conservation & Reforestation
          </Typography>
          <Typography variant="body2">
            ✅ <strong>AI-assisted afforestation programs</strong> to restore animal habitats. <br/>
            ✅ <strong>Eco-corridors connecting fragmented forests</strong> to reduce human-wildlife interaction. <br/>
            ✅ <strong>Ban on deforestation in high-conflict zones</strong> to prevent habitat destruction.
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* Compensation & Support System */}
          <Typography variant="h6" color="primary" fontWeight="bold">
            D. Wildlife Conflict Compensation & Farmer Protection
          </Typography>
          <Typography variant="body2">
            ✅ <strong>Fast-track compensation</strong> for farmers whose crops are damaged by wildlife. <br/>
            ✅ <strong>Insurance for human and livestock injuries</strong> due to animal attacks. <br/>
            ✅ <strong>Government subsidies for non-lethal wildlife deterrents</strong>, such as chili fences and beehive fencing.
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
            The <strong>Kerala Wildlife Protection & Human-Wildlife Conflict Mitigation Policy (KWP-HWCMP)</strong> ensures that Kerala's 
            <strong> wildlife and human settlements can coexist harmoniously</strong> through <strong>AI-powered monitoring, proactive 
            conflict prevention, and sustainable conservation efforts</strong>. <br/><br/>
            With an estimated <strong>₹19,000 crore annual revenue</strong>, Kerala will be able to <strong>fund large-scale habitat 
            protection, enhance eco-tourism, and implement advanced AI-driven wildlife management</strong>.
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
