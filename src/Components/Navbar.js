import React from "react";
import Box from "@mui/material/Box";
import { NavLink } from "reactstrap";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
function Navbar() {
  return (
    <>
      <Box
        sx={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "row",
          gap: "60px",
          marginLeft: "5%",
          marginRight: "5%",
          alignItems: "center",
        }}
      >
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Box sx={{ height: "109px", width: "191px" }}>
            <img
              style={{ height: "109px", width: "191px" }}
              src="https://veganessentials.com/cdn/shop/files/vegan-essentials-logo.png?v=1667509180"
              alt="logo"
            />{" "}
          </Box>
          <Box sx={{ width: "497px" }}>
            <ul
              style={{
                display: "flex",
                flexDirection: "row",
                justifyItems: "center",
                alignItems: "center",
                marginTop: "20px",
                listStyleType: "none",
                gap: "20px",
                fontSize: "15px",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              <li>
                <NavLink href="#">Home</NavLink>
              </li>
              <li>
                <NavLink href="#">Shop By Category</NavLink>
              </li>
              <li>
                <NavLink href="#">Veganuary</NavLink>
              </li>
              <li>
                <NavLink href="#">About us</NavLink>
              </li>
              <li>
                <NavLink href="#">Contact us</NavLink>
              </li>
            </ul>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "40px",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <input
                type="text"
                placeholder="Search Product, Brand, etc.."
                style={{
                  borderRadius: "30px 0 0 30px", // Apply rounded corners to the left side
                  border: "1px solid #ccc", // Add a border for visual separation
                  padding: "10px 10px 10px 20px", // Adjust padding for better appearance
                  width: "350px",
                  outline: "none", // Remove outline on focus
                  fontSize: 15,
                }}
              />
              <button
                style={{
                  borderRadius: "0 30px 30px 0", // Apply rounded corners to the right side
                  backgroundColor: "#369e45",
                  border: "1px solid #369e45",
                  padding: "10px", // Adjust padding for better appearance
                  outline: "none", // Remove outline on focus
                  cursor: "pointer", // Add pointer cursor on hover
                  color: "#ffff",
                  width: "65px",
                }}
              >
                <SearchOutlinedIcon></SearchOutlinedIcon>
              </button>
            </div>
          </Box>
          <Box>
            <IconButton aria-label="user">
              <PersonOutlineOutlinedIcon></PersonOutlineOutlinedIcon>
            </IconButton>
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={4} color="secondary" sx={{}}>
                <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
              </StyledBadge>
            </IconButton>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
