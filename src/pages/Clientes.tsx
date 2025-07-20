import { Box, Typography, Grid, Button } from "@mui/material"
import PeopleIcon from "@mui/icons-material/People"
import StarIcon from "@mui/icons-material/Star"
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import { Header } from "../components/Home/Inicio/Header"
import { Footer } from "../components/Home/Footer"

const achievements = [
  { icon: PeopleIcon, number: "120+", label: "Bandas atendidas" },
  { icon: PeopleIcon, number: "2k+", label: "Músicos satisfeitos" },
  { icon: PeopleIcon, number: "50+", label: "Álbuns produzidos" },
  { icon: PeopleIcon, number: "10k+", label: "Horas de estúdio" },
]

const clients = [
  {
    image: "/assets/clients/client1.jpg",
    name: "João Silva",
    genre: "Rock",
    rating: 5,
    year: 2023,
    testimonial: "Excelente qualidade e atendimento impecável!",
    project: "Álbum \"Novos Tempos\"",
  },
  {
    image: "/assets/clients/client2.jpg",
    name: "Banda Solar",
    genre: "Pop",
    rating: 4,
    year: 2024,
    testimonial: "Estrutura top e som cristalino nas gravações.",
    project: "EP \"Vem Brilhar\"",
  },
  {
    image: "/assets/clients/client3.jpg",
    name: "Maria Souza",
    genre: "MPB",
    rating: 5,
    year: 2022,
    testimonial: "Ambiente acolhedor e profissionais dedicados.",
    project: "Single \"Coração Aberto\"",
  },
]

const featuredProjects = [
  {
    image:
      "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Banda Revolução",
    title: "Álbum \"Novos Tempos\"",
    subtitle: "Banda Revolução • Rock Alternativo",
    description:
      "Produção completa de álbum com 12 faixas, incluindo gravação, mixagem e masterização.",
  },
  {
    image:
      "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Maria Silva",
    title: "EP \"Canções do Coração\"",
    subtitle: "Maria Silva • MPB",
    description:
      "EP intimista com 5 faixas, destacando a versatilidade vocal da artista.",
  },
]

export const Clientes = () => (
  <Box sx={{ backgroundColor: "#1D212E", minHeight: "100vh" }}>
    <Header />

    <Box component="section" sx={{ py: 8, px: { xs: 2, md: 8 } }}>
      <Box sx={{ textAlign: "center", maxWidth: 1120, mx: "auto" }}>
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            px: 2,
            py: 1,
            backgroundColor: "#33333F",
            borderRadius: "999px",
            mb: 3,
          }}
        >
          <PeopleIcon sx={{ color: "#03A9F4", mr: 1 }} />
          <Typography sx={{ color: "#fff", fontSize: "0.875rem", fontWeight: 500 }}>
            Nossos Clientes
          </Typography>
        </Box>
        <Typography
          sx={{
            color: "#fff",
            fontSize: { xs: "2rem", md: "3.75rem" },
            fontWeight: 700,
            mb: 2,
          }}
        >
          Quem <Box component="span" sx={{ color: "#03A9F4" }}>Confia</Box> em Nós
        </Typography>
        <Typography
          sx={{
            color: "#B4BABC",
            fontSize: "1.125rem",
            maxWidth: 768,
            mx: "auto",
          }}
        >
          Conheça alguns dos artistas e bandas que escolheram o StudioPro para dar vida às suas criações musicais
        </Typography>
      </Box>
    </Box>

    <Box component="section" sx={{ py: 8, px: { xs: 2, md: 8 } }}>
      <Box sx={{ maxWidth: 1120, mx: "auto" }}>
        <Grid container spacing={4}>
          {achievements.map((item, idx) => (
            <Grid item xs={6} md={3} key={idx} sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  backgroundColor: "#03A9F4",
                  borderRadius: "50%",
                  mx: "auto",
                  mb: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <item.icon sx={{ color: "#fff", fontSize: "2rem" }} />
              </Box>
              <Typography sx={{ color: "#fff", fontSize: "2rem", fontWeight: 700, mb: 0.5 }}>
                {item.number}
              </Typography>
              <Typography sx={{ color: "#B4BABC", fontSize: "0.875rem" }}>
                {item.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>

    <Box component="section" sx={{ py: 8, px: { xs: 2, md: 8 }, backgroundColor: "#27272F" }}>
      <Box sx={{ maxWidth: 1120, mx: "auto" }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography sx={{ color: "#fff", fontSize: { xs: "1.75rem", md: "2.5rem" }, fontWeight: 700, mb: 1 }}>
            Depoimentos
          </Typography>
          <Typography sx={{ color: "#B4BABC", fontSize: "1rem" }}>
            O que nossos clientes dizem sobre nós
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {clients.map((c, i) => (
            <Grid item xs={12} md={6} lg={4} key={i}>
              <Box
                sx={{
                  backgroundColor: "#33333F",
                  p: 3,
                  borderRadius: "12px",
                  border: "1px solid #42424a",
                  "&:hover": { borderColor: "#03A9F4", transform: "scale(1.02)" },
                  transition: "all 0.3s",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Box
                    component="img"
                    src={c.image}
                    alt={c.name}
                    sx={{ width: 48, height: 48, borderRadius: "50%", objectFit: "cover", mr: 2 }}
                  />
                  <Box>
                    <Typography sx={{ color: "#fff", fontWeight: 700 }}>{c.name}</Typography>
                    <Typography sx={{ color: "#03A9F4", fontSize: "0.875rem" }}>{c.genre}</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  {[...Array(c.rating)].map((_, s) => (
                    <StarIcon key={s} sx={{ color: "gold", fontSize: "1rem" }} />
                  ))}
                  <Typography sx={{ color: "#B4BABC", fontSize: "0.875rem", ml: 1 }}>
                    ({c.year})
                  </Typography>
                </Box>
                <Typography sx={{ color: "#B4BABC", fontSize: "0.875rem", fontStyle: "italic", mb: 2 }}>
                  "{c.testimonial}"
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Typography sx={{ color: "#03A9F4", fontSize: "0.875rem", fontWeight: 500 }}>
                    {c.project}
                  </Typography>
                  <FormatQuoteIcon sx={{ color: "#6b7280" }} />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>

    <Box component="section" sx={{ py: 8, px: { xs: 2, md: 8 } }}>
      <Box sx={{ maxWidth: 1120, mx: "auto" }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography sx={{ color: "#fff", fontSize: { xs: "1.75rem", md: "2.5rem" }, fontWeight: 700, mb: 1 }}>
            Projetos em Destaque
          </Typography>
          <Typography sx={{ color: "#B4BABC", fontSize: "1rem" }}>
            Alguns dos trabalhos que mais nos orgulham
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {featuredProjects.map((p, i) => (
            <Grid item xs={12} md={6} key={i}>
              <Box
                sx={{
                  backgroundColor: "#27272F",
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "1px solid #42424a",
                  "&:hover": { borderColor: "#03A9F4" },
                  transition: "all 0.3s",
                }}
              >
                <Box component="img" src={p.image} alt={p.alt} sx={{ width: "100%", height: 240, objectFit: "cover" }} />
                <Box sx={{ p: 3 }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                    <Typography sx={{ color: "#fff", fontWeight: 700, fontSize: "1.25rem" }}>
                      {p.title}
                    </Typography>
                    <PlayArrowIcon sx={{ color: "#03A9F4" }} />
                  </Box>
                  <Typography sx={{ color: "#03A9F4", fontSize: "0.875rem", mb: 1 }}>
                    {p.subtitle}
                  </Typography>
                  <Typography sx={{ color: "#B4BABC", fontSize: "0.875rem" }}>
                    {p.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>

    <Box component="section" sx={{ py: 8, px: { xs: 2, md: 8 }, backgroundColor: "#27272F" }}>
      <Box sx={{ maxWidth: 640, mx: "auto", textAlign: "center" }}>
        <Typography sx={{ color: "#fff", fontWeight: 700, fontSize: { xs: "1.75rem", md: "2.5rem" }, mb: 2 }}>
          Seja o Próximo Sucesso
        </Typography>
        <Typography sx={{ color: "#B4BABC", fontSize: "1rem", mb: 4 }}>
          Junte-se aos nossos clientes satisfeitos e transforme sua música em realidade
        </Typography>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2, justifyContent: "center" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#03A9F4",
              color: "#fff",
              px: 4,
              py: 1.5,
              fontWeight: 600,
              "&:hover": { backgroundColor: "blue" },
            }}
          >
            Ver Preços
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#03A9F4",
              color: "#03A9F4",
              px: 4,
              py: 1.5,
              fontWeight: 600,
              "&:hover": { backgroundColor: "#03A9F4", color: "#fff" },
            }}
          >
            Entrar em Contato
          </Button>
        </Box>
      </Box>
    </Box>

    <Footer />
  </Box>
)