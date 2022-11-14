import { Facebook, Instagram, Send, Twitter } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  List,
  ListItemText,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { FooterTitle, SubscribeIf } from "../../styles/footer";

export default function Footer() {
  return (
    <Box
      sx={{
        background: "gray",
        color: "white",
        p: { xs: 4, md: 6 },
        pt: 12,
        pb: 12,
        fontSize: { xs: "12px", md: "14px" },
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">About us</FooterTitle>
          <Typography variant="caption2">
            This website is created By Mousa Khalid for practice purposes. Its
            not a responsive project. Website created using customized MUI5 and
            React Js
          </Typography>
          <Box
            sx={{
              mt: 4,
              color: "white",
            }}
          >
            <Facebook sx={{ mr: 1 }} />
            <Twitter sx={{ mr: 1 }} />
            <Instagram sx={{ mr: 1 }} />
          </Box>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">Information</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                About Us
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Company
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Mousa Connection's
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Privacy & Policy
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body2">My Accounts</FooterTitle>
          <ListItemText>
            <Typography lineHeight={2} variant="caption2">
              Login
            </Typography>
          </ListItemText>
          <ListItemText>
            <Typography lineHeight={2} variant="caption2">
              Signup
            </Typography>
          </ListItemText>
          <ListItemText>
            <Typography lineHeight={2} variant="caption2">
              Github
            </Typography>
          </ListItemText>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body2">Newsletter</FooterTitle>
          <Stack>
            <form>
              <input placeholder="Email Address" />
              <Button outlined>
                <Send placeholder="Send" /> Send
              </Button>
            </form>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
