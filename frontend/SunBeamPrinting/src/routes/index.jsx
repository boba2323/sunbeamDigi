import { lazy, Suspense } from "react";
import { CircularProgress, Box } from "@mui/material";

// Lazy load pages for better performance
const Home = lazy(() => import("../pages/Home"));
const Services = lazy(() => import("../pages/Services"));
const Products = lazy(() => import("../pages/Products"));
const Pricing = lazy(() => import("../pages/Pricing"));
const Orders = lazy(() => import("../pages/Orders"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));

// Loading component
const PageLoader = () => (
  <Box 
    display="flex" 
    justifyContent="center" 
    alignItems="center" 
    minHeight="200px"
  >
    <CircularProgress />
  </Box>
);

// Route configuration
export const routes = [
  {
    path: "/",
    element: <Home />,
    title: "Home",
    description: "Printing Press Dashboard - Home"
  },
  {
    path: "/services",
    element: <Services />,
    title: "Services",
    description: "Our printing services"
  },
  {
    path: "/products",
    element: <Products />,
    title: "Products", 
    description: "Browse our products"
  },
  {
    path: "/pricing",
    element: <Pricing />,
    title: "Pricing",
    description: "Pricing plans and packages"
  },
  {
    path: "/orders",
    element: <Orders />,
    title: "Orders",
    description: "Track your orders"
  },
  {
    path: "/about",
    element: <About />,
    title: "About",
    description: "About our company"
  },
  {
    path: "/contact",
    element: <Contact />,
    title: "Contact",
    description: "Get in touch with us"
  }
];

// Wrapper component for lazy loading
export const LazyRoute = ({ children }) => (
  <Suspense fallback={<PageLoader />}>
    {children}
  </Suspense>
);