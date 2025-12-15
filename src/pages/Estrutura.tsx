import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { Header } from "../components/Home/Inicio/Header";
import { Speaker } from "@mui/icons-material";
import { amplificadores } from "../data/Estrutura/amplificadores";
import { Caixa } from "../components/Estrutura/Caixa";
import { instrumentos } from "../data/Estrutura/instrumentos2";
import { equipamentosGravacao } from "../data/Estrutura/equipamentosGravacao";
import { microfones } from "../data/Estrutura/microfones";
import { acessorios } from "../data/Estrutura/acessorios";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Footer } from "../components/Home/Footer";
import { espacos } from "../data/Estrutura/espacos";
import { salaA } from "../data/Estrutura/salaA";
import { salaB } from "../data/Estrutura/salaB";

export const Estrutura = () => {
  return (
    <Box sx={{ backgroundColor: "#151A27" }}>
      <Header />
      <Box
        sx={{
          padding: { xs: "2em 1em", md: "4em" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: "1em",
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontWeight: "600",
              fontSize: { xs: "30px", md: "60px" },
              fontFamily: "Poppins, sans-serif",
            }}
          >
            NOSSA
          </Typography>
          <Typography
            sx={{
              color: "#03A9F4",
              fontWeight: "600",
              fontSize: { xs: "30px", md: "60px" },
              fontFamily: "Poppins, sans-serif",
            }}
          >
            ESTRUTURA
          </Typography>
        </Box>
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            width: { xs: "100%", md: "60%" },
            textAlign: "center",
            color: "#B4BABC",
          }}
        >
          Utilizada para ensaios e gravações, a sala técnica foi construída em
          um grande espaço, possibilitando o uso para artistas ou bandas de
          pequeno a grande porte.
        </Typography>
      </Box>

      <Accordion
        sx={{
          padding: { xs: "2em 1em", md: "2em 20em" },
          backgroundColor: "#151A27",
          border: "none",
          boxShadow: "none",
          marginTop: "2em",
        }}
      >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon sx={{ color: "#03A9F4" }} />}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "1em" }}>
            <Box
              sx={{
                padding: "1em",
                backgroundColor: "#1E1E2F",
                borderRadius: "8px",
                ":hover": { backgroundColor: "#03A9F4" },
              }}
            >
              <Speaker sx={{ fontSize: "30px", color: "#03A9F4" }} />
            </Box>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: "600",
                fontSize: { xs: "20px", md: "30px" },
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Sala A (Sala Técnica)
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2em",
              justifyContent: "center",
            }}
          >
            {salaA.map((item) => (
              <Caixa
                key={item.nome}
                nome={item.nome}
                descricao={item.descricao}
                img={item.img}
              />
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          padding: { xs: "2em 1em", md: "2em 20em" },
          backgroundColor: "#151A27",
          border: "none",
          boxShadow: "none",
          marginTop: "2em",
        }}
      >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon sx={{ color: "#03A9F4" }} />}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "1em" }}>
            <Box
              sx={{
                padding: "1em",
                backgroundColor: "#1E1E2F",
                borderRadius: "8px",
                ":hover": { backgroundColor: "#03A9F4" },
              }}
            >
              <Speaker sx={{ fontSize: "30px", color: "#03A9F4" }} />
            </Box>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: "600",
                fontSize: { xs: "20px", md: "30px" },
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Sala B
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2em",
              justifyContent: "center",
            }}
          >
            {salaB.map((item) => (
              <Caixa
                key={item.nome}
                nome={item.nome}
                descricao={item.descricao}
                img={item.img}
              />
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          padding: { xs: "2em 1em", md: "2em 20em" },
          backgroundColor: "#151A27",
          border: "none",
          boxShadow: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon sx={{ color: "#03A9F4" }} />}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "1em" }}>
            <Box
              sx={{
                padding: "1em",
                backgroundColor: "#1E1E2F",
                borderRadius: "8px",
                ":hover": { backgroundColor: "#03A9F4" },
              }}
            >
              <Speaker sx={{ fontSize: "30px", color: "#03A9F4" }} />
            </Box>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: "600",
                fontSize: { xs: "20px", md: "30px" },
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Amplificadores
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2em",
              justifyContent: "center",
            }}
          >
            {amplificadores.map((amp) => (
              <Caixa
                key={amp.nome}
                nome={amp.nome}
                descricao={amp.descricao}
                img={amp.img}
              />
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          padding: { xs: "2em 1em", md: "2em 20em" },
          backgroundColor: "#151A27",
          border: "none",
          boxShadow: "none",
          marginTop: "2em",
        }}
      >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon sx={{ color: "#03A9F4" }} />}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "1em" }}>
            <Box
              sx={{
                padding: "1em",
                backgroundColor: "#1E1E2F",
                borderRadius: "8px",
                ":hover": { backgroundColor: "#03A9F4" },
              }}
            >
              <Speaker sx={{ fontSize: "30px", color: "#03A9F4" }} />
            </Box>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: "600",
                fontSize: { xs: "20px", md: "30px" },
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Instrumentos
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2em",
              justifyContent: "center",
            }}
          >
            {instrumentos.map((item) => (
              <Caixa
                key={item.nome}
                nome={item.nome}
                descricao={item.descricao}
                img={item.img}
              />
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          padding: { xs: "2em 1em", md: "2em 20em" },
          backgroundColor: "#151A27",
          border: "none",
          boxShadow: "none",
          marginTop: "2em",
        }}
      >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon sx={{ color: "#03A9F4" }} />}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "1em" }}>
            <Box
              sx={{
                padding: "1em",
                backgroundColor: "#1E1E2F",
                borderRadius: "8px",
                ":hover": { backgroundColor: "#03A9F4" },
              }}
            >
              <Speaker sx={{ fontSize: "30px", color: "#03A9F4" }} />
            </Box>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: "600",
                fontSize: { xs: "20px", md: "30px" },
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Equipamentos de Gravação
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2em",
              justifyContent: "center",
            }}
          >
            {equipamentosGravacao.map((item) => (
              <Caixa
                key={item.nome}
                nome={item.nome}
                descricao={item.descricao}
                img={item.img}
              />
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          padding: { xs: "2em 1em", md: "2em 20em" },
          backgroundColor: "#151A27",
          border: "none",
          boxShadow: "none",
          marginTop: "2em",
        }}
      >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon sx={{ color: "#03A9F4" }} />}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "1em" }}>
            <Box
              sx={{
                padding: "1em",
                backgroundColor: "#1E1E2F",
                borderRadius: "8px",
                ":hover": { backgroundColor: "#03A9F4" },
              }}
            >
              <Speaker sx={{ fontSize: "30px", color: "#03A9F4" }} />
            </Box>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: "600",
                fontSize: { xs: "20px", md: "30px" },
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Microfones
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2em",
              justifyContent: "center",
            }}
          >
            {microfones.map((item) => (
              <Caixa
                key={item.nome}
                nome={item.nome}
                descricao={item.descricao}
                img={item.img}
              />
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          padding: { xs: "2em 1em", md: "2em 20em" },
          backgroundColor: "#151A27",
          border: "none",
          boxShadow: "none",
          marginTop: "2em",
        }}
      >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon sx={{ color: "#03A9F4" }} />}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "1em" }}>
            <Box
              sx={{
                padding: "1em",
                backgroundColor: "#1E1E2F",
                borderRadius: "8px",
                ":hover": { backgroundColor: "#03A9F4" },
              }}
            >
              <Speaker sx={{ fontSize: "30px", color: "#03A9F4" }} />
            </Box>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: "600",
                fontSize: { xs: "20px", md: "30px" },
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Acessórios e Suportes
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2em",
              justifyContent: "center",
            }}
          >
            {acessorios.map((item) => (
              <Caixa
                key={item.nome}
                nome={item.nome}
                descricao={item.descricao}
                img={item.img}
              />
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          padding: { xs: "2em 1em", md: "2em 20em" },
          backgroundColor: "#151A27",
          border: "none",
          boxShadow: "none",
          marginTop: "2em",
        }}
      >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon sx={{ color: "#03A9F4" }} />}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "1em" }}>
            <Box
              sx={{
                padding: "1em",
                backgroundColor: "#1E1E2F",
                borderRadius: "8px",
                ":hover": { backgroundColor: "#03A9F4" },
              }}
            >
              <Speaker sx={{ fontSize: "30px", color: "#03A9F4" }} />
            </Box>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: "600",
                fontSize: { xs: "20px", md: "30px" },
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Espaços Gerais
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2em",
              justifyContent: "center",
            }}
          >
            {espacos.map((item) => (
              <Caixa
                key={item.nome}
                nome={item.nome}
                descricao={item.descricao}
                img={item.img}
              />
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>
      <Footer />
    </Box>
  );
};

export default Estrutura;
