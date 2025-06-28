import { Box } from "@mui/material";
import { Inicio } from "../components/Home/Inicio/Inicio";
import { SocialMedia } from "../components/Home/SocialMedia";
import { Salas } from "../components/Home/Salas/Salas";
import { LocalizacaoSobre } from "../components/Home/Localizacao/LocalizacaoSobre"
import img_studio from "../data/assets/img_studio.jpg";
import { Sobre } from "../components/Home/Sobre/Sobre";
import { Horarios } from "../components/Home/Horarios/Horarios";
import { Servicos } from "../components/Home/Servicos/Servicos";
import { Agende } from "../components/Home/Servicos/Agende";
import { Footer } from "../components/Home/Footer";

export const Home = () => {
  return (
    <Box sx={{ backgroundColor: "#151A27" }}>
      <Inicio />
      <SocialMedia />
      <Salas />
      <LocalizacaoSobre />


      <Box
        sx={{
          height: "100vh",
          backgroundImage: `url(${img_studio})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          clipPath: {
            lg: "polygon(0 0, 100% 15%, 100% 85%, 0 100%)",
            md: "polygon(0 0, 100% 10%, 100% 90%, 0 100%)",
            xs: "polygon(0 0, 100% 5%, 100% 95%, 0 100%)"
          },
          mt: { xs: -10, md: -22 },
        }}
      ></Box>

      <Sobre />
      <Horarios />
      <Servicos />

      <Agende />

      <Footer />
    </Box>
  );
};

