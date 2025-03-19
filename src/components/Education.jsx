import { 
  Card, CardContent, Typography, Button, 
  Container, Box, Grid, Divider, Table, TableBody, TableCell, 
  TableContainer, TableHead, TableRow, Paper 
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Education = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <Container maxWidth="md">
      {/* Main Card for Education Policy */}
      <Card sx={{ mt: 6, p: 4, boxShadow: 4, borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom color="primary">
            Kerala Education Renaissance Policy (KERP)
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Policy Objective */}
          <Typography variant="h5" gutterBottom color="secondary">
            1. Policy Objective
          </Typography>
          <Typography variant="body1" align="justify" paragraph>
            The **Kerala Education Renaissance Policy (KERP)** aims to transform Kerala into a **global leader in education**
            by making teaching the **highest-paid profession**, implementing **world-class educational standards**, and
            integrating **AI-driven smart learning systems**.
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Key Components */}
          <Typography variant="h5" gutterBottom color="secondary">
            2. Key Components of the Policy
          </Typography>

          {/* Salary & Benefits for Teachers in Table */}
          <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
            A. Salary & Benefits for Teachers
          </Typography>
          <TableContainer component={Paper} sx={{ mt: 2, mb: 3 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                  <TableCell><strong>Designation</strong></TableCell>
                  <TableCell align="right"><strong>Minimum Salary (₹/month)</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Primary School Teacher</TableCell>
                  <TableCell align="right">1,50,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>High School Teacher</TableCell>
                  <TableCell align="right">2,00,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>College Professors & Researchers</TableCell>
                  <TableCell align="right">3,00,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Principal/Head of Institution</TableCell>
                  <TableCell align="right">3,50,000 - 5,00,000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          {/* Additional Benefits */}
          <Typography variant="h6" color="primary">Additional Benefits:</Typography>
          <Typography variant="body2">
            ✅ **Annual bonuses** based on student performance  
            ✅ **Housing, transport, and medical allowances**  
            ✅ **Pension scheme** ensuring 80% of last drawn salary  
            ✅ **Free higher education** for teachers' children  
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Revenue Model with Table */}
          <Typography variant="h5" gutterBottom color="secondary">
            3. Revenue Model & Funding
          </Typography>
          <Typography variant="body1" paragraph>
            The **Kerala Education Renaissance Policy (KERP)** will be **self-sustaining** through the following funding sources:
          </Typography>

          {/* Revenue Model Table */}
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
                  <TableCell>Education Cess (2% on Kerala SGST)</TableCell>
                  <TableCell align="right">10,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Corporate Education Sponsorship</TableCell>
                  <TableCell align="right">5,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Public-Private Partnership (PPP) with Global EdTech Firms</TableCell>
                  <TableCell align="right">7,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>State Budget Allocation for Education</TableCell>
                  <TableCell align="right">20,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Efficiency Savings via AI & Digital Transformation</TableCell>
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
            4. Expected Benefits
          </Typography>
          <Typography variant="body2">
            ✅ Teachers will be **highest-paid professionals**, attracting top talent  
            ✅ Kerala’s education system will **match global standards**  
            ✅ AI-based learning will create **personalized, high-quality education** for every student  
            ✅ Kerala will become **India’s most skilled workforce hub**, boosting economic growth  
            ✅ **More international students** will seek education in Kerala, generating revenue  
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Implementation Roadmap */}
          <Typography variant="h5" gutterBottom color="secondary">
            5. Implementation Roadmap
          </Typography>
          <Typography variant="body2">
            ✅ **Year 1-2:** Increase teacher salaries, set up AI-driven classrooms, launch international training programs  
            ✅ **Year 3-4:** Establish industry-academic partnerships, implement new evaluation systems, AI-based monitoring  
            ✅ **Year 5:** Kerala’s education system benchmarked with global models  
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

export default Education;
