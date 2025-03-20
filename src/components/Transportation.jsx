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
              The **Kerala Smart Transportation & Mobility Policy (KSTMP)** aims to establish a **world-class, AI-driven, and sustainable 
              transportation system** that enhances **mobility, safety, and efficiency** while reducing traffic congestion, pollution, and 
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
              ✅ Implementation of **AI-powered traffic monitoring** for real-time congestion control.  
              ✅ **Smart traffic lights** that adjust based on vehicle flow to minimize waiting time.  
              ✅ AI-driven **vehicle classification & speed monitoring** to reduce accidents.  
            </Typography>
  
            <Divider sx={{ my: 2 }} />
  
            {/* Electric Mobility */}
            <Typography variant="h6" color="primary" fontWeight="bold">
              B. 100% Electrification of Public Transport
            </Typography>
            <Typography variant="body2">
              ✅ **100% electric buses & taxis** by 2030.  
              ✅ **Charging stations every 5 km** on major highways and urban zones.  
              ✅ **Subsidies & incentives** for electric vehicle (EV) adoption.  
            </Typography>
  
            <Divider sx={{ my: 2 }} />
  
            {/* AI-Powered Public Transport */}
            <Typography variant="h6" color="primary" fontWeight="bold">
              C. AI-Powered Public Transport & Metro Expansion
            </Typography>
            <Typography variant="body2">
              ✅ AI-based **route optimization & predictive maintenance** for buses & metro.  
              ✅ Expansion of **Kochi Metro** and introduction of **light metro networks** in major cities.  
              ✅ **One-nation one-card** system for digital ticketing and seamless mobility.  
            </Typography>
  
            <Divider sx={{ my: 2 }} />
  
            {/* Sustainable Urban Mobility */}
            <Typography variant="h6" color="primary" fontWeight="bold">
              D. Sustainable & Pedestrian-Friendly Urban Mobility
            </Typography>
            <Typography variant="body2">
              ✅ **Dedicated cycling & pedestrian lanes** across all major cities.  
              ✅ AI-monitored **smart parking systems** to reduce congestion.  
              ✅ **Integrated multimodal transport hubs** for seamless connectivity between buses, metro, and taxis.  
            </Typography>
  
            <Divider sx={{ my: 2 }} />
  
            {/* AI-Based Logistics & Freight Management */}
            <Typography variant="h6" color="primary" fontWeight="bold">
              E. AI-Based Logistics & Freight Management
            </Typography>
            <Typography variant="body2">
              ✅ **AI-powered cargo movement tracking** to reduce delays and enhance efficiency.  
              ✅ **EV-based freight transport corridors** to reduce carbon footprint.  
              ✅ AI-driven **route planning for delivery vehicles** to optimize urban logistics.  
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
              The **Kerala Smart Transportation & Mobility Policy (KSTMP)** will **revolutionize public transport**, reduce **carbon emissions**, 
              and improve **urban mobility**. With **AI-driven traffic systems**, **electric mobility**, and **smart logistics**, Kerala will 
              achieve **sustainable and futuristic transportation standards** comparable to **Tokyo, Singapore, and Amsterdam**.
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
  