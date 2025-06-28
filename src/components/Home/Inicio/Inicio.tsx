import { Box } from "@mui/material";
import imagem_central from "../../../data/assets/Hero.jpg";
import { Header } from "./Header";
import { Hero } from "./Hero";

export const Inicio = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${imagem_central})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Header />
        <Hero />
      </Box>
    </>
  );
};