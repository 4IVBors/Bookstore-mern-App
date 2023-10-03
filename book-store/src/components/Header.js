import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState(null);

  return (
    <div>
      <AppBar sx={{ backgroundColor: "#4CAF50" }} position="sticky">
        <Toolbar>
          <div style={{ flexGrow: 1 }}>
            <NavLink to="/Home" style={{ color: "white", textDecoration: "none" }}>
              <Typography>
                <LibraryBooksOutlinedIcon />
              </Typography>
            </NavLink>
          </div>
          <div style={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <Tabs
              textColor="inherit"
              indicatorColor="primary"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              <Tab
                component={NavLink}
                to="/add"
                label="Add Product"
                value="/add"
              />
              <Tab
                component={NavLink}
                to="/books"
                label="Books"
                value="/books"
              />
              <Tab
                component={NavLink}
                to="/about"
                label="About Us"
                value="/about"
              />
              <Tab
                component={NavLink}
                to="/"
                label="Logout"
                value="/Login"
              />
            </Tabs>
          </div>
          <div style={{ flexGrow: 1 }}></div> {/* Add this empty div to push the tabs to the center */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
