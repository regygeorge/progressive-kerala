import { 
  Card, CardContent, Typography, Button, 
  Container, Box, Divider, Table, TableBody, TableCell, 
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
          <Typography variant="h4" align="center" gutterBottom color="primary" fontWeight="bold">
            Kerala Education Renaissance Policy (KERP)
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Policy Objective */}
          <Typography variant="h5" gutterBottom color="secondary" fontWeight="bold">
            1. Policy Objective
          </Typography>
          <Typography variant="body1" align="justify" paragraph>
            The <strong>Kerala Education Renaissance Policy (KERP)</strong> aims to transform Kerala into a 
            <strong>global leader in education</strong> by making teaching the 
            <strong>highest-paid profession</strong>, implementing <strong>world-class educational standards</strong>, 
            and integrating <strong>AI-driven smart learning systems</strong>.
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Key Components */}
          <Typography variant="h5" gutterBottom color="secondary" fontWeight="bold">
            2. Key Components of the Policy
          </Typography>

          {/* Salary & Benefits for Teachers in Table */}
          <Typography variant="h6" color="primary" fontWeight="bold">
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
          <Typography variant="h6" color="primary" fontWeight="bold">Additional Benefits:</Typography>
          <Typography variant="body2">
            ✅ <strong>Annual bonuses</strong> based on student performance <br />
            ✅ <strong>Housing, transport, and medical allowances</strong> <br />
            ✅ <strong>Pension scheme</strong> ensuring 80% of last drawn salary <br />
            ✅ <strong>Free higher education</strong> for teachers' children <br />
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Education Infrastructure & Curriculum Overhaul */}
          <Typography variant="h6" color="primary" fontWeight="bold">
            B. Education Infrastructure & Curriculum Overhaul
          </Typography>
          <Typography variant="body2">
            ✅ <strong>Smart Classrooms:</strong> AI-powered interactive learning environments in all schools.<br />
            ✅ <strong>Industry Collaboration:</strong> Students work on real-world projects with IT, medical, and finance companies.<br />
            ✅ <strong>No rote learning:</strong> 100% concept-based learning, replacing traditional exams with practical assessments and projects.<br />
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* AI & Robotics-Based Learning */}
          <Typography variant="h6" color="primary" fontWeight="bold">
            C. AI & Robotics-Based Learning
          </Typography>
          <Typography variant="body2">
            ✅ AI-driven personalized learning systems for every student.<br />
            ✅ AI tutors and automated evaluation tools.<br />
            ✅ Coding, robotics, and data science integrated from primary school.<br />
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* International Training & Faculty Development */}
          <Typography variant="h6" color="primary" fontWeight="bold">
            D. International Training & Faculty Development
          </Typography>
          <Typography variant="body2">
            ✅ <strong>Global Exchange Programs</strong> for teachers to train in the UK, US, Finland, and Singapore.<br />
            ✅ <strong>Mandatory Ph.D. or Advanced Degrees</strong> for college educators.<br />
            ✅ <strong>Continuous Training Programs</strong> in AI, industry trends, and pedagogical advancements.<br />
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
          <li>     ✅ Teachers will be <string>highest-paid professionals</string>, attracting top talent  </li>
          <li>    ✅ Kerala’s education system will <strong>match global standards</strong>  </li>
          <li>     ✅ AI-based learning will create <strong>personalized, high-quality education</strong> for every student  </li>
          <li>    ✅ Kerala will become <stromg>India’s most skilled workforce hub</stromg>, boosting economic growth  </li>
          <li>     ✅ <strong>More international students</strong> will seek education in Kerala, generating revenue  </li>
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Implementation Roadmap */}
          <Typography variant="h5" gutterBottom color="secondary">
            5. Implementation Roadmap
          </Typography>
          <Typography variant="body2">
           <li> ✅ <strong>Year 1-2:</strong> Increase teacher salaries, set up AI-driven classrooms, launch international training programs  </li>
           <li>   ✅ <stromg>Year 3-4:</stromg> Establish industry-academic partnerships, implement new evaluation systems, AI-based monitoring  </li>
           <li>    ✅ <strong>Year 5:</strong> Kerala’s education system benchmarked with global models  </li>
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
