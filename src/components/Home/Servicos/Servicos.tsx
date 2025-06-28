import { Box, Typography } from "@mui/material";
import img1 from "../../../data/assets/ensaios.png";
import img2 from "../../../data/assets/gravacoes.png";
import img3 from "../../../data/assets/embreve.png";

export const Servicos = () => {
  return (
    <Box sx={{ textAlign: "center", padding: "5em", display: "flex", gap: "5em", flexDirection: "column", marginBottom: "5em", alignItems: "center" }}>
      <Typography
        sx={{
          color: "#fff",
          fontWeight: "600",
          fontSize: { xs: "40px", md: "60px" },
          fontFamily: "Poppins, sans-serif",
        }}
      >
        SERVIÇOS
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: { xs: "column", md: "row" }, gap: { xs: "2em", md: "0" } }}>
        <img src={img1} alt="Ensaios" style={{ width: "100%", maxWidth: "300px" }} />
        <img src={img2} alt="Gravações" style={{ width: "100%", maxWidth: "300px" }} />
        <img src={img3} alt="Em breve" style={{ width: "100%", maxWidth: "300px" }} />
      </Box>
    </Box>
  );
};