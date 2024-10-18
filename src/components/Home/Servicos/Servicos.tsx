import { Box, Typography } from "@mui/material";
import img1 from "../../../data/assets/ensaios.png";
import img2 from "../../../data/assets/gravacoes.png";
import img3 from "../../../data/assets/embreve.png";

export const Servicos = () => {
  return (
    <Box sx={{ textAlign: "center", padding: "5em", display: "flex", gap: "5em", flexDirection: "column", marginBottom: "5em" }}>
      <Typography
        sx={{
          color: "#fff",
          fontWeight: "600",
          fontSize: "60px",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        SERVIÇOS
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </Box>
    </Box>
  );
};
