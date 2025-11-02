import { Box, Toolbar } from "@mui/material";
import Header from "../components/Header";
 

export default function MainLayout({ children }) {

  return (
    <Box sx={{ display: "flex", width: "100vw", height: "100vh" }}>
      {/* Main Content Wrapper */}
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <Header />
        {/* Main content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: "100%",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Box sx={{ height: 80 }} />
          {children}
        </Box>
      </Box>
    </Box>
  );
}
