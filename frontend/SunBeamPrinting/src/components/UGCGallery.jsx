import { Box, Container, Typography, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";

const images = [
  {
    src: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?w=600&h=400&fit=crop&crop=center",
    account: "https://instagram.com/user1",
    handle: "@user1",
  },
  {
    src: "https://images.unsplash.com/photo-1509043759401-136742328bb3?w=600&h=400&fit=crop&crop=center",
    account: "https://instagram.com/user2",
    handle: "@user2",
  },
  {
    src: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=600&h=400&fit=crop&crop=center",
    account: "https://instagram.com/user3",
    handle: "@user3",
  },
  {
    src: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&h=400&fit=crop&crop=center",
    account: "https://instagram.com/user4",
    handle: "@user4",
  },
  {
    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop&crop=center",
    account: "https://instagram.com/user5",
    handle: "@user5",
  }
];

export default function UGCGallery() {
  return (
    <Box sx={{ py: 6, bgcolor: "#051121" }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: 3 }}>
          <Typography
            variant="h6"
            component="h3"
            sx={{ fontWeight: 700, color: "#fbfbf9e8", mb: 1 }}
          >
            Made by you, #SunBeamPress
          </Typography>
          <Typography  
            variant="subtitle2"
            sx={{ color: "#fbfbf9e8" }}
          >
            We love to see your custom creations. Post a photo on social media and tag{" "}
            <strong>@SunBeamPress</strong> with <strong>#MadeWithSunBeam</strong> for a
            chance to be featured here.
          </Typography>
        </Box>  
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(5, 1fr)",
            },
            gap: 2,
          }}
        >
          {images.map((item, idx) => (
            <Box
              key={idx}
              sx={{
                position: "relative",
                borderRadius: 2,
                overflow: "hidden",
                cursor: "pointer",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
                },
                "&:hover .overlay": {
                  opacity: 1,
                },
              }}
            >
              {/* Image */}
              <Box
                component="img"
                src={item.src}
                alt={`Customer project ${idx + 1}`}
                sx={{ width: "100%", height: 220, objectFit: "cover", display: "block" }}
              />

              {/* Overlay */}
              <Box
                className="overlay"
                sx={{
                  position: "absolute",
                  inset: 0,
                  bgcolor: "rgba(0,0,0,0.4)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  color: "white",
                  textAlign: "center",
                  p: 1,
                }}
              >
                <IconButton
                  component="a"
                  href={item.account}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "white", mb: 1 }}
                >
                  <InstagramIcon sx={{ fontSize: 36 }} />
                </IconButton>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {item.handle}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
