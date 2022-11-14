import { Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
} from "../../styles/banner";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <BannerContainer>
      <BannerImage src="https://media.istockphoto.com/id/941286228/photo/university-student-with-laptop-sitting-outdoors.jpg?s=612x612&w=0&k=20&c=XO039DFulUSh7CxH-0B4SVGZBwx_fPXVxIukp1Vylz4=" />
      <BannerContent>
        <Typography variant="h6">Huge Collection</Typography>
        <BannerTitle variant="h2">New Bags</BannerTitle>
        <BannerDescription variant="subtitle">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has be.
        </BannerDescription>
        <Button contained>Shop Now</Button>
      </BannerContent>
    </BannerContainer>
  );
}
