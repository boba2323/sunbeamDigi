import { useState, useRef } from "react";
import { 
  Box, 
  Container, 
  Typography, 
  IconButton,
  Avatar
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const categories = [
  {
    id: 1,
    name: "Any Paper Printing",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=150&h=150&fit=crop&crop=center",
    color: "#FF6B35"
  },
  {  
    id: 2,
    name: "Books",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=150&h=150&fit=crop&crop=center",
    color: "#4CAF50"
  },
  {
    id: 3,
    name: "Magazines",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=150&h=150&fit=crop&crop=center",
    color: "#FF9800"
  },
  {
    id: 4,
    name: "Posters",
    image: "https://images.unsplash.com/photo-1500336624523-d727130c3328?w=150&h=150&fit=crop&crop=center",
    color: "#9C27B0"
  },
  {
    id: 5,
    name: "Binding Services",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=150&h=150&fit=crop&crop=center",
    color: "#795548"
  },
  {  
    id: 6,
    name: "Laminating",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=150&h=150&fit=crop&crop=center",
    color: "#2196F3"
  },
  { 
    id: 7,
    name: "Digital Printing",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=150&h=150&fit=crop&crop=center",
    color: "#E91E63"
  }
]; 
 
export default function CategoryExploreCarousel() { 
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef(null);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };
          
  return (
    <Box sx={{ py: 6, bgcolor: "#061727" }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h6" 
          component="h2" 
          sx={{ 
            mb: 4, 
            fontWeight: 700,
            color: "#fbfbf9e8",
            textAlign: "center"
          }}     
        >
          Explore all categories     
        </Typography> 
                                                        
        <Box sx={{ position: "relative" }}> 
          {/* Navigation Buttons */} 
          {canScrollLeft && ( 
            <IconButton 
              onClick={() => scroll('left')}    
              sx={{
                position: "absolute",
                left: -30,
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: "grey.200",
                color: "#fbfbf9e8",
                zIndex: 2,
                "&:hover": {
                  bgcolor: "grey.300"
                }
              }}
            >
              <ChevronLeft />
            </IconButton>
          )}

          {/* Carousel Container */}
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
              pb: 2,
              justifyContent: "center"
            }}
          >
            {categories.map((category) => (
              <Box
                key={category.id}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  minWidth: 140,
                  cursor: "pointer",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "translateY(-4px)"
                  }
                }}
              >
                <Avatar
                  src={category.image}
                  sx={{
                    width: 100,
                    height: 100,
                    mb: 2,
                    bgcolor: category.color,
                    border: "3px solid white",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: "center",
                    fontWeight: 500,
                    fontSize: "0.875rem",
                    lineHeight: 1.2,
                    maxWidth: 120,
                    color: "#fbfbf9e8"
                  }}
                >
                  {category.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

