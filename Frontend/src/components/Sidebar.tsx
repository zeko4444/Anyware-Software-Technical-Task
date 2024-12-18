import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Typography,
  IconButton,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ScheduleIcon from "@mui/icons-material/Schedule";
import SchoolIcon from "@mui/icons-material/School";
import GradeIcon from "@mui/icons-material/Grade";
import BarChartIcon from "@mui/icons-material/BarChart";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";

export interface SidebarProps {
  open: boolean;
  handleDrawerToggle: () => void;
}
const drawerWidth = 240;

const Sidebar: React.FC<SidebarProps> = ({ open, handleDrawerToggle }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [activeItem, setActiveItem] = useState("Dashboard");

  const menuItems = [
    { text: "Dashboard", icon: <HomeIcon /> },
    { text: "Schedule", icon: <ScheduleIcon /> },
    { text: "Courses", icon: <SchoolIcon /> },
    { text: "Gradebook", icon: <GradeIcon /> },
    { text: "Performance", icon: <BarChartIcon /> },
    { text: "Announcements", icon: <AnnouncementIcon /> },
  ];

  return (
    <Drawer
      variant={isSmallScreen ? "temporary" : "permanent"}
      open={open}
      onClose={handleDrawerToggle}
      sx={{
        width: open ? drawerWidth : 60,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: open ? drawerWidth : 60,
          boxSizing: "border-box",
          backgroundColor: "#178596",
          color: "white",
          transition: "width 0.3s ease",
        },
      }}
      ModalProps={{
        keepMounted: true,
      }}
    >
      {/* Header with Coligo and Arrow */}
      <Box
        sx={{
          display: "flex",
          justifyContent: open ? "space-between" : "center",
          alignItems: "center",
          padding: "0.5rem 1rem",

          color: "white",

          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            flexGrow: 1,
            whiteSpace: "nowrap",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          {open && "Coligo"}
        </Typography>
        <IconButton onClick={handleDrawerToggle} sx={{ color: "white" }}>
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </Box>

      {/* Menu Items */}
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => setActiveItem(item.text)}
            sx={{
              marginTop: "1rem",
              backgroundColor:
                activeItem === item.text ? "white" : "transparent",
              color: activeItem === item.text ? "#178596" : "inherit",
              "&:hover": {
                backgroundColor: "white",
                color: "#178596",
                cursor: "pointer",
              },
            }}
          >
            <ListItemIcon
              sx={{
                color: activeItem === item.text ? "#178596" : "inherit",
                minWidth: "0",
                paddingRight: "10px",
              }}
            >
              {item.icon}
            </ListItemIcon>
            {open && <Typography variant="body1">{item.text}</Typography>}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
