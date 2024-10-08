import { Box, Typography } from "@mui/material";
import imagem_central from "../data/assets/Hero.jpg";
import { Header } from "../components/Home/Header/Header";
import { Hero } from "../components/Home/Hero";

export const Home = () => {
  return (
    <Box
      sx={{
        width: '1349px',
        height: '1470px',
        overflow: 'hidden',
        backgroundImage: `url(${imagem_central})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Header />
      <Box height="100%" width="100%" sx={{  }}>
        <Typography variant="h1" fontFamily="Anton, sans-serif">STUDIO AUDIO MAKER</Typography>
      </Box>
    </Box>
  );
};