import { Box, Container, Grid, Stack, Typography, Card, CardContent, Avatar, Rating, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useRef, useState, useEffect } from "react";

const testimonials = [
  {
    name: "User 1",
    title: "Book Author",
    // avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=200&h=200&fit=crop&crop=faces",
    rating: 4.5,
    text:
      "I got my novel printed with Any Paper Printing and the quality was fantastic. The binding and paper finish make it look truly professional.",
  },
  {
    name: "User 2",
    title: "Marketing Manager, Bright Ads",
    // avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces",
    rating: 5,
    text:
      "We needed posters and magazines for a product launch. The team delivered on time with excellent print quality and vibrant colors.",
  },
  {
    name: "User 3",
    title: "Owner, Nair Stationery",
    // avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200&h=200&fit=crop&crop=faces",
    rating: 5,
    text:
      "Their laminating and digital printing services are top-notch. Customers love the sharp finish, and their support team is always cooperative.",
  },
];

export default function FeedbackSection() {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollContainerRef = useRef(null);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  
      // calculate active index dynamically
      const card = scrollContainerRef.current.querySelector("div.MuiCard-root");
      if (card) {
        const cardWidth = card.offsetWidth + 32; // card width + gap
        const index = Math.round(scrollLeft / cardWidth);
        setActiveIndex(index);
      }
    }
  };
  
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.querySelector("div.MuiCard-root");
      if (card) {
        const cardWidth = card.offsetWidth + 32;
        const newScrollLeft =
          scrollContainerRef.current.scrollLeft +
          (direction === "left" ? -cardWidth : cardWidth);
        scrollContainerRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
      }
    }
  };
  
  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.querySelector("div.MuiCard-root");
      if (card) {
        const cardWidth = card.offsetWidth + 32;
        const newScrollLeft = index * cardWidth;
        scrollContainerRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    checkScrollButtons();
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 4, md: 8 },
        backgroundSize: "cover",
        bgcolor: "#061727",
        backgroundPosition: "center",
      }}
    > 
      <Box sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.35)" }} />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Grid container spacing={4} alignItems="stretch">
          <Grid item xs={12} md={5}></Grid>

          <Grid item xs={12} md={7}>
            <Box sx={{ position: "relative" }}>
              {canScrollLeft && (
                <IconButton
                  onClick={() => scroll("left")}
                  sx={{
                    position: "absolute",
                    left: -18,
                    top: "50%",
                    transform: "translateY(-50%)",
                    bgcolor: "white",
                    color: "grey.700",
                    zIndex: 2,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                    "&:hover": { bgcolor: "grey.50", boxShadow: 4 },
                  }}
                >
                  <ChevronLeftIcon />
                </IconButton>
              )}

              {canScrollRight && (
                <IconButton
                  onClick={() => scroll("right")}
                  sx={{
                    position: "absolute",
                    right: -18,
                    top: "50%",
                    transform: "translateY(-50%)",
                    bgcolor: "white",
                    color: "grey.700",
                    zIndex: 2,
                    boxShadow: 3,
                    "&:hover": { bgcolor: "grey.50", boxShadow: 4 },
                  }}
                >
                  <ChevronRightIcon />
                </IconButton>
              )}

              <Box
                ref={scrollContainerRef}
                onScroll={checkScrollButtons}
                sx={{
                  display: "flex",
                  gap: 4,
                  overflowX: "auto",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  "&::-webkit-scrollbar": { display: "none" },
                  px: 2,
                  pb: 1,
                }}
              >
                {testimonials.map((t, idx) => (
                  <Card
                    key={idx}
                    sx={{
                      minWidth: 450,
                      maxWidth: 450,
                      transition: "transform 0.2s, box-shadow 0.2s",
                      cursor: "pointer",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                      },
                    }}
                  >
                    <Box sx={{ p: 3 }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          mb: 2,
                        }}
                      >
                        <Avatar src={t.avatar} alt={t.name} />
                        <Stack>
                          <Typography variant="subtitle1" fontWeight={600}>
                            {t.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {t.name}
                          </Typography>
                        </Stack>
                      </Box>
                      <CardContent sx={{ p: 0 }}>
                        <Typography color="text.secondary" sx={{ mb: 1.5 }}>
                          {t.text}
                        </Typography>
                        <Rating precision={0.5} value={t.rating} readOnly size="small" />
                      </CardContent>
                    </Box>
                  </Card>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Pagination Dots */}
        <Stack direction="row" spacing={1} sx={{ mt: 3 }} justifyContent="center">
          {testimonials.map((_, i) => (
            <Box
              key={i}
              onClick={() => scrollToIndex(i)}
              sx={{
                width: activeIndex === i ? 12 : 8,
                height: activeIndex === i ? 12 : 8,
                borderRadius: "50%",
                bgcolor: activeIndex === i ? "primary.main" : "common.white",
                opacity: activeIndex === i ? 1 : 0.6,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
