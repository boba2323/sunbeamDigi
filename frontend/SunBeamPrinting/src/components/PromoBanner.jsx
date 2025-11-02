import { Box, Button, Container, Stack, Typography } from "@mui/material";

export default function PromoBanner() {
  return (
    <Box
      sx={{
        bgcolor: (t) => (t.palette.mode === "light" ? "#F3F6F9" : "background.paper"),
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack spacing={1}>
            <Typography variant="h5" fontWeight={700}>
              New year, new deals
            </Typography>
            <Typography color="text.secondary">
              Save on business essentials — limited time offers.
            </Typography>
          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button variant="contained">Shop Deals</Button>
            <Button variant="outlined">See All Products</Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}