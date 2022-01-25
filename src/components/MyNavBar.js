import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#cfc0c0",
    },
  },
});

export default function MyNavBar({
  setUser,
  setRegister,
  className,
  logged = false,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMyNews = () => {
    setAnchorEl(null);
    navigate("/");
  };
  const handleMyProfile = () => {
    setAnchorEl(null);
    navigate("/profile");
  };
  const handleMyStatistics = () => {
    setAnchorEl(null);
    navigate("/statistics");
  };
  const handleLogout = () => {
    setRegister(false);
    setUser(null);
  };

  const handleTitleClick = () => {
    navigate("/");
  };

  const label = "GNews";

  return (
    <Stack className={className} spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="fixed" color="primary">
          <Toolbar variant="dense">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1 }}
              onClick={handleTitleClick}
            >
              {label}
            </Typography>
            {logged && (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleMyNews}>My news</MenuItem>
                  <MenuItem onClick={handleMyProfile}>My profile</MenuItem>
                  <MenuItem onClick={handleMyStatistics}>
                    My Statistics
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Stack>
  );
}
