import { Box } from "@mui/material";
import { Inicio } from "../components/Home/Inicio/Inicio";
import { SocialMedia } from "../components/Home/SocialMedia";
import { Salas } from "../components/Home/Salas/Salas";
import { LocalizacaoSobre } from "../components/Home/Localizacao/LocalizacaoSobre";

export const Home = () => {
  return (
    <Box sx={{ backgroundColor: "#151A27" }}>
      <Inicio />
      <SocialMedia />
      <Salas />
      <LocalizacaoSobre />
    </Box>
  );
};