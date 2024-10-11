import { Box, Typography } from "@mui/material";
import imagem_central from "../../../data/assets/framemaior.png";

export const LocalizacaoSobre = () => {
  return (
    <>
      <Box
        sx={{
          height: "420vh",
          backgroundImage: `url(${imagem_central})`,
          backgroundSize: "contains",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box sx={{ textAlign: "center", paddingTop: "17em" }}>
          <Typography
            sx={{
              color: "#fff",
              fontWeight: "600",
              fontSize: "60px",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Localização
          </Typography>

          <Box sx={{ padding: "5em" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7306.849048895091!2d-46.57060190163381!3d-23.696529417201592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce43c78e30aa49%3A0x2f1c3205196afcc7!2sStudio%20Audio%20Maker!5e0!3m2!1spt-BR!2sbr!4v1728676687163!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Studio Audio Maker Location"
            ></iframe>
            <Typography sx={{ fontFamily: "Poppins, sans-serif", color: "#fff", opacity: "0.5", marginTop: "1em" }}>Studio Audio Maker: Rua Raimundo Cirino, 308 - Bairro Planalto, São Bernardo do Campo - SP</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
