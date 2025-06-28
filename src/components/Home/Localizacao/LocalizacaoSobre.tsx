import { Box, Typography } from "@mui/material";
import imagem_central from "../../../data/assets/framemaior.png";

export const LocalizacaoSobre = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${imagem_central})`,
          backgroundSize: "contains",
          backgroundRepeat: "no-repeat",
          clipPath: {
            lg: "polygon(0 0, 100% 15%, 100% 100%, 0 85%)",
            md: "polygon(0 0, 100% 10%, 100% 100%, 0 90%)",
            xs: "polygon(0 0, 100% 5%, 100% 100%, 0 95%)",
          },
          padding: "8em 0",
          display: "flex", flexDirection: "column", alignItems: "center"
        }}
      >
        <Box sx={{ textAlign: "center", margin: "5em 0" }}>
          <Typography
            sx={{
              color: "#fff",
              fontWeight: "600",
              fontSize: { xs: "40px", md: "60px" },
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Localização
          </Typography>

          <Box sx={{ padding: { xs: "1em", md: "5em" }}}>
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
            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                color: "#fff",
                opacity: "0.5",
                marginTop: "1em",
                fontSize: { xs: "12px", md: "16px" },
              }}
            >
              Studio Audio Maker: Rua Raimundo Cirino, 308 - Bairro Planalto,
              São Bernardo do Campo - SP
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
