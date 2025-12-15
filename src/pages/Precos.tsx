import { Box, Button, Typography } from "@mui/material";
import { Header } from "../components/Home/Inicio/Header";
import { Verified } from "@mui/icons-material";
import { Footer } from "../components/Home/Footer";
import { Link } from "react-router-dom";

type PriceCardProps = {
  title: string;
  desc: string;
  price: string;
  per: string;
  features: string[];
  popular?: boolean;
};

const PriceCard = ({
  title,
  desc,
  price,
  per,
  features,
  popular,
}: PriceCardProps) => (
  <Box
    sx={{
      position: popular ? "relative" : undefined,
      backgroundColor: "rgba(64, 70, 87, 0.5)",
      borderRadius: "10px",
      padding: "2em",
      width: "100%",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "2em",
      justifyContent: "space-between",
      border: popular ? "2px solid #0288D1" : undefined,
    }}
  >
    {popular && (
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
    )}
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
        {title}
      </Typography>
      <Typography
        sx={{
          color: "#B4BABC",
          fontSize: { xs: "10px", md: "13px" },
          fontFamily: "Poppins, sans-serif",
          textAlign: "center",
        }}
      >
        {desc}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "baseline" }}>
        <Typography
          sx={{
            color: "#fff",
            fontWeight: "600",
            fontSize: { xs: "20px", md: "30px" },
            fontFamily: "Poppins, sans-serif",
          }}
        >
          {price}
        </Typography>
        <Typography
          sx={{
            color: "#B4BABC",
            fontSize: { xs: "10px", md: "13px" },
            fontFamily: "Poppins, sans-serif",
          }}
        >
          {per}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1em" }}>
        {features.map((f) => (
          <Box
            key={f}
            sx={{ display: "flex", alignItems: "center", gap: "0.5em" }}
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
              {f}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
    <Link to="/ensaiosegravacoes">
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
    </Link>
  </Box>
);

type PromoCardProps = {
  title: string;
  discount: string;
  desc: string;
  originalPrice: string;
  price: string;
  features: string[];
};

const PromoCard = ({
  title,
  discount,
  desc,
  originalPrice,
  price,
  features,
}: PromoCardProps) => (
  <Box
    sx={{
      backgroundColor: "rgba(64, 70, 87, 0.5)",
      borderRadius: "10px",
      padding: "2em",
      width: "100%",
      textAlign: "left",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "2em",
      justifyContent: "space-between",
    }}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
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
        {title}
      </Typography>
      <Typography
        sx={{
          color: "#fff",
          px: 1,
          backgroundColor: "#03A9F4",
          borderRadius: "15px",
          fontSize: { xs: "10px", md: "13px" },
          fontWeight: 600,
          fontFamily: "Poppins, sans-serif",
        }}
      >
        {discount}
      </Typography>
    </Box>
    <Typography
      sx={{
        color: "#B4BABC",
        fontSize: { xs: "10px", md: "13px" },
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {desc}
    </Typography>
    <Box sx={{ display: "flex", alignItems: "center", gap: "0.5em" }}>
      <Typography
        sx={{
          color: "#B4BABC",
          fontSize: { xs: "12px", md: "16px" },
          fontFamily: "Poppins, sans-serif",
          textDecoration: "line-through",
        }}
      >
        {originalPrice}
      </Typography>
      <Typography
        sx={{
          color: "#0288d1",
          fontWeight: "600",
          fontSize: { xs: "16px", md: "26px" },
          fontFamily: "Poppins, sans-serif",
        }}
      >
        {price}
      </Typography>
    </Box>
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1em" }}>
      {features.map((f) => (
        <Box
          key={f}
          sx={{ display: "flex", alignItems: "center", gap: "0.5em" }}
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
            {f}
          </Typography>
        </Box>
      ))}
    </Box>
    <Link to="/ensaiosegravacoes">
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
    </Link>
  </Box>
);

export const Precos = () => {
  const priceOptions: PriceCardProps[] = [
    {
      title: "Ensaio Individual",
      desc: "Para músicos que querem ensaiar sozinhos.",
      price: "R$50,00",
      per: "/hora",
      features: [
        "Sala completa de ensaio",
        "Bateria, amplificadores, microfones, caixas de som, ar condicionado",
        "Instrumentos a alugar",
        "Consumir alimentos e bebidas no local",
        "1 Pessoa",
      ],
    },
    {
      title: "Ensaio em Grupo",
      desc: "Para grupos pequenos de músicos que querem ensaiar juntos.",
      price: "R$50,00",
      per: "/hora",
      features: [
        "Sala completa de ensaio",
        "Bateria, amplificadores, microfones, caixas de som, ar condicionado",
        "Instrumentos a alugar",
        "Consumir alimentos e bebidas no local",
        "2 a 8 pessoas",
      ],
      popular: true,
    },
    {
      title: "Ensaio em Grupo Grande",
      desc: "Para grupos maiores de músicos que querem ensaiar juntos.",
      price: "R$60,00",
      per: "/hora",
      features: [
        "Sala completa de ensaio",
        "Bateria, amplificadores, microfones, caixas de som, ar condicionado",
        "Instrumentos a alugar",
        "Consumir alimentos e bebidas no local",
        "9 ou mais pessoas",
      ],
    },
  ];
  const promoOptions: PromoCardProps[] = [
    {
      title: "4 ensaios (8h)",
      discount: "-10%",
      desc: "4 ensaios com 2 horas cada - Individual ou Grupo Pequeno",
      originalPrice: "R$400,00",
      price: "R$360,00",
      features: ["Flexibilidade de horários", "Desconto"],
    },
    {
      title: "4 ensaios (8h)",
      discount: "-10%",
      desc: "4 ensaios com 2 horas cada - Grupo Grande",
      originalPrice: "R$480,00",
      price: "R$432,00",
      features: ["Flexibilidade de horários", "Desconto"],
    },
  ];
  return (
    <Box sx={{ backgroundColor: "#151A27" }}>
      <Header />
      <Box
        sx={{
          padding: { xs: "2em 1em", md: "4em" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1em",
            flexDirection: "column",
            mb: { xs: 4, md: 0 },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "1em" }}>
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
          </Box>
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              width: "100%",
              maxWidth: "60%",
              textAlign: "center",
              color: "#B4BABC",
              fontSize: { xs: "1rem", md: "1.125rem" },
            }}
          >
            O melhor custo-benefício do ABC e região: Equipamentos de ponta com
            preços acessíveis.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
          gap: "2em",
          padding: { xs: "2em 1em", md: "2em 16em" },
        }}
      >
        {priceOptions.map((opt) => (
          <Box key={opt.title} sx={{ width: { xs: "100%", md: "30%" } }}>
            <PriceCard {...opt} />
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          backgroundColor: "rgba(64, 70, 87, 0.5)",
          p: { xs: "2em 1em", md: "2em 8em" },
          mt: "2em",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontWeight: "600",
            fontSize: { xs: "16px", md: "22px" },
            fontFamily: "Poppins, sans-serif",
            mb: 1,
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
            mb: 2,
          }}
        >
          Economize garantindo um pacote de ensaios!
        </Typography>
        <Box
          sx={{
            padding: "2em",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: { xs: "column", md: "row" },
            gap: "2em",
          }}
        >
          {promoOptions.map((opt) => (
            <Box key={opt.title} sx={{ width: { xs: "100%", md: "25%" } }}>
              <PromoCard {...opt} />
            </Box>
          ))}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Precos;
