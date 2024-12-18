import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  InputBase,
  Avatar,
  Badge,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../authSlice";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  handleDrawerToggle: () => void;
  isSmallScreen: boolean;
  toggleLanguage: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  handleDrawerToggle,
  isSmallScreen,
  toggleLanguage,
}) => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    console.log("User logged out");
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        color: "#178596",
        backgroundColor: "white",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {isSmallScreen && (
          <IconButton onClick={handleDrawerToggle} sx={{ color: "#178596" }}>
            <MenuIcon />
          </IconButton>
        )}

        <Typography variant="h6" noWrap>
          Welcome Ahmed
        </Typography>
        <Button
          onClick={toggleLanguage}
          variant="outlined"
          sx={{ backgroundColor: "#178596", color: "white" }}
        >
          {i18n.language === "en" ? "العربية" : "English"}
        </Button>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f0f0f0",
              borderRadius: 1,
              p: 0.5,
            }}
          >
            <IconButton sx={{ p: 1, color: "#178596" }}>
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Box>

          <IconButton sx={{ color: "#178596", mx: 1 }}>
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <IconButton sx={{ color: "#178596", mx: 1 }}>
            <Badge badgeContent={2} color="error">
              <MessageIcon />
            </Badge>
          </IconButton>

          <Avatar
            alt="User Avatar"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 40, height: 40 }}
            onClick={handleAvatarClick}
          />

          {/* Menu for logout */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
