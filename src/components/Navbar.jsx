"use client"
import { Link, useLocation } from "react-router-dom"
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Box,
  useMediaQuery,
  useTheme,
  InputBase,
  Badge,
  Button,
} from "@mui/material"
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  Mail as MailIcon,
  Home as HomeIcon,
  TrendingUp as TrendingUpIcon,
  People as PeopleIcon,
} from "@mui/icons-material"
import { styled, alpha } from "@mui/material/styles"

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}))

const NavButton = styled(Button)(({ theme }) => ({
  color: "white",
  textTransform: "none",
  fontWeight: "bold",
  marginRight: theme.spacing(1),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.1),
  },
}))

function Navbar({ handleDrawerToggle }) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const isMedium = useMediaQuery(theme.breakpoints.down("md"))
  const location = useLocation()

  // Determine which tab is active based on current path
  const getActiveTab = () => {
    const path = location.pathname
    if (path === "/" || path === "/feed") return 0
    if (path === "/trending-posts") return 1
    if (path === "/top-users") return 2
    return 0
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: "none", sm: "block" }, fontWeight: "bold", mr: 3 }}
        >
          SocialFeed
        </Typography>

        {/* Navigation Links - Hide on mobile, show on tablet and up */}
        {!isMobile && (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <NavButton
              component={Link}
              to="/"
              startIcon={<HomeIcon />}
              variant={getActiveTab() === 0 ? "contained" : "text"}
              sx={{
                backgroundColor: getActiveTab() === 0 ? alpha(theme.palette.common.white, 0.15) : "transparent",
                minWidth: isMedium ? "auto" : 100,
              }}
            >
              {!isMedium && "Feed"}
            </NavButton>

            <NavButton
              component={Link}
              to="/trending-posts"
              startIcon={<TrendingUpIcon />}
              variant={getActiveTab() === 1 ? "contained" : "text"}
              sx={{
                backgroundColor: getActiveTab() === 1 ? alpha(theme.palette.common.white, 0.15) : "transparent",
                minWidth: isMedium ? "auto" : 100,
              }}
            >
              {!isMedium && "Trending"}
            </NavButton>

            <NavButton
              component={Link}
              to="/top-users"
              startIcon={<PeopleIcon />}
              variant={getActiveTab() === 2 ? "contained" : "text"}
              sx={{
                backgroundColor: getActiveTab() === 2 ? alpha(theme.palette.common.white, 0.15) : "transparent",
                minWidth: isMedium ? "auto" : 100,
              }}
            >
              {!isMedium && "Top Users"}
            </NavButton>
          </Box>
        )}

        <Search sx={{ ml: isMobile ? 0 : 2 }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
        </Search>

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: "flex" }}>
          <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton size="large" edge="end" aria-label="account of current user" aria-haspopup="true" color="inherit">
            <Avatar
              alt="User"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar

