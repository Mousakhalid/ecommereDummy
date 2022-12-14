import { Box, Button, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { slideInBottom, slideInRight } from "../../animation";

export const Product = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    position: "relative",
  },
}));

export const ProductImage = styled("img")(({ src, theme }) => ({
  scr: `url(${src})`,
  width: "100%",
  background: "gray",
  padding: "10px",
  [theme.breakpoints.down("up")]: {
    width: "80%",
    padding: "24px",
  },
}));

export const ProductActionButton = styled(IconButton)(() => ({
  background: "white",
  margin: 4,
}));

export const ProductFavButton = styled(ProductActionButton, {
  shouldForward: (prop) => prop !== "isfav",
})(({ isfav, theme }) => ({
  color: isfav ? "#1927FF" : "#000C03",
  [theme.breakpoints.up("md")]: {
    position: "absolute",
    right: "0",
    top: "0",
  },
}));

export const ProductAddToCart = styled(Button, {
  shouldForward: (prop) => prop !== "show",
})(({ show, theme }) => ({
  width: "120px",
  fontSize: "12px",
  [theme.breakpoints.up("md")]: {
    position: "absolute",
    bottom: "2%",
    width: "300px",
    padding: "10px 5px",
    animation:
      show &&
      `${slideInBottom} 0.5s cubic-bezier (0.250,0.460, 0.450,0.940) both`,
  },
  background: "#000CC7",
  opacity: 0.9,
}));

export const ProductMetaWrapper = styled(Box)(({ theme }) => ({
  padding: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));
export const ProductActionsWrapper = styled(Box, {
  shouldForward: (prop) => prop !== "show",
})(({ show, theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: show ? "visible" : "none",
    position: "absolute",
    right: 0,
    top: "20%",
    animation:
      show &&
      `${slideInRight}0.5s cubic-bezier (0.250,0.460, 0.450,0.940) both`,
  },
}));
