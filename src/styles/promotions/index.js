import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";

export const PromotionConatiner = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    padding: "40px 0 40px 0",
  },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 0 20px 0",
  overflow: "hidden",
  background: "#1927FF",
}));

export const MessaseText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Montez", "Cursive"',

  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
  fontSize: "1.5rem",
  color: "white",
}));
