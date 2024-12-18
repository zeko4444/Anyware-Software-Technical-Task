import { useState, useEffect } from "react";
import { Box, CssBaseline, useMediaQuery, useTheme } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import MainContent from "../components/MainContent";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const { i18n } = useTranslation();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(!isSmallScreen);

  useEffect(() => {
    if (isSmallScreen) {
      setOpen(false);
    }
  }, [isSmallScreen]);

  const handleDrawerToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <CssBaseline />
      <Sidebar open={open} handleDrawerToggle={handleDrawerToggle} />
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Navbar
          toggleLanguage={toggleLanguage}
          handleDrawerToggle={handleDrawerToggle}
          isSmallScreen={isSmallScreen}
        />
        <MainContent />
      </Box>
    </Box>
  );
};

export default Dashboard;
