import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import {
  Home,
  Description,
  Inventory,
  MonetizationOn,
  ShoppingCart,
  Info,
  Phone,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const menuItems = [
  { text: "Home", icon: <Home />, path: "/" },
  { text: "Services", icon: <Description />, path: "/services" },
  { text: "Products", icon: <Inventory />, path: "/products" },
  { text: "Pricing", icon: <MonetizationOn />, path: "/pricing" },
  { text: "Orders", icon: <ShoppingCart />, path: "/orders" },
  { text: "About Us", icon: <Info />, path: "/about" },
  { text: "Contact", icon: <Phone />, path: "/contact" },
];

export default function Sidebar({ open }) {
  return (
    <Drawer variant="persistent" anchor="left" open={open}>
      <Box sx={{ width: 240 }}>
        <Typography variant="h6" sx={{ m: 2 }}>
          PrintPress
        </Typography>
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton component={Link} to={item.path}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
