import { 
  Card, CardContent, Typography, Button, 
  Container, Box, Divider, Table, TableBody, TableCell, 
  TableContainer, TableHead, TableRow, Paper 
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const SocialSecurity = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <Container maxWidth="md">
      {/* Main Card for Social Security Policy */}
      <Card sx={{ mt: 6, p: 4, boxShadow: 4, borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom color="primary" fontWeight="bold">
            Kerala Comprehensive Social Security & Welfare Policy (KCSSWP)
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Policy Objective */}
          <Typography variant="h5" gutterBottom color="secondary" fontWeight="bold">
            1. Policy Objective
          </Typography>
          <Typography variant="body1" align="justify" paragraph>
            The <strong>Kerala Comprehensive Social Security & Welfare Policy (KCSSWP)</strong> aims to establish a 
            <strong>universal social security system</strong> that ensures a <strong>high standard of living</strong> 
            for all citizens. This policy focuses on <strong>economic stability, social equity, and well-being</strong> 
            by providing <strong>financial security, housing, healthcare, and employment support</strong> to vulnerable populations.
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Key Components */}
          <Typography variant="h5" gutterBottom color="secondary" fontWeight="bold">
            2. Key Components of the Policy
          </Typography>

          {/* Universal Basic Income (UBI) */}
          <Typography variant="h6" color="primary" fontWeight="bold">
            A. Universal Basic Income (UBI) for All Citizens
          </Typography>
          <Typography variant="body2">
            ✅ Every adult citizen of Kerala will receive a <strong>minimum monthly income</strong> of <strong>₹10,000</strong>. <br/>
            ✅ Special allowances for <strong>senior citizens, disabled individuals, and single mothers</strong>. <br/>
            ✅ UBI payments will be <strong>directly transferred to Aadhaar-linked bank accounts</strong>.
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* Affordable Housing */}
          <Typography variant="h6" color="primary" fontWeight="bold">
            B. Affordable Housing for Every Family
          </Typography>
          <Typography variant="body2">
            ✅ Expansion of the <strong>Kerala Smart Housing Program (KSHP)</strong> for <strong>affordable, climate-resilient housing</strong>. <br/>
            ✅ Rent support for <strong>low-income families</strong> to ensure no citizen is homeless. <br/>
            ✅ Mandatory inclusion of <strong>low-income housing in private real estate projects</strong>.
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* Universal Healthcare */}
          <Typography variant="h6" color="primary" fontWeight="bold">
            C. Universal Healthcare & Insurance Coverage
          </Typography>
          <Typography variant="body2">
            ✅ <strong>100% free healthcare</strong> under <strong>Kerala Health Assurance Scheme</strong>. <br/>
            ✅ Free <strong>medicines and emergency care</strong> for all citizens. <br/>
            ✅ Expansion of <strong>AI-driven preventive healthcare and telemedicine services</strong>. <br/>
            ✅ Special <strong>elderly and disability care centers</strong> in each district.
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* Employment Guarantee */}
          <Typography variant="h6" color="primary" fontWeight="bold">
            D. Employment Guarantee & Skill Development
          </Typography>
          <Typography variant="body2">
            ✅ <strong>Guaranteed job opportunities</strong> under <strong>Kerala Employment Security Scheme (KESS)</strong>. <br/>
            ✅ Monthly unemployment benefits of <strong>₹8,000</strong> for job-seekers. <br/>
            ✅ Expansion of <strong>AI-based job-matching platforms</strong>. <br/>
            ✅ Free skill development and vocational training programs in <strong>IT, healthcare, and green energy</strong> sectors.
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* Food Security & Nutrition Assistance */}
          <Typography variant="h6" color="primary" fontWeight="bold">
            E. Food Security & Nutrition Assistance
          </Typography>
          <Typography variant="body2">
            ✅ <strong>Free food distribution</strong> for families below the poverty line. <br/>
            ✅ Expansion of <strong>subsidized meal programs</strong> through government canteens. <br/>
            ✅ Introduction of <strong>organic farming incentives</strong> to increase food security.
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* AI-Based Welfare Monitoring */}
          <Typography variant="h6" color="primary" fontWeight="bold">
            F. AI-Based Social Welfare Monitoring System
          </Typography>
          <Typography variant="body2">
            ✅ <strong>AI-powered citizen welfare dashboard</strong> to track and monitor the social security benefits for individuals. <br/>
            ✅ Predictive analytics to <strong>identify financial distress and provide early intervention support</strong>.
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* Guest Workers Regulation */}
          <Typography variant="h6" color="primary" fontWeight="bold">
            G. Regulation & Welfare of Guest Workers
          </Typography>
          <Typography variant="body2">
            ✅ Every guest worker in Kerala will be issued a <strong>smart identity card with a chip</strong> to monitor movement and ensure accountability. <br/>
            ✅ At any time, only a <strong>specific number of guest workers</strong> will be permitted entry into Kerala, based on labor demand. <br/>
            ✅ <strong>Mandatory carrying of identity cards</strong>; heavy fines for those traveling without them. <br/>
            ✅ <strong>Strict monitoring and legal action</strong> in case of crimes committed by guest workers. <br/>
            ✅ <strong>Higher wages</strong> will be provided to ensure fair compensation. <br/>
            ✅ The state will <strong>provide free accommodation</strong> in well-maintained, hygienic environments. <br/>
            ✅ <strong>Skill development programs</strong> will be introduced to integrate guest workers efficiently.
          </Typography>

          <Divider sx={{ my: 2 }} />

