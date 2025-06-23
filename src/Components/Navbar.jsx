import { useState } from "react";
import logo from "/images/logo.svg";
import { pages } from "./Home/links";
import PersonIcon from "@mui/icons-material/Person";
import { RiMenuFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import LogInDialog from "./LogInDialog";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  CircularProgress,
} from "@mui/material";
import { logout } from "../Features/AuthSlice";
import { toast } from "react-toastify";
import { auth } from "../Firebase/firebase";
import { useLocation, Link } from "react-router-dom";

const settings = ["Profile", "Account", "Dashboard", "Logout"];
const Navbar = () => {
  const { user, checkingAuth } = useSelector((state) => state.auth);
  const [openModal, setOpenModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const dispatch = useDispatch();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogInClick = () => {
    setOpenModal(true);
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      toast.success("Logged out successfully!");
      dispatch(logout());
      handleCloseUserMenu();
    } catch {
      toast.error("Logout failed!");
    }
  };

  const handleSettingsClick = () => {
    toast.info("Coming soon!");
    handleCloseUserMenu();
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <img src={logo} alt="Beach Resort Logo" className="my-4 h-8 mx-auto" />
      <Divider />
      <List>
        {pages.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              LinkComponent={Link}
              to={item.url}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "#e2e2e2" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters variant="dense">
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 0.5, display: { md: "none" } }}
            >
              <RiMenuFill />
            </IconButton>
            <img src={logo} alt="Beach Resort Logo" className="h-7 sm:h-8" />

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }} />
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, ml: 4 }}>
              <List className="flex gap-8">
                {pages.map((item) => (
                  <ListItem key={item.id} disablePadding>
                    <ListItemButton
                      LinkComponent={Link}
                      to={item.url}
                      disableGutters
                      disableRipple
                      sx={{
                        textAlign: "center",
                        color: location.pathname === item.url ? 'primary.main' : 'black',
                        fontWeight: location.pathname === item.url ? 700 : 400,
                        '&:hover': {
                          backgroundColor: 'transparent',
                          color: 'primary.main',
                        },
                      }}
                    >
                      <ListItemText primary={item.name} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
            {/* showing loading state for checking auth */}
            {checkingAuth ? (
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 40 }}>
                <CircularProgress size={28} thickness={4} />
              </Box>
            ) : user ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt={user.name}
                      sx={{ width: 36, height: 36, fontSize: 18 }}
                    >
                      {user.name ? user.name.charAt(0).toUpperCase() : ''}
                    </Avatar>
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem
                      key={setting}
                      onClick={setting === "Logout" ? handleLogout : handleSettingsClick}
                    >
                      <Typography sx={{ textAlign: "center" }}>
                        {setting}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            ) : (
              <Box>
                <Button
                  variant="contained"
                  startIcon={<PersonIcon />}
                  className="!text-sm md:!text-base"
                  onClick={handleLogInClick}
                >
                  <span className="mt-1 -ml-1 capitalize">Sign In</span>
                </Button>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: '250px',
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      <LogInDialog
        isSignUp={isSignUp}
        openModal={openModal}
        setOpenModal={setOpenModal}
        setIsSignUp={setIsSignUp}
      />
    </>
  );
};

export default Navbar;
