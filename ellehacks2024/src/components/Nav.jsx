import { useState } from "react";
import group2 from "../assets/group2.svg";

import { AppBar } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

function Nav() {
//   const [anchorElNav, setAnchorElNav] = useState(null);
//   const [anchorElUser, setAnchorElUser] = useState(null);
//   const [currentPage, setCurrentPage] = useState("home");

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const handleOpenNavMenu = (event) => {
//     console.log(event.currentTarget);
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   const pages = ["Talk to Olly", "Daily Check In", "Progress", "Resources"];
//   const settings = ["Logout"];

//   return (
//     <div>
//       <AppBar position="static">
//         <Container maxWidth="xl">
//           <Toolbar disableGutters>
//             <img className="nav-logo" src={group2} alt="logo"></img>
//             <Typography
//               variant="h6"
//               noWrap
//               component="a"
//               href="#app-bar-with-responsive-menu"
//               sx={{
//                 mr: 2,
//                 display: { xs: "none", md: "flex" },
//                 fontFamily: "roboto",
//                 fontWeight: 500,
//                 // letterSpacing: ".3rem",
//                 color: "white",
//                 textDecoration: "none",
//               }}
//             >
//               Open Arms
//             </Typography>

//             <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//               <IconButton
//                 size="large"
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 onClick={handleOpenNavMenu}
//                 color="inherit"
//               >
//                 <MenuIcon />
//               </IconButton>
//               <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorElNav}
//                 anchorOrigin={{
//                   vertical: "bottom",
//                   horizontal: "left",
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: "top",
//                   horizontal: "left",
//                 }}
//                 open={Boolean(anchorElNav)}
//                 onClose={handleCloseNavMenu}
//                 sx={{
//                   display: { xs: "block", md: "none" },
//                 }}
//               >

                

//                 {/* {pages.map((page) => (
//                   <MenuItem key={page} onClick={handleCloseNavMenu}>
//                     <Typography
//                       textAlign="center"
//                       fontWeight="500"
//                       fontFamily="roboto"
//                     >
//                       {page}
//                     </Typography>
//                   </MenuItem>
//                 ))} */}
//               </Menu>
//             </Box>
//             {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
//             {/* <img src="../../assets/MacBook Air - 5.png" alt="logo"></img> */}
//             <Typography
//               variant="h5"
//               noWrap
//               component="a"
//               href="#app-bar-with-responsive-menu"
//               sx={{
//                 mr: 3,
//                 display: { xs: "flex", md: "none" },
//                 flexGrow: 1,
//                 fontFamily: "roboto",
//                 fontWeight: 500,
//                 // letterSpacing: ".3rem",
//                 color: "inherit",
//                 textDecoration: "none",
//               }}
//             >
//               Open Arms
//             </Typography>
//             <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//             <Typography
//               variant="h6"
//               noWrap
//               onClick={() => handlePageChange("home")}
//               sx={{
//                 mr: 3,
//                 display: { xs: "none", md: "flex" },
//                 fontFamily: "roboto",
//                 fontWeight: 500,
//                 color: currentPage === "home" ? "grey" : "white",
//                 cursor: "pointer",
//                 textDecoration: "none",
//               }}
//             >
//               Home
//             </Typography>
//             <Typography
//               variant="h6"
//               noWrap
//               onClick={() => handlePageChange("talk-to-olly")}
//               sx={{
//                 mr: 3,
//                 display: { xs: "none", md: "flex" },
//                 fontFamily: "roboto",
//                 fontWeight: 500,
//                 color: currentPage === "talk-to-olly" ? "grey" : "white",
//                 cursor: "pointer",
//                 textDecoration: "none",
//               }}
//             >
//               Talk To Olly
//             </Typography>
//             <Typography
//               variant="h6"
//               noWrap
//               onClick={() => handlePageChange("daily-check-in")}
//               sx={{
//                 mr: 3,
//                 display: { xs: "none", md: "flex" },
//                 fontFamily: "roboto",
//                 fontWeight: 500,
//                 color: currentPage === "daily-check-in" ? "grey" : "white",
//                 cursor: "pointer",
//                 textDecoration: "none",
//               }}
//             >
//               Daily Check In
//             </Typography>
//             <Typography
//               variant="h6"
//               noWrap
//               onClick={() => handlePageChange("progress")}
//               sx={{
//                 mr: 3,
//                 display: { xs: "none", md: "flex" },
//                 fontFamily: "roboto",
//                 fontWeight: 500,
//                 color: currentPage === "progress" ? "grey" : "white",
//                 cursor: "pointer",
//                 textDecoration: "none",
//               }}
//             >
//               Progress
//             </Typography>
//             <Typography
//               variant="h6"
//               noWrap
//               onClick={() => handlePageChange("resource-map")}
//               sx={{
//                 mr: 3,
//                 display: { xs: "none", md: "flex" },
//                 fontFamily: "roboto",
//                 fontWeight: 500,
//                 color: currentPage === "resource-map" ? "grey" : "white",
//                 cursor: "pointer",
//                 textDecoration: "none",
//               }}
//             >
//               Resource Map
//             </Typography>
//               {/* {pages.map((page) => (
//                 <Button
//                   key={page}
//                   onClick={handleCloseNavMenu}
//                   sx={{ my: 2, color: "white", display: "block" }}
//                 >
//                   {page}
//                 </Button>
//               ))} */}
//             </Box>

//             <Box sx={{ flexGrow: 0 }}>
//               <Tooltip title="Open settings">
//                 <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                   <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//                 </IconButton>
//               </Tooltip>
//               <Menu
//                 sx={{ mt: "45px" }}
//                 id="menu-appbar"
//                 anchorEl={anchorElUser}
//                 anchorOrigin={{
//                   vertical: "top",
//                   horizontal: "right",
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: "top",
//                   horizontal: "right",
//                 }}
//                 open={Boolean(anchorElUser)}
//                 onClose={handleCloseUserMenu}
//               >
//                 {settings.map((setting) => (
//                   <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                     <Typography textAlign="center">{setting}</Typography>
//                   </MenuItem>
//                 ))}
//               </Menu>
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>
//     </div>
//   );
}

export default Nav;
