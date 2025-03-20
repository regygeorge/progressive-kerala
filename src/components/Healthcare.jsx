import { 
    Card, CardContent, Typography, Button, 
    Container, Box, Divider, Table, TableBody, TableCell, 
    TableContainer, TableHead, TableRow, Paper 
  } from "@mui/material";
  import { useNavigate } from "react-router-dom";
  
  const Healthcare = () => {
    const navigate = useNavigate(); // Hook for navigation
  
    return (
      <Container maxWidth="md">
        {/* Main Card for Healthcare Policy */}
        <Card sx={{ mt: 6, p: 4, boxShadow: 4, borderRadius: 3 }}>
          <CardContent>
            <Typography variant="h4" align="center" gutterBottom color="primary" fontWeight="bold">
              Kerala Universal Health Excellence Policy (KUHEP)
            </Typography>
  
            <Divider sx={{ my: 3 }} />
  
            {/* Policy Objective */}
            <Typography variant="h5" gutterBottom color="secondary" fontWeight="bold">
              1. Policy Objective
            </Typography>
            <Typography variant="body1" align="justify" paragraph>
              The **Kerala Universal Health Excellence Policy (KUHEP)** aims to position Kerala as a **global leader in healthcare** by 
              ensuring **universal free healthcare**, attracting top medical talent with **high salaries**, and leveraging **advanced 
              medical technology**, such as **AI-powered diagnostics and robotic surgery**.
            </Typography>
  
            <Divider sx={{ my: 3 }} />
  
            {/* Key Components */}
            <Typography variant="h5" gutterBottom color="secondary" fontWeight="bold">
              2. Key Components of the Policy
            </Typography>
  
            {/* Salary & Benefits for Healthcare Professionals */}
            <Typography variant="h6" color="primary" fontWeight="bold">
              A. Salary & Benefits for Healthcare Professionals
            </Typography>
            <TableContainer component={Paper} sx={{ mt: 2, mb: 3 }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                    <TableCell><strong>Designation</strong></TableCell>
                    <TableCell align="right"><strong>Salary (₹/month)</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>General Physician</TableCell>
                    <TableCell align="right">2,00,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Specialist</TableCell>
                    <TableCell align="right">3,50,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Surgeon</TableCell>
                    <TableCell align="right">5,00,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Hospital Directors</TableCell>
                    <TableCell align="right">7,00,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Nurses & Paramedical Staff</TableCell>
                    <TableCell align="right">1,50,000</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Typography variant="body2">
              ✅ Housing, transport, and global research grants.  
              ✅ Annual performance-based bonuses.  
              ✅ Free higher education & international training for healthcare professionals.  
            </Typography>
  
            <Divider sx={{ my: 2 }} />
  
            {/* Universal Health Coverage */}
            <Typography variant="h6" color="primary" fontWeight="bold">
              B. Universal Health Coverage (UHC) for All Citizens
            </Typography>
            <Typography variant="body2">
              ✅ Introduction of **Kerala Health Assurance Card (KHAC)** for free medical facilities.  
              ✅ **100% free healthcare**, including **diagnostics, surgeries, and medicines**.  
              ✅ Public-private partnerships for free treatment in **private hospitals** when needed.  
            </Typography>
  
            <Divider sx={{ my: 2 }} />
  
            {/* AI & Robotics-Based Healthcare Revolution */}
            <Typography variant="h6" color="primary" fontWeight="bold">
              C. AI & Robotics-Based Healthcare Revolution
            </Typography>
            <Typography variant="body2">
              ✅ AI-powered **diagnostic centers** in every district.  
              ✅ **Robotic-assisted surgeries** for advanced treatments.  
              ✅ **Telemedicine access** for rural and remote areas.  
            </Typography>
  
            <Divider sx={{ my: 2 }} />
  
            {/* World-Class Infrastructure */}
            <Typography variant="h6" color="primary" fontWeight="bold">
              D. World-Class Infrastructure & Medical Research
            </Typography>
            <Typography variant="body2">
              ✅ Establishment of **Kerala Institute of Medical Excellence (KIME)**.  
              ✅ **State-of-the-art hospitals** meeting global accreditation standards.  
              ✅ Partnerships with **biotech, pharma, and medical tech companies**.  
            </Typography>
  
            <Divider sx={{ my: 2 }} />
  
            {/* Medical Tourism Hub */}
            <Typography variant="h6" color="primary" fontWeight="bold">
              E. Medical Tourism Hub & Foreign Patient Treatment
            </Typography>
            <Typography variant="body2">
              ✅ Position Kerala as **Asia’s No.1 Medical Tourism Hub**.  
              ✅ Special **international healthcare zones** for foreign patients.  
              ✅ Revenue from foreign patients to **subsidize free healthcare** for Keralites.  
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
                    <TableCell>Health Cess (1% on Kerala SGST)</TableCell>
                    <TableCell align="right">5,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Luxury Tax on Premium Healthcare for Foreign Patients</TableCell>
                    <TableCell align="right">3,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Global Medical Research Grants & AI-Health Tech Investments</TableCell>
                    <TableCell align="right">10,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Public-Private Partnerships with Hospitals & Pharma Companies</TableCell>
                    <TableCell align="right">7,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>State Budget Allocation for Health</TableCell>
                    <TableCell align="right">20,000</TableCell>
                  </TableRow>
                  <TableRow sx={{ backgroundColor: "#e3f2fd" }}>
                    <TableCell><strong>Total Estimated Revenue</strong></TableCell>
                    <TableCell align="right"><strong>₹50,000 crore/year</strong></TableCell>
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
              This policy will **transform Kerala into a world-class healthcare hub**, ensuring **premium-quality treatment** for all citizens 
              while making **doctors and medical professionals the highest-paid and most respected professionals** in the state.
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
  
  export default Healthcare;
  