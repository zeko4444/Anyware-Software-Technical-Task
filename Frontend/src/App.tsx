import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import requireAuth from "./requireAuth";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const ProtectedDashboard = requireAuth(Dashboard);

const App: React.FC = () => {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<ProtectedDashboard />} />
          </Routes>
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