{/* Women & Child Welfare */}
<Typography variant="h6" color="primary" fontWeight="bold">
 H. Women & Child Welfare Initiatives
</Typography>
<Typography variant="body2">
  ✅ <strong>₹5,000/month allowance</strong> for single mothers and economically disadvantaged women. <br/>
  ✅ Free <strong>education and childcare support</strong> for all children below 12 years. <br/>
  ✅ Strict enforcement of <strong>workplace equality and women’s employment rights</strong>.
</Typography>

<Divider sx={{ my: 2 }} />

{/* Food Security & Nutrition Assistance */}
<Typography variant="h6" color="primary" fontWeight="bold">
  I. Food Security & Nutrition Assistance
</Typography>
<Typography variant="body2">
  ✅ <strong>Free food distribution</strong> for families below the poverty line. <br/>
  ✅ Expansion of <strong>subsidized meal programs</strong> through government canteens. <br/>
  ✅ Introduction of <strong>organic farming incentives</strong> to increase food security.
</Typography>
          <Divider sx={{ my: 3 }} />

         {/* Revenue Model & Funding */}
         <Typography variant="h5" gutterBottom color="secondary" fontWeight="bold">
            3. Revenue Model & Funding
          </Typography>
          <TableContainer component={Paper} sx={{ mt: 2, mb: 4 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                  <TableCell><strong>Funding Source</strong></TableCell>
                  <TableCell align="right"><strong>Revenue (₹ Crore/year)</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Social Security Cess (1.5% on Kerala SGST)</TableCell>
                  <TableCell align="right">10,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Wealth Tax on High-Net-Worth Individuals</TableCell>
                  <TableCell align="right">7,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>State Budget Allocation</TableCell>
                  <TableCell align="right">20,000</TableCell>
                </TableRow>
                <TableRow sx={{ backgroundColor: "#e3f2fd" }}>
                  <TableCell><strong>Total Estimated Revenue</strong></TableCell>
                  <TableCell align="right"><strong>₹37,000 crore/year</strong></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

           
          
          {/* Conclusion */}
          <Typography variant="h5" gutterBottom color="secondary" fontWeight="bold">
            4. Conclusion
          </Typography>
          <Typography variant="body1" align="justify" paragraph>
            The <strong>Kerala Comprehensive Social Security & Welfare Policy (KCSSWP)</strong> aims to provide <strong>financial security, healthcare, 
            and employment guarantees</strong> while ensuring <strong>proper regulation of guest workers</strong>. With an estimated <strong>₹37,000 
            crore/year</strong> revenue, Kerala will establish itself as a <strong>model welfare state</strong> that prioritizes its citizens' 
            well-being and future prosperity.
          </Typography>

          <Divider sx={{ my: 3 }} />
            {/* Expected Benefits */}
            <Typography variant="h5" gutterBottom color="secondary">
            5. Expected Benefits
          </Typography>
          <Typography variant="body2">
          <li>  ✅ Elimination of <strong>poverty and financial insecurity</strong> in Kerala.  </li>
          <li>   ✅ Guaranteed <strong>housing, healthcare, and employment</strong> for all citizens.  </li>
          <li>   ✅ Effective *<strong>regulation of guest workers</strong> to ensure law and order.  </li>
          <li>  ✅ Kerala will become the <strong>benchmark state for social welfare and human development</strong>.</li>
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

export default SocialSecurity;
