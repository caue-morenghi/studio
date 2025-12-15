import {
  Email,
  Facebook,
  Instagram,
  WhatsApp,
  YouTube,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1D212E",
        padding: "4em",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "Poppins, sans-serif",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: "2em", md: "0" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          gap: "1em",
          width: { xs: "100%", md: "30%" },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            color: "#fff",
            fontWeight: 600,
          }}
        >
          STUDIO AUDIO MAKER
        </Typography>
        <Typography
          sx={{
            fontSize: "13px",
            fontFamily: "Poppins, sans-serif",
            color: "#A7AAB5",
          }}
        >
          Studio Audio Maker é o espaço ideal para suas gravações e ensaios.
          Aproveite nosso estúdio completo com equipamentos de ponta. Torne seus
          projetos musicais realidade com facilidade e qualidade. Reserve seu
          horário hoje e faça parte da nossa comunidade
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "2em",
          flexDirection: { xs: "column", md: "row" },
          width: { xs: "100%", md: "auto" },
        }}
      >
        <Link to={"/estrutura"} style={{ textDecoration: "none" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <Typography
              sx={{
                fontSize: "13px",
                fontFamily: "Poppins, sans-serif",
                color: "#5B5C61",
              }}
            >
              Estrutura
            </Typography>
            <Typography
              sx={{
                fontSize: "13px",
                fontFamily: "Poppins, sans-serif",
                color: "#A7AAB5",
              }}
            >
              Equipamentos
            </Typography>
            <Typography
              sx={{
                fontSize: "13px",
                fontFamily: "Poppins, sans-serif",
                color: "#A7AAB5",
              }}
            >
              Sala Técnica
            </Typography>
            <Typography
              sx={{
                fontSize: "13px",
                fontFamily: "Poppins, sans-serif",
                color: "#A7AAB5",
              }}
            >
              Sala B
            </Typography>
          </Box>
        </Link>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1em" }}>
          <Link
            to="https://wa.me/5511993366542?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20gravações"
            style={{ textDecoration: "none" }}
          >
            <Typography
              sx={{
                fontSize: "13px",
                fontFamily: "Poppins, sans-serif",
                color: "#5B5C61",
              }}
            >
              Contato
            </Typography>
          </Link>
          <Link
            to="https://wa.me/5511993366542?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20gravações"
            style={{ textDecoration: "none" }}
          >
            <Typography
              sx={{
                fontSize: "13px",
                fontFamily: "Poppins, sans-serif",
                color: "#A7AAB5",
              }}
            >
              Para gravações
            </Typography>
          </Link>
          <Link to="/ensaiosegravacoes" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                fontSize: "13px",
                fontFamily: "Poppins, sans-serif",
                color: "#A7AAB5",
              }}
            >
              Para ensaios
            </Typography>
          </Link>
          <Link
            to="https://wa.me/5511963139042"
            style={{ textDecoration: "none" }}
          >
            <Typography
              sx={{
                fontSize: "13px",
                fontFamily: "Poppins, sans-serif",
                color: "#A7AAB5",
              }}
            >
              Informações
            </Typography>
          </Link>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1em" }}>
          <Typography
            sx={{
              fontSize: "13px",
              fontFamily: "Poppins, sans-serif",
              color: "#5B5C61",
            }}
          >
            Redes sociais
          </Typography>
          <Box sx={{ display: "flex", gap: "1em" }}>
            <Link
              to="https://wa.me/5511963139042"
              style={{ textDecoration: "none" }}
            >
              <WhatsApp sx={{ color: "#a7aab5" }} />
            </Link>
            <Link to="https://www.instagram.com/audiomakersbc/">
              <Instagram sx={{ color: "#a7aab5" }} />
            </Link>
            <Facebook sx={{ color: "#a7aab5" }} />
            <YouTube sx={{ color: "#a7aab5" }} />
            <Email sx={{ color: "#a7aab5" }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
