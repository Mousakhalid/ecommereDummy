import { createTheme } from "@mui/material/styles";
import { lighten } from "polished";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5f2c3e",
    },
    secondary: {
      main: "#d1adcc",
    },
  },
  components: {
    MuiButton: {
      defaultPropa: {
        disableRipple: true,
        disableElevevation: true,
      },
    },
    MyShopButton: {
      styleOverrides: {
        root: {
          color: "#ffffff",
        },
        primary: {
          background: "#d1adcc",
          "&:hover": {
            background: lighten(0.05, "#d1adcc"),
          },
        },
        secondary: {
          background: "#5f2c3e",
          "&:hover": {
            background: lighten(0.05, "#5f2c3e"),
          },
        },
      },
    },
  },
});

export default theme;
