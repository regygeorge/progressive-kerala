import { 
    Card, CardContent, Typography, Button, 
    Container, Box, Divider, Table, TableBody, TableCell, 
    TableContainer, TableHead, TableRow, Paper 
  } from "@mui/material";
  import { useNavigate } from "react-router-dom";
  
  const Abkari = () => {
    const navigate = useNavigate(); // Hook for navigation
  
    return (
      <Container maxWidth="md">
        {/* Main Card for Abkari Policy */}
        <Card sx={{ mt: 6, p: 4, boxShadow: 4, borderRadius: 3 }}>
          <CardContent>
            <Typography variant="h4" align="center" gutterBottom color="primary">
              Kerala Open Abkari Policy (KOAP)
            </Typography>
  
            <Divider sx={{ my: 3 }} />
  
            {/* Policy Objective */}
            <Typography variant="h5" gutterBottom color="secondary">
              1. Policy Objective
            </Typography>
            <Typography variant="body1" align="justify" paragraph>
              The **Kerala Open Abkari Policy (KOAP)** aims to **liberalize the liquor license system** by allowing any individual or business 
              to obtain a **bar license with minimal fees**. This policy ensures a **transparent, corruption-free liquor trade** while 
              eliminating the **black market and counterfeit liquor sales**.
            </Typography>
  
            <Divider sx={{ my: 3 }} />
  
            {/* Key Components */}
            <Typography variant="h5" gutterBottom color="secondary">
              2. Key Components of the Policy
            </Typography>
  
            {/* Open Licensing System */}
            <Typography variant="h6" color="primary">
              A. Open Licensing System for Liquor Sales
            </Typography>
            <Typography variant="body2">
              ✅ **Minimal registration fees** for liquor sales licenses.  
              ✅ Fully **online application process** to eliminate corruption.  
              ✅ **Licenses issued within 30 days**, ensuring transparency.  
            </Typography>
  
            <Divider sx={{ my: 2 }} />
  
            {/* Strict Regulation */}
            <Typography variant="h6" color="primary">
              B. Strict Regulation to Ensure Authentic Liquor Sales
            </Typography>
            <Typography variant="body2">
              ✅ Liquor must be **sourced only from government-approved distilleries**.  
              ✅ Every bottle must have a **QR code** for authentication.  
              ✅ Monthly audits ensure **compliance with original liquor sales**.  
            </Typography>
  
            <Divider sx={{ my: 2 }} />
  
            {/* Heavy Penalties */}
            <Typography variant="h6" color="primary">
              C. Heavy Penalties for Counterfeit Liquor Sales
            </Typography>
            <Typography variant="body2">
              ✅ **First offense:** ₹10 lakh fine and **1-year license suspension**.  
              ✅ **Second offense:** ₹50 lakh fine and **permanent license cancellation**.  
              ✅ **Third offense:** **Criminal charges and imprisonment up to 10 years**.  
              ✅ AI-based **liquor tracking system** to prevent illegal sales.  
            </Typography>
  
            <Divider sx={{ my: 3 }} />
  
            {/* Revenue Model with Table */}
            <Typography variant="h5" gutterBottom color="secondary">
              3. Funding & Economic Benefits
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
                    <TableCell>Licensing Fees (Minimal)</TableCell>
                    <TableCell align="right">5,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Increased Tax Revenue from Legal Sales</TableCell>
                    <TableCell align="right">10,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>AI-based Anti-Evasion Measures</TableCell>
                    <TableCell align="right">3,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Fines & Penalties on Illegal Sales</TableCell>
                    <TableCell align="right">2,000</TableCell>
                  </TableRow>
                  <TableRow sx={{ backgroundColor: "#e3f2fd" }}>
                    <TableCell><strong>Total Estimated Revenue</strong></TableCell>
                    <TableCell align="right"><strong>₹20,000 crore/year</strong></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
  
            <Divider sx={{ my: 3 }} />
  
            {/* Expected Benefits */}
            <Typography variant="h5" gutterBottom color="secondary">
              4. Expected Benefits
            </Typography>
            <Typography variant="body2">
              ✅ **Elimination of the liquor black market** and curbing of illegal sales.  
              ✅ **Increased state revenue** from legalized liquor sales.  
              ✅ **Enhanced consumer safety** by eliminating counterfeit liquor.  
              ✅ **Transparent and corruption-free liquor trade**.  
              ✅ **Economic boost** through business expansion and employment.  
            </Typography>
  
            <Divider sx={{ my: 3 }} />
  
            {/* Implementation Roadmap */}
            <Typography variant="h5" gutterBottom color="secondary">
              5. Implementation Roadmap
            </Typography>
            <Typography variant="body2">
              ✅ **Year 1:** Establish **online licensing, QR code tracking**, and public awareness campaigns.  
              ✅ **Year 2:** AI-based monitoring of liquor sales and tax compliance.  
              ✅ **Year 3:** Evaluation and further **policy refinements based on data insights**.  
            </Typography>
  
            <Divider sx={{ my: 3 }} />
  
            {/* Conclusion */}
            <Typography variant="h5" gutterBottom color="secondary">
              6. Conclusion
            </Typography>
            <Typography variant="body1" align="justify" paragraph>
              The **Kerala Open Abkari Policy (KOAP)** will **eliminate black money in the liquor trade**, 
              ensure **consumer safety**, and provide **equal opportunities for businesses** to enter the liquor industry. 
              This will also generate **substantial revenue for Kerala’s development**.
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
  
  export default Abkari;
  