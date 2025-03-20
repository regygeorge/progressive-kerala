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
                      The <strong>Kerala Smart Revenue & Economic Growth Policy (KSREGP)</strong> aims to 
                      <strong>digitally transform revenue generation</strong>, ensuring <strong>economic sustainability and public financial empowerment</strong>.
                      It introduces <strong>AI-powered taxation, state-run e-commerce, online trading, and insurance schemes</strong>, making Kerala financially independent.
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
                      ✅ AI-powered <strong>automated tax compliance & real-time monitoring</strong> to reduce tax evasion. <br/>
                      ✅ <strong>AI-driven GST and Income Tax collection system</strong> ensuring high accuracy & efficiency. <br/>
                      ✅ <strong>AI-assisted tax audits</strong> to detect fraud and ensure compliance.
                  </Typography>

                  <Divider sx={{ my: 2 }} />

                  {/* State-Run E-Commerce Platform */}
                  <Typography variant="h6" color="primary" fontWeight="bold">
                      B. Kerala State-Run E-Commerce Platform (KSECOM)
                  </Typography>
                  <Typography variant="body2">
                      ✅ <strong>A government-owned e-commerce platform</strong> that operates like <strong>Amazon</strong>, but with <strong>zero middlemen</strong>. <br/>
                      ✅ <strong>Kerala’s local businesses, farmers, and artisans</strong> can directly sell their products. <br/>
                      ✅ AI-driven <strong>dynamic pricing</strong> to ensure fair market rates for buyers and sellers. <br/>
                      ✅ <strong>Low transaction fees</strong> compared to private e-commerce platforms. <br/>
                      ✅ <strong>State logistics & warehousing system</strong> to ensure fast delivery and minimal cost.
                  </Typography>

                  <Divider sx={{ my: 2 }} />

                  {/* State-Run Online Trading System */}
                  <Typography variant="h6" color="primary" fontWeight="bold">
                      C. Kerala State-Run Online Trading System (KSTP)
                  </Typography>
                  <Typography variant="body2">
                      ✅ <strong>A stock, commodities, and crypto trading platform</strong> owned and operated by the state. <br/>
                      ✅ <strong>Zero brokerage fees</strong> for Kerala citizens investing in markets. <br/>
                      ✅ AI-driven <strong>trading insights and risk management tools</strong> for new investors. <br/>
                      ✅ State guarantees <strong>safe trading with regulatory oversight</strong>.
                  </Typography>

                  <Divider sx={{ my: 2 }} />

                  {/* State-Run Health & Motor Insurance */}
                  <Typography variant="h6" color="primary" fontWeight="bold">
                      D. Kerala State Health & Motor Insurance (KSHI & KMIP)
                  </Typography>
                  <Typography variant="body2">
                      ✅ <strong>Kerala Health Insurance (KSHI)</strong> providing <strong>universal health coverage</strong> for <strong>low-cost, high-quality healthcare</strong>. <br/>
                      ✅ <strong>Kerala Motor Insurance Program (KMIP)</strong> offering <strong>affordable vehicle insurance</strong>, lowering costs for drivers. <br/>
                      ✅ AI-powered <strong>fraud detection and premium optimization</strong> to ensure financial sustainability.
                  </Typography>

                  <Divider sx={{ my: 2 }} />

                  {/* AI-Powered Business Growth */}
                  <Typography variant="h6" color="primary" fontWeight="bold">
                      E. AI-Powered Business Growth & Industrial Expansion
                  </Typography>
                  <Typography variant="body2">
                      ✅ AI-driven <strong>business approvals & investment tracking</strong>. <br/>
                      ✅ <strong>Industry 4.0 policies</strong> attracting <strong>green energy, AI, and robotics companies</strong>. <br/>
                      ✅ <strong>Single-window clearance system</strong> for startups and foreign investors.
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
                      The <strong>Kerala Smart Revenue & Economic Growth Policy (KSREGP)</strong> introduces <strong>state-run e-commerce, 
                      online trading, and AI-driven tax collection</strong>, creating a <strong>highly profitable and self-sustaining economy</strong>. 
                      With an estimated <strong>₹60,000 crore annual revenue</strong>, Kerala will <strong>fund large-scale welfare projects, 
                      infrastructure upgrades, and economic expansion</strong>, making it <strong>India’s most financially self-reliant and 
                      technologically advanced state</strong>.
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
