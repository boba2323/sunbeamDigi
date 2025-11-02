import {
    Box,
    Container,
    Grid,
    Stack,
    Typography,
    Link,
    Divider,
    IconButton,
  } from "@mui/material";
  import FacebookIcon from "@mui/icons-material/Facebook";
  import TwitterIcon from "@mui/icons-material/Twitter";
  import InstagramIcon from "@mui/icons-material/Instagram";
  import PinterestIcon from "@mui/icons-material/Pinterest";
  
  const footerLinks = {
    "Let Us Help": [
      "My Account",
      "Shipping",
      "Contact & Support", 
      "All Products",
      "Ideas & Advice",
      "Reseller Program",
      "Accessibility",
    ],
    "Our Company": [
      "About Us",
      "For Investors",
      "For Media",
    ],
  };
  
  const socialLinks = [
    { icon: <FacebookIcon />, href: "#" },
    { icon: <TwitterIcon />, href: "#" },
    { icon: <InstagramIcon />, href: "#" },
    { icon: <PinterestIcon />, href: "#" },
  ];
  
  export default function Footer() {
    return (
      <Box component="footer" sx={{ bgcolor: "primary.dark", color: "#fbfbf9e8", backgroundColor: "#051121" }}>
        {/* Main Footer */}
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Grid container spacing={4}>
            {/* Intro Column */}
            <Grid item xs={12} md={4}>
              <Stack spacing={2}>
                <Typography variant="h6" fontWeight={700}>
                  You need it. We print it. You love it.
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Sun Beam Printing Press is here to help every step of the way.
                </Typography>
              </Stack>
            </Grid>
  
            {/* Links Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <Grid item xs={12} sm={6} md={2} key={title}>
                <Stack spacing={2}>
                  <Typography variant="subtitle1" fontWeight={600}>
                    {title}
                  </Typography>
                  <Stack spacing={1}>
                    {links.map((link) => (
                      <Link
                        key={link}
                        href="#"
                        color="inherit"
                        sx={{ 
                          textDecoration: "none",
                          "&:hover": { textDecoration: "underline" },
                          fontSize: "0.875rem",
                        }}
                      >
                        {link}
                      </Link>
                    ))}
                  </Stack>
                </Stack>
              </Grid>
            ))}
  
            {/* Trustpilot Column */}
            {/* <Grid item xs={12} sm={6} md={2}>
              <Stack spacing={2}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box
                    sx={{
                      width: 80,
                      height: 20,
                      bgcolor: "#00b67a",
                      borderRadius: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "white",
                    }}
                  >
                    Trustpilot
                  </Box>
                </Box>
                <Stack spacing={1}>
                  <Typography variant="body2">
                    ★★★★★ <span style={{ color: "#00b67a" }}>4.5</span>
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.8 }}>
                    TrustScore 4.5
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.8 }}>
                    4,606 reviews
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.8 }}>
                    Our customers rate us Excellent on Trustpilot
                  </Typography>
                </Stack>
              </Stack>
            </Grid> */}
          </Grid>
        </Container>
  
        <Divider sx={{ borderColor: "rgba(255,255,255,0.2)" }} />
  
        {/* Bottom Bar */}
        <Container maxWidth="lg" sx={{ py: 3 }}>
          <Grid container spacing={3} alignItems="center">
            {/* Left - Contact & Legal */}
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <Stack direction="row" spacing={3} flexWrap="wrap">
                  {["Home", "Privacy and Cookie Policy", "Terms and Conditions", "Legal Matters"].map((item) => (
                    <Link
                      key={item}
                      href="#"
                      color="inherit"
                      sx={{ 
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" },
                        fontSize: "0.875rem",
                      }}
                    >
                      {item}
                    </Link>
                  ))}
                </Stack>
                <Typography variant="caption" sx={{ opacity: 0.8 }}>
                  A Printing press company © 2009-2025 Sun Beam Printing Press. All rights reserved.
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.8 }}>
                  Unless stated otherwise, prices are exclusive of delivery and product options.
                </Typography>
              </Stack>
            </Grid>
  
            {/* Middle - Payment Methods */}
            <Grid item xs={12} md={3}>
              <Stack direction="row" spacing={1} alignItems="center">
                {/* {["Mastercard", "PayPal", "Visa", "Pay"].map((method) => (
                  <Box
                    key={method}
                    sx={{
                      px: 1.5,
                      py: 0.5,
                      bgcolor: "rgba(255,255,255,0.1)",
                      borderRadius: 1,
                      fontSize: "0.75rem",
                      fontWeight: 500,
                    }}
                  >
                    {method}
                  </Box>
                ))} */}
              </Stack>
            </Grid>
  
            {/* Right - Social & Country */}
            <Grid item xs={12} md={3}>
              <Stack direction="row" spacing={2} justifyContent="flex-end" alignItems="center">
                {socialLinks.map((social, index) => (
                  <IconButton
                    key={index}
                    size="small"
                    sx={{ color: "white", "&:hover": { bgcolor: "rgba(255,255,255,0.1)" } }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    px: 2,
                    py: 1,
                    bgcolor: "rgba(255,255,255,0.1)",
                    borderRadius: 1,
                    cursor: "pointer",
                  }}
                >
                  <Typography variant="body2">in</Typography>
                  <Typography variant="body2">India</Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  }