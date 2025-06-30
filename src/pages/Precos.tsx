import { Box, Button, Typography } from "@mui/material";
import { Header } from "../components/Home/Inicio/Header";
import { Verified } from "@mui/icons-material";

export const Precos = () => {
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
              NOSSOS
            </Typography>
            <Typography
              sx={{
                color: "#03A9F4",
                fontWeight: "600",
                fontSize: { xs: "40px", md: "60px" },
                fontFamily: "Poppins, sans-serif",
              }}
            >
              PREÇOS
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
            O melhor custo-benefício do ABC e região: Equipamentos de ponta com
            preços acessíveis.
          </Typography>
        </span>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "2em",
          padding: "2em 20em",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(64, 70, 87, 0.5)",
            borderRadius: "10px",
            padding: "2em",
            width: "30%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "500px",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1em",
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontWeight: "600",
                fontSize: { xs: "16px", md: "22px" },
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Ensaio Individual
            </Typography>
            <Typography
              sx={{
                color: "#B4BABC",
                fontSize: { xs: "10px", md: "13px" },
                fontFamily: "Poppins, sans-serif",
                textAlign: "center",
              }}
            >
              Para músicos que querem ensaiar sozinhos.
            </Typography>
            <span style={{ display: "flex", alignItems: "baseline" }}>
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: { xs: "20px", md: "30px" },
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                R$50,00
              </Typography>
              <Typography
                sx={{
                  color: "#B4BABC",
                  fontSize: { xs: "10px", md: "13px" },
                  fontFamily: "Poppins, sans-serif",
                  textAlign: "center",
                }}
              >
                /hora
              </Typography>
            </span>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1em" }}>
              <span
                style={{ display: "flex", alignItems: "center", gap: "0.5em" }}
              >
                <Verified sx={{ color: "#03A9F4" }} />
                <Typography
                  sx={{
                    color: "#B4BABC",
                    fontSize: { xs: "10px", md: "13px" },
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Sala completa de ensaio
                </Typography>
              </span>

              <span
                style={{ display: "flex", alignItems: "center", gap: "0.5em" }}
              >
                <Verified sx={{ color: "#03A9F4" }} />
                <Typography
                  sx={{
                    color: "#B4BABC",
                    fontSize: { xs: "10px", md: "13px" },
                    fontFamily: "Poppins, sans-serif",
                    textAlign: "left",
                  }}
                >
                  Bateria, amplificadores, microfones, caixas de som, ar
                  condicionado
                </Typography>
              </span>

              <span
                style={{ display: "flex", alignItems: "center", gap: "0.5em" }}
              >
                <Verified sx={{ color: "#03A9F4" }} />
                <Typography
                  sx={{
                    color: "#B4BABC",
                    fontSize: { xs: "10px", md: "13px" },
                    fontFamily: "Poppins, sans-serif",
                    textAlign: "left",
                  }}
                >
                  Instrumentos a alugar
                </Typography>
              </span>

              <span
                style={{ display: "flex", alignItems: "center", gap: "0.5em" }}
              >
                <Verified sx={{ color: "#03A9F4" }} />
                <Typography
                  sx={{
                    color: "#B4BABC",
                    fontSize: { xs: "10px", md: "13px" },
                    fontFamily: "Poppins, sans-serif",
                    textAlign: "left",
                  }}
                >
                  Consumir alimentos e bebidas no local
                </Typography>
              </span>

              <span
                style={{ display: "flex", alignItems: "center", gap: "0.5em" }}
              >
                <Verified sx={{ color: "#03A9F4" }} />
                <Typography
                  sx={{
                    color: "#B4BABC",
                    fontSize: { xs: "10px", md: "13px" },
                    fontFamily: "Poppins, sans-serif",
                    textAlign: "left",
                  }}
                >
                  1 Pessoa
                </Typography>
              </span>
            </Box>
          </Box>

          <Button
            sx={{
              backgroundColor: "transparent",
              "&:hover": { backgroundColor: "#0288D1", color: "#fff" },
              border: "1px solid #0288d1",
              fontWeight: 600,
              color: "#0288d1",
            }}
          >
            Agende Agora
          </Button>
        </Box>

        <Box
          sx={{
            position: "relative",
            backgroundColor: "rgba(64, 70, 87, 0.5)",
            borderRadius: "10px",
            padding: "2em",
            width: "30%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "500px",
            justifyContent: "space-between",
            border: "2px solid #0288D1",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "-12px",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "#0288D1",
              px: 1,
              color: "#fff",
              fontWeight: 600,
              fontFamily: "Poppins, sans-serif",
              fontSize: { xs: "10px", md: "13px" },
              borderRadius: "15px",
              padding: "0.2em 2em",
            }}
          >
            Mais popular
          </Box>

          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1em",
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontWeight: "600",
                fontSize: { xs: "16px", md: "22px" },
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Ensaio em Grupo
            </Typography>
            <Typography
              sx={{
                color: "#B4BABC",
                fontSize: { xs: "10px", md: "13px" },
                fontFamily: "Poppins, sans-serif",
                textAlign: "center",
              }}
            >
              Para grupos pequenos de músicos que querem ensaiar juntos.
            </Typography>
            <span style={{ display: "flex", alignItems: "baseline" }}>
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: { xs: "20px", md: "30px" },
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                R$60,00
              </Typography>
              <Typography
                sx={{
                  color: "#B4BABC",
                  fontSize: { xs: "10px", md: "13px" },
                  fontFamily: "Poppins, sans-serif",
                  textAlign: "center",
                }}
              >
                /hora
              </Typography>
            </span>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1em" }}>
              <span
                style={{ display: "flex", alignItems: "center", gap: "0.5em" }}
              >
                <Verified sx={{ color: "#03A9F4" }} />
                <Typography
                  sx={{
                    color: "#B4BABC",
                    fontSize: { xs: "10px", md: "13px" },
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Sala completa de ensaio
                </Typography>
              </span>

              <span
                style={{ display: "flex", alignItems: "center", gap: "0.5em" }}
              >
                <Verified sx={{ color: "#03A9F4" }} />
                <Typography
                  sx={{
                    color: "#B4BABC",
                    fontSize: { xs: "10px", md: "13px" },
                    fontFamily: "Poppins, sans-serif",
                    textAlign: "left",
                  }}
                >
                  Bateria, amplificadores, microfones, caixas de som, ar
                  condicionado
                </Typography>
              </span>

              <span
                style={{ display: "flex", alignItems: "center", gap: "0.5em" }}
              >
                <Verified sx={{ color: "#03A9F4" }} />
                <Typography
                  sx={{
                    color: "#B4BABC",
                    fontSize: { xs: "10px", md: "13px" },
                    fontFamily: "Poppins, sans-serif",
                    textAlign: "left",
                  }}
                >
                  Instrumentos a alugar
                </Typography>
              </span>

              <span
                style={{ display: "flex", alignItems: "center", gap: "0.5em" }}
              >
                <Verified sx={{ color: "#03A9F4" }} />
                <Typography
                  sx={{
                    color: "#B4BABC",
                    fontSize: { xs: "10px", md: "13px" },
                    fontFamily: "Poppins, sans-serif",
                    textAlign: "left",
                  }}
                >
                  Consumir alimentos e bebidas no local
                </Typography>
              </span>

              <span
                style={{ display: "flex", alignItems: "center", gap: "0.5em" }}
              >
                <Verified sx={{ color: "#03A9F4" }} />
                <Typography
                  sx={{
                    color: "#B4BABC",
                    fontSize: { xs: "10px", md: "13px" },
                    fontFamily: "Poppins, sans-serif",
                    textAlign: "left",
                  }}
                >
                  2 a 8 pessoas
                </Typography>
              </span>
            </Box>
          </Box>

          <Button
            sx={{
              backgroundColor: "transparent",
              "&:hover": { backgroundColor: "#0288D1", color: "#fff" },
              border: "1px solid #0288d1",
              fontWeight: 600,
              color: "#0288d1",
            }}
          >
            Agende Agora
          </Button>
        </Box>

        <Box
          sx={{
            backgroundColor: "rgba(64, 70, 87, 0.5)",
            borderRadius: "10px",
            padding: "2em",
            width: "30%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "500px",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1em",
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontWeight: "600",
                fontSize: { xs: "16px", md: "22px" },
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Ensaio em Grupo Grande
            </Typography>
            <Typography
              sx={{
                color: "#B4BABC",
                fontSize: { xs: "10px", md: "13px" },
                fontFamily: "Poppins, sans-serif",
                textAlign: "center",
              }}
            >
              Para grupos maiores de músicos que querem ensaiar juntos.
            </Typography>
            <span style={{ display: "flex", alignItems: "baseline" }}>
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: { xs: "20px", md: "30px" },
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                R$70,00
              </Typography>
              <Typography
                sx={{
                  color: "#B4BABC",
                  fontSize: { xs: "10px", md: "13px" },
                  fontFamily: "Poppins, sans-serif",
                  textAlign: "center",
                }}
              >
                /hora
              </Typography>
            </span>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1em" }}>
              <span
                style={{ display: "flex", alignItems: "center", gap: "0.5em" }}
              >
                <Verified sx={{ color: "#03A9F4" }} />
                <Typography
                  sx={{
                    color: "#B4BABC",
                    fontSize: { xs: "10px", md: "13px" },
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Sala completa de ensaio
                </Typography>
              </span>

              <span
                style={{ display: "flex", alignItems: "center", gap: "0.5em" }}
              >
                <Verified sx={{ color: "#03A9F4" }} />
                <Typography
                  sx={{
                    color: "#B4BABC",
                    fontSize: { xs: "10px", md: "13px" },
                    fontFamily: "Poppins, sans-serif",
                    textAlign: "left",
                  }}
                >
                  Bateria, amplificadores, microfones, caixas de som, ar
                  condicionado
                </Typography>
              </span>

              <span
                style={{ display: "flex", alignItems: "center", gap: "0.5em" }}
              >
                <Verified sx={{ color: "#03A9F4" }} />
                <Typography
                  sx={{
                    color: "#B4BABC",
                    fontSize: { xs: "10px", md: "13px" },
                    fontFamily: "Poppins, sans-serif",
                    textAlign: "left",
                  }}
                >
                  Instrumentos a alugar
                </Typography>
              </span>

              <span
                style={{ display: "flex", alignItems: "center", gap: "0.5em" }}
              >
                <Verified sx={{ color: "#03A9F4" }} />
                <Typography
                  sx={{
                    color: "#B4BABC",
                    fontSize: { xs: "10px", md: "13px" },
                    fontFamily: "Poppins, sans-serif",
                    textAlign: "left",
                  }}
                >
                  Consumir alimentos e bebidas no local
                </Typography>
              </span>

              <span
                style={{ display: "flex", alignItems: "center", gap: "0.5em" }}
              >
                <Verified sx={{ color: "#03A9F4" }} />
                <Typography
                  sx={{
                    color: "#B4BABC",
                    fontSize: { xs: "10px", md: "13px" },
                    fontFamily: "Poppins, sans-serif",
                    textAlign: "left",
                  }}
                >
                  9 ou mais pessoas
                </Typography>
              </span>
            </Box>
          </Box>

          <Button
            sx={{
              backgroundColor: "transparent",
              "&:hover": { backgroundColor: "#0288D1", color: "#fff" },
              border: "1px solid #0288d1",
              fontWeight: 600,
              color: "#0288d1",
            }}
          >
            Agende Agora
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "rgba(64, 70, 87, 0.5)",
          padding: "3em 20em",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontWeight: "600",
            fontSize: { xs: "20px", md: "26px" },
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Pacotes Promocionais
        </Typography>

        <Typography
          sx={{
            color: "#B4BABC",
            fontSize: { xs: "10px", md: "13px" },
            fontFamily: "Poppins, sans-serif",
            textAlign: "center",
          }}
        >
          Economize mais garantindo um pacote de ensaios!
        </Typography>
      </Box>
    </Box>
  );
};
