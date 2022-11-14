import { Box, Container, ThemeProvider, Typography } from "@mui/material";
import { useEffect } from "react";
import Appbar from "./components/appbar";
import Banner from "./components/banner";
import Footer from "./components/footer";
import Products from "./components/products";
import Promotions from "./components/promotions";
import theme from "./styles/theme";

function App() {
  useEffect(() => {
    document.title = "Mousa - Home";
  });
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ backgroundColor: "#fff" }}>
        <Appbar />
        <Banner />
        <Promotions />
        <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
          <Typography variant="h4">Our Products</Typography>
        </Box>
        <Products />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
