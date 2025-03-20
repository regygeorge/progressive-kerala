import { 
  Card, CardContent, Typography, Button, 
  Container, Box, Divider, Table, TableBody, TableCell, 
  TableContainer, TableHead, TableRow, Paper 
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Transportation = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <Container maxWidth="md">
      {/* Main Card for Transportation Policy */}
      <Card sx={{ mt: 6, p: 4, boxShadow: 4, borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom color="primary" fontWeight="bold">
            Kerala Smart Transportation & Mobility Policy (KSTMP)
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Policy Objective */}
          <Typography variant="h5" gutterBottom color="secondary" fontWeight="bold">
            1. Policy Objective
          </Typography>
          <Typography variant="body1" align="justify" paragraph>
            The <strong>Kerala Smart Transportation & Mobility Policy (KSTMP)</strong> aims to establish a <strong>world-class, AI-driven, and sustainable 
            transportation system</strong> that enhances <strong>mobility, safety, and efficiency</strong> while reducing traffic congestion, pollution, and 
            reliance on fossil fuels.
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Key Components */}
          <Typography variant="h5" gutterBottom color="secondary" fontWeight="bold">
            2. Key Components of the Policy
          </Typography>

          {/* AI-Driven Traffic Management */}
          <Typography variant="h6" color="primary" fontWeight="bold">
            A. AI-Driven Traffic Management & Smart Roads
          </Typography>
          <Typography variant="body2">
            ✅ Implementation of <strong>AI-powered traffic monitoring</strong> for real-time congestion control. <br/>
            ✅ <strong>Smart traffic lights</strong> that adjust based on vehicle flow to minimize waiting time. <br/>
            ✅ AI-driven <strong>vehicle classification & speed monitoring</strong> to reduce accidents.
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* Electric Mobility */}
          <Typography variant="h6" color="primary" fontWeight="bold">
            B. 100% Electrification of Public Transport
          </Typography>
          <Typography variant="body2">
            ✅ <strong>100% electric buses & taxis</strong> by 2030. <br/>
            ✅ <strong>Charging stations every 5 km</strong> on major highways and urban zones. <br/>
            ✅ <strong>Subsidies & incentives</strong> for electric vehicle (EV) adoption.
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* AI-Powered Public Transport */}
          <Typography variant="h6" color="primary" fontWeight="bold">
            C. AI-Powered Public Transport & Metro Expansion
          </Typography>
          <Typography variant="body2">
            ✅ AI-based <strong>route optimization & predictive maintenance</strong> for buses & metro. <br/>
            ✅ Expansion of <strong>Kochi Metro</strong> and introduction of <strong>light metro networks</strong> in major cities. <br/>
            ✅ <strong>One-nation one-card</strong> system for digital ticketing and seamless mobility.
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* Sustainable Urban Mobility */}
          <Typography variant="h6" color="primary" fontWeight="bold">
            D. Sustainable & Pedestrian-Friendly Urban Mobility
          </Typography>
          <Typography variant="body2">
            ✅ <strong>Dedicated cycling & pedestrian lanes</strong> across all major cities. <br/>
            ✅ AI-monitored <strong>smart parking systems</strong> to reduce congestion. <br/>
            ✅ <strong>Integrated multimodal transport hubs</strong> for seamless connectivity between buses, metro, and taxis.
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* AI-Based Logistics & Freight Management */}
          <Typography variant="h6" color="primary" fontWeight="bold">
            E. AI-Based Logistics & Freight Management
          </Typography>
          <Typography variant="body2">
            ✅ <strong>AI-powered cargo movement tracking</strong> to reduce delays and enhance efficiency. <br/>
            ✅ <strong>EV-based freight transport corridors</strong> to reduce carbon footprint. <br/>
            ✅ AI-driven <strong>route planning for delivery vehicles</strong> to optimize urban logistics.
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Revenue Model */}
          <Typography variant="h5" gutterBottom color="secondary" fontWeight="bold">
            3. Funding the Policy
          </Typography>
          <TableContainer component={Paper} sx={{ mt: 2, mb: 4 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                  <TableCell><strong>Funding Source</strong></TableCell>
                  <TableCell align="right"><strong>Estimated Revenue (₹ Crore/year)</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Green Mobility Tax (1% on fuel-based vehicles)</TableCell>
                  <TableCell align="right">5,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>EV Infrastructure Investment & Subsidies</TableCell>
                  <TableCell align="right">3,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Public-Private Partnership (PPP) with Transport Companies</TableCell>
                  <TableCell align="right">7,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>State Budget Allocation for Transport</TableCell>
                  <TableCell align="right">20,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Efficiency Savings via AI-Based Mobility</TableCell>
                  <TableCell align="right">5,000</TableCell>
                </TableRow>
                <TableRow sx={{ backgroundColor: "#e3f2fd" }}>
                  <TableCell><strong>Total Estimated Revenue</strong></TableCell>
                  <TableCell align="right"><strong>₹40,000 crore/year</strong></TableCell>
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
            The <strong>Kerala Smart Transportation & Mobility Policy (KSTMP)</strong> will 
            <strong>revolutionize public transport</strong>, reduce <strong>carbon emissions</strong>, 
            and improve <strong>urban mobility</strong>. With <strong>AI-driven traffic systems</strong>,
            <strong>electric mobility</strong>, and <strong>smart logistics</strong>, Kerala will 
            achieve <strong>sustainable and futuristic transportation standards</strong>.
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

export default Transportation;
