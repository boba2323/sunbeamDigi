import { Box, Button, Container, Stack, TextField, Typography } from "@mui/material";
import heroImage from "../assets/pictures/hero.png";

export default function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        color: "#fff",
        py: { xs: 8, md: 12 },
        backgroundImage:
          "url(heroImage)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >  
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(0,0,0,0.45)", 
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Stack spacing={3} sx={{ maxWidth: 720 }}>
          <Typography variant="h3" fontWeight={700}>
            Everything you need to promote your business
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }}> 
            Business cards, signage, packaging, apparel, stickers and more — designed your way.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              placeholder="Search products (e.g., business cards)"
              size="medium"
              sx={{
                bgcolor: "#fff",
                borderRadius: 1,
                flex: 1,
                input: { py: 1.2 },
              }}
            />
            <Button variant="contained" color="secondary" size="large">
              Browse Deals 
            </Button>
            <Button variant="outlined" color="inherit" size="large">
              Start Designing Start 
            </Button>
          </Stack>
          <Typography variant="body2" sx={{ opacity: 0.9 }}>
            Trusted by thousands of small businesses.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}