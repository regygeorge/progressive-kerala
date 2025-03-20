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
          <Typography variant="h4" align="center" gutterBottom color="primary" fontWeight="bold">
            Kerala Open Abkari Policy (KOAP)
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Policy Objective */}
          <Typography variant="h5" gutterBottom color="secondary" fontWeight="bold">
            1. Policy Objective
          </Typography>
          <Typography variant="body1" align="justify" paragraph>
            The <strong>Kerala Open Abkari Policy (KOAP)</strong> aims to <strong>liberalize the liquor license system</strong> 
            by allowing any individual or business to obtain a <strong>bar license with minimal fees</strong>. 
            This policy ensures a <strong>transparent, corruption-free liquor trade</strong> while eliminating 
            the <strong>black market and counterfeit liquor sales</strong>.
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Key Components */}
          <Typography variant="h5" gutterBottom color="secondary" fontWeight="bold">
            2. Key Components of the Policy
          </Typography>

          {/* Open Licensing System */}
          <Typography variant="h6" color="primary" fontWeight="bold">
            A. Open Licensing System for Liquor Sales
          </Typography>
          <Typography variant="body2">
            ✅ <strong>Minimal registration fees</strong> for liquor sales licenses. <br />
            ✅ Fully <strong>online application process</strong> to eliminate corruption. <br />
            ✅ <strong>Licenses issued within 30 days</strong>, ensuring transparency.
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* Strict Regulation */}
          <Typography variant="h6" color="primary" fontWeight="bold">
            B. Strict Regulation to Ensure Authentic Liquor Sales
          </Typography>
          <Typography variant="body2">
            ✅ Liquor must be <strong>sourced only from government-approved distilleries</strong>. <br />
            ✅ Every bottle must have a <strong>QR code</strong> for authentication. <br />
            ✅ Monthly audits ensure <strong>compliance with original liquor sales</strong>.
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* Heavy Penalties */}
          <Typography variant="h6" color="primary" fontWeight="bold">
            C. Heavy Penalties for Counterfeit Liquor Sales
          </Typography>
          <Typography variant="body2">
            ✅ <strong>First offense:</strong> ₹10 lakh fine and <strong>1-year license suspension</strong>. <br />
            ✅ <strong>Second offense:</strong> ₹50 lakh fine and <strong>permanent license cancellation</strong>. <br />
            ✅ <strong>Third offense:</strong> <strong>Criminal charges and imprisonment up to 10 years</strong>. <br />
            ✅ AI-based <strong>liquor tracking system</strong> to prevent illegal sales.
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Revenue Model with Table */}
          <Typography variant="h5" gutterBottom color="secondary" fontWeight="bold">
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
          <Typography variant="h5" gutterBottom color="secondary" fontWeight="bold">
            4. Expected Benefits
          </Typography>
          <Typography variant="body2">
            ✅ <strong>Elimination of the liquor black market</strong> and curbing of illegal sales. <br />
            ✅ <strong>Increased state revenue</strong> from legalized liquor sales. <br />
            ✅ <strong>Enhanced consumer safety</strong> by eliminating counterfeit liquor. <br />
            ✅ <strong>Transparent and corruption-free liquor trade</strong>. <br />
            ✅ <strong>Economic boost</strong> through business expansion and employment.
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Implementation Roadmap */}
          <Typography variant="h5" gutterBottom color="secondary" fontWeight="bold">
            5. Implementation Roadmap
          </Typography>
          <Typography variant="body2">
            ✅ <strong>Year 1:</strong> Establish <strong>online licensing, QR code tracking</strong>, and public awareness campaigns. <br />
            ✅ <strong>Year 2:</strong> AI-based monitoring of liquor sales and tax compliance. <br />
            ✅ <strong>Year 3:</strong> Evaluation and further <strong>policy refinements based on data insights</strong>.
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Conclusion */}
          <Typography variant="h5" gutterBottom color="secondary" fontWeight="bold">
            6. Conclusion
          </Typography>
          <Typography variant="body1" align="justify" paragraph>
            The <strong>Kerala Open Abkari Policy (KOAP)</strong> will <strong>eliminate black money in the liquor trade</strong>, 
            ensure <strong>consumer safety</strong>, and provide <strong>equal opportunities for businesses</strong> 
            to enter the liquor industry. This will also generate <strong>substantial revenue for Kerala’s development</strong>.
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
