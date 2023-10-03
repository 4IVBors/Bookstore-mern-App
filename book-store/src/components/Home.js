import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#3498db", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          component={Link}
          to="/books"
          sx={{ marginTop: 15, background: "orangered" }}
          variant="contained"
        >
          <Typography variant="h3">View All Books</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;
