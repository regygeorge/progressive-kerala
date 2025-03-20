import { 
    Card, CardContent, Typography, Button, 
    Container, Box, Divider, Table, TableBody, TableCell, 
    TableContainer, TableHead, TableRow, Paper 
  } from "@mui/material";
  import { useNavigate } from "react-router-dom";
  
  const Revenue = () => {
    const navigate = useNavigate(); // Hook for navigation
  
    return (
      <Container maxWidth="md">
        {/* Main Card for Revenue Policy */}
        <Card sx={{ mt: 6, p: 4, boxShadow: 4, borderRadius: 3 }}>
          <CardContent>
            <Typography variant="h4" align="center" gutterBottom color="primary" fontWeight="bold">
              Kerala Smart Revenue & Economic Growth Policy (KSREGP)
            </Typography>
  
            <Divider sx={{ my: 3 }} />
  
            {/* Policy Objective */}
            <Typography variant="h5" gutterBottom color="secondary" fontWeight="bold">
              1. Policy Objective
            </Typography>
            <Typography variant="body1" align="justify" paragraph>
              The **Kerala Smart Revenue & Economic Growth Policy (KSREGP)** aims to **digitally transform revenue generation**, 
              ensuring **economic sustainability and public financial empowerment**. It introduces **AI-powered taxation, 
              state-run e-commerce, online trading, and insurance schemes**, making Kerala financially independent.
            </Typography>
  
            <Divider sx={{ my: 3 }} />
  
            {/* Key Components */}
            <Typography variant="h5" gutterBottom color="secondary" fontWeight="bold">
              2. Key Components of the Policy
            </Typography>
  
            {/* AI-Based Taxation & Compliance */}
            <Typography variant="h6" color="primary" fontWeight="bold">
              A. AI-Based Taxation & Compliance System
            </Typography>
            <Typography variant="body2">
              ✅ AI-powered **automated tax compliance & real-time monitoring** to reduce tax evasion.  
              ✅ **AI-driven GST and Income Tax collection system** ensuring high accuracy & efficiency.  
              ✅ **AI-assisted tax audits** to detect fraud and ensure compliance.  
            </Typography>
  
            <Divider sx={{ my: 2 }} />
  
            {/* State-Run E-Commerce Platform */}
            <Typography variant="h6" color="primary" fontWeight="bold">
              B. Kerala State-Run E-Commerce Platform (KSECOM)
            </Typography>
            <Typography variant="body2">
              ✅ **A government-owned e-commerce platform** that operates like **Amazon**, but with **zero middlemen**.  
              ✅ **Kerala’s local businesses, farmers, and artisans** can directly sell their products.  
              ✅ AI-driven **dynamic pricing** to ensure fair market rates for buyers and sellers.  
              ✅ **Low transaction fees** compared to private e-commerce platforms.  
              ✅ **State logistics & warehousing system** to ensure fast delivery and minimal cost.  
            </Typography>
  
            <Divider sx={{ my: 2 }} />
  
            {/* State-Run Online Trading System */}
            <Typography variant="h6" color="primary" fontWeight="bold">
              C. Kerala State-Run Online Trading System (KSTP)
            </Typography>
            <Typography variant="body2">
              ✅ **A stock, commodities, and crypto trading platform** owned and operated by the state.  
              ✅ **Zero brokerage fees** for Kerala citizens investing in markets.  
              ✅ AI-driven **trading insights and risk management tools** for new investors.  
              ✅ State guarantees **safe trading with regulatory oversight**.  
            </Typography>
  
            <Divider sx={{ my: 2 }} />
  
            {/* State-Run Health & Motor Insurance */}
            <Typography variant="h6" color="primary" fontWeight="bold">
              D. Kerala State Health & Motor Insurance (KSHI & KMIP)
            </Typography>
            <Typography variant="body2">
              ✅ **Kerala Health Insurance (KSHI)** providing **universal health coverage** for **low-cost, high-quality healthcare**.  
              ✅ **Kerala Motor Insurance Program (KMIP)** offering **affordable vehicle insurance**, lowering costs for drivers.  
              ✅ AI-powered **fraud detection and premium optimization** to ensure financial sustainability.  
            </Typography>
  
            <Divider sx={{ my: 2 }} />
  
            {/* AI-Powered Business Growth */}
            <Typography variant="h6" color="primary" fontWeight="bold">
              E. AI-Powered Business Growth & Industrial Expansion
            </Typography>
            <Typography variant="body2">
              ✅ AI-driven **business approvals & investment tracking**.  
              ✅ **Industry 4.0 policies** attracting **green energy, AI, and robotics companies**.  
              ✅ **Single-window clearance system** for startups and foreign investors.  
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
                    <TableCell>AI-Powered Tax Compliance & Automation</TableCell>
                    <TableCell align="right">10,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>State-Run E-Commerce Platform (KSECOM)</TableCell>
                    <TableCell align="right">12,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>State-Run Online Trading System (KSTP)</TableCell>
                    <TableCell align="right">7,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>State-Run Health & Motor Insurance (KSHI & KMIP)</TableCell>
                    <TableCell align="right">9,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Public Asset Leasing & Monetization</TableCell>
                    <TableCell align="right">7,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Tourism Revenue Optimization</TableCell>
                    <TableCell align="right">3,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Business Expansion & Foreign Direct Investment (FDI)</TableCell>
                    <TableCell align="right">12,000</TableCell>
                  </TableRow>
                  <TableRow sx={{ backgroundColor: "#e3f2fd" }}>
                    <TableCell><strong>Total Estimated Revenue</strong></TableCell>
                    <TableCell align="right"><strong>₹60,000 crore/year</strong></TableCell>
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
              The **Kerala Smart Revenue & Economic Growth Policy (KSREGP)** introduces **state-run e-commerce, online trading, and AI-driven 
              tax collection**, creating a **highly profitable and self-sustaining economy**. With an estimated **₹60,000 crore annual revenue**, 
              Kerala will **fund large-scale welfare projects, infrastructure upgrades, and economic expansion**, making it **India’s most 
              financially self-reliant and technologically advanced state**.
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
  
  export default Revenue;
  