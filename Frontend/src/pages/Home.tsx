import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../authSlice";
import { Button, Typography, Box, TextField } from "@mui/material";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State to hold form values and validation errors
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ username: "", password: "" });

  const handleLogin = () => {
    // Validate form fields
    if (!username || !password) {
      setError({
        username: username ? "" : "Username is required",
        password: password ? "" : "Password is required",
      });
      return;
    }

    if (password.length < 6) {
      setError((prev) => ({
        ...prev,
        password: "Password should be at least 6 characters",
      }));
      return;
    }

    // Dispatch login action if validation passes
    dispatch(login());
    navigate("/dashboard");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "91vh",
        backgroundColor: "#f4f4f4",
        flexDirection: "column",
        textAlign: "center",
        padding: 3,
      }}
    >
      <Typography variant="h3" sx={{ marginBottom: 3, color: "#178596" }}>
        Welcome to the Home Page
      </Typography>

      <Box sx={{ width: "100%", maxWidth: 400 }}>
        {/* Username Input */}
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 2 }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          error={!!error.username}
          helperText={error.username}
        />

        {/* Password Input */}
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          sx={{ marginBottom: 2 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!error.password}
          helperText={error.password}
        />

        {/* Login Button */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            fontSize: "16px",

            borderRadius: "5px",
            backgroundColor: "#178596",
            color: "white",
            "&:hover": {
              backgroundColor: "#146a75",
            },
          }}
          onClick={handleLogin}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
