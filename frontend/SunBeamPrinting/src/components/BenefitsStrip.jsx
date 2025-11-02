import { Box, Container, Stack, Typography } from "@mui/material";

const items = [
  "Custom‑printed products",
  "Create with more confidence",
  "Live support",
];

export default function BenefitsStrip() {
  return (
    <Box sx={{ bgcolor: (t) => (t.palette.mode === "light" ? "#fafafa" : "background.default"), py: 2 }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: "column", md: "row" }} spacing={2} justifyContent="space-between">
          {items.map((t) => (
            <Typography key={t} variant="body2">{t}</Typography>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}