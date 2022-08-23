import { Box, Typography } from "@mui/material";
import React from "react";

function BillCalculate() {
  return (
    <>
      <Box sx={{ width: { xs: "100%", sm: "100%", md: "70%", lg: "60%" }, display: "flex", flexWrap: "wrap", flexDirection: "row-reverse", justifyContent: "space-between", alignItems: "center", gap: "0.5rem", border: "1px solid #ECEFF1", p: "0.5rem", alignSelf: "center" }}>
        <Box sx={{ width: "100%", display: "flex", flexDirection: "row-reverse", gap: "2rem", justifyContent: "center", alignItems: "center" }}>
          <Typography dir="rtl" sx={{ fontSize: "1rem", color: "#000", fontWeight: "normal", textOverflow: "ellipsis", overflow: "hidden" }}>
            جمع کل:
          </Typography>
          <Typography dir="rtl" sx={{ fontSize: "1rem", color: "#000", fontWeight: "normal", textOverflow: "ellipsis", overflow: "hidden" }}>
            یک میلیون تومان
          </Typography>
        </Box>{" "}
      </Box>
    </>
  );
}

export default BillCalculate;
