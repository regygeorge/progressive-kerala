import { 
  Card, CardContent, Typography, Button, 
  Container, Box, Grid, Divider, Table, TableBody, TableCell, 
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
          <Typography variant="h4" align="center" gutterBottom color="primary">
            Kerala Comprehensive Social Security & Welfare Policy (KCSSWP)
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Policy Objective */}
          <Typography variant="h5" gutterBottom color="secondary">
            1. Policy Objective
          </Typography>
          <Typography variant="body1" align="justify" paragraph>
            The **Kerala Comprehensive Social Security & Welfare Policy (KCSSWP)** aims to establish a **universal social security system**
            that ensures a **high standard of living** for all citizens. This policy focuses on **economic stability, social equity, and well-being**
            by providing **financial security, housing, healthcare, and employment support** to vulnerable populations.
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Key Components */}
          <Typography variant="h5" gutterBottom color="secondary">
            2. Key Components of the Policy
          </Typography>

          {/* Universal Basic Income (UBI) */}
          <Typography variant="h6" color="primary">
            A. Universal Basic Income (UBI) for All Citizens
          </Typography>
          <Typography variant="body2">
            ✅ Every adult citizen of Kerala will receive a **minimum monthly income** of **₹10,000**.  
            ✅ Special allowances for **senior citizens, disabled individuals, and single mothers**.  
            ✅ UBI payments will be **directly transferred to Aadhaar-linked bank accounts**.
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* Affordable Housing */}
          <Typography variant="h6" color="primary">
            B. Affordable Housing for Every Family
          </Typography>
          <Typography variant="body2">
            ✅ Expansion of the **Kerala Smart Housing Program (KSHP)** for **affordable, climate-resilient housing**.  
            ✅ Rent support for **low-income families** to ensure no citizen is homeless.  
            ✅ Mandatory inclusion of **low-income housing in private real estate projects**.
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* Universal Healthcare */}
          <Typography variant="h6" color="primary">
            C. Universal Healthcare & Insurance Coverage
          </Typography>
          <Typography variant="body2">
            ✅ **100% free healthcare** under **Kerala Health Assurance Scheme**.  
            ✅ Free **medicines and emergency care** for all citizens.  
            ✅ Expansion of **AI-driven preventive healthcare and telemedicine services**.  
            ✅ Special **elderly and disability care centers** in each district.
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* Employment Guarantee */}
          <Typography variant="h6" color="primary">
            D. Employment Guarantee & Skill Development
          </Typography>
          <Typography variant="body2">
            ✅ **Guaranteed job opportunities** under **Kerala Employment Security Scheme (KESS)**.  
            ✅ Monthly unemployment benefits of **₹8,000** for job-seekers.  
            ✅ Expansion of **AI-based job-matching platforms**.  
            ✅ Free skill development and vocational training programs in **IT, healthcare, and green energy** sectors.
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* Pension & Financial Security */}
          <Typography variant="h6" color="primary">
            E. Pension & Financial Security for Senior Citizens
          </Typography>
          <Typography variant="body2">
            ✅ **Minimum pension** increased to **₹15,000/month**.  
            ✅ Free **health checkups, transport, and housing support** for elderly citizens.  
            ✅ Introduction of **Senior Citizen Employment Programs** for those willing to work part-time.
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Regulation & Welfare of Guest Workers */}
          <Typography variant="h5" gutterBottom color="secondary">
            3. Regulation & Welfare of Guest Workers
          </Typography>
          <Typography variant="body2">
            ✅ **Smart identity cards** for guest workers to monitor movement and ensure accountability.  
            ✅ **Controlled entry** of guest workers based on **labor demand**.  
            ✅ **Mandatory identity card carrying** to prevent illegal stays.  
            ✅ **Higher wages** and **free hygienic accommodation** for guest workers.  
            ✅ **Skill development programs** to integrate them into Kerala’s workforce efficiently.
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Funding the Policy with Table */}
          <Typography variant="h5" gutterBottom color="secondary">
            4. Revenue Model & Funding
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
                  <TableCell>Public-Private Partnership (PPP) in Social Security</TableCell>
                  <TableCell align="right">5,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>State Budget Allocation</TableCell>
                  <TableCell align="right">20,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Efficiency Savings via AI-based Governance</TableCell>
                  <TableCell align="right">5,000</TableCell>
                </TableRow>
                <TableRow sx={{ backgroundColor: "#e3f2fd" }}>
                  <TableCell><strong>Total Estimated Revenue</strong></TableCell>
                  <TableCell align="right"><strong>₹47,000 crore/year</strong></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Divider sx={{ my: 3 }} />

          {/* Expected Benefits */}
          <Typography variant="h5" gutterBottom color="secondary">
            5. Expected Benefits
          </Typography>
          <Typography variant="body2">
            ✅ Elimination of **poverty and financial insecurity** in Kerala.  
            ✅ Guaranteed **housing, healthcare, and employment** for all citizens.  
            ✅ Effective **regulation of guest workers** to ensure law and order.  
            ✅ Kerala will become the **benchmark state for social welfare and human development**.
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
