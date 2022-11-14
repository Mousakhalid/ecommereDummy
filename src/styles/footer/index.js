import { TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const FooterTitle = styled(Typography)(() => ({
  textTransform: "uppercase",
  marginBottom: "1em",
}));

export const SubscribeIf = styled(TextField)(() => ({
  ".MuiInputLabe-root": {
    color: "gray",
  },
  ".MuiInput-root::before": {
    borderBottom: "1px solid black",
  },
}));
