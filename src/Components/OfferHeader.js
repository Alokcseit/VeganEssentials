import React from "react";
import Box from "@mui/material/Box";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import "./OfferHeader.css";
import Navbar from "./Navbar";
function OfferHeader() {
  return (
    <Box
      sx={{
        width: "100%",
        height: 203.9,
        bgcolor: "#ffff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          height: 59,
          bgcolor: "#369e45",
          color: "white",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        <Box
          sx={{
            color: "white",
            marginLeft: "3%",
            fontStyle: "italic",
            width: "auto",
            marginTop: "10px",
            overflow: "hidden",
            bgcolor: "#369e45",
            "@media (max-width:600px)": {
              display: "none",
            },
          }}
        >
          <PhoneInTalkOutlinedIcon /> 833-407-0747
        </Box>
        <Box
          sx={{
            width: "60%",
            overflow: "hidden",
            "@media (max-width:600px)": {
              width: "100%",
              display: "block",
              marginTop: "10px",
              marginRight: "3%",
              textAlign: "center",
            },
          }}
        >
          <div className="scrollText">
            Hungry Planet: Buy 2, Get 2 FREE with Code HPBOGOFEB [SHOP NOW]
          </div>
        </Box>
        <Box
          sx={{
            color: "white",
            fontStyle: "italic",
            width: "auto",
            marginTop: "10px",
            marginRight: "3%",
            "@media (max-width:600px)": {
              display: "none",
            },
          }}
        >
          Best Online Vegan Store/Grocery
        </Box>
      </Box>
      <Navbar></Navbar>
    </Box>
  );
}

export default OfferHeader;
