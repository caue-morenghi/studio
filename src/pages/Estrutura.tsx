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
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export const Estrutura = () => {
  return (
    <Box sx={{ backgroundColor: "#151A27" }}>
      <Header />
      <Box
        sx={{
          padding: "4em",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1em",
            flexDirection: "column",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: "1em" }}>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: "600",
                fontSize: { xs: "40px", md: "60px" },
                fontFamily: "Poppins, sans-serif",
              }}
            >
              NOSSA
            </Typography>
            <Typography
              sx={{
                color: "#03A9F4",
                fontWeight: "600",
                fontSize: { xs: "40px", md: "60px" },
                fontFamily: "Poppins, sans-serif",
              }}
            >
              ESTRUTURA
            </Typography>
          </span>
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              width: "60%",
              textAlign: "center",
              color: "#B4BABC",
            }}
          >
            Utilizada para ensaios e gravações, a sala técnica foi construída em
            um grande espaço de Xm2, possibilitando o uso para artistas ou
            bandas de pequeno a grande porte.
          </Typography>
        </span>
      </Box>
      
      <Accordion
        sx={{
          padding: "2em 20em",
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
          padding: "2em 20em",
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
          padding: "2em 20em",
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
            {/* Insira aqui o conteúdo/itens referentes a Equipamentos de Gravação */}
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          padding: "2em 20em",
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
            {/* Insira aqui o conteúdo/itens referentes a Microfones */}
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          padding: "2em 20em",
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
            {/* Insira aqui o conteúdo/itens referentes a Acessórios e Suportes */}
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          padding: "2em 20em",
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
              Trataento Acústico
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
            {/* Insira aqui o conteúdo/itens referentes a Trataento Acústico */}
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
