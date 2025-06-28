import { Alarm } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export const Horarios = () => {
  return (
    <Box sx={{
        textAlign: "center",
        padding: { xs: "2em", md: "5em" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "5em",
        fontFamily: "Poppins, sans-serif"
      }}
    >
      <Typography
        sx={{
          color: "#fff",
          fontWeight: "600",
          fontSize: { xs: "38px", md: "45px", lg: "60px" },
          fontFamily: "inherit",
        }}
      >
        HORÁRIOS DE FUNCIONAMENTO
      </Typography>

      <Box sx={{ color: "#fff", display: "flex", gap: "2em", flexDirection: "column", alignItems: "center" }}>

        <Box sx={{ display: "flex", alignItems: "center", gap: "2em", flexDirection: { xs: "column", md: "row" } }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "1em" }}>
            <Alarm sx={{ fontSize: "24px" }}/>
            <Typography component="span" sx={{ fontSize: { xs: "20px", md: "24px" }, fontWeight: 600, fontFamily: "inherit" }}>Segunda-Feira:</Typography>
            <Typography component="span" sx={{ fontFamily: "inherit" }}> 08:00 - 02:00</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "1em" }}>
            <Alarm sx={{ fontSize: { xs: "20px", md: "24px" } }}/>
            <Typography component="span" sx={{ fontSize: { xs: "20px", md: "24px" }, fontWeight: 600, fontFamily: "inherit" }}>Terça-Feira:</Typography>
            <Typography component="span" sx={{ fontFamily: "inherit" }}> 08:00 - 02:00</Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "2em", flexDirection: { xs: "column", md: "row" } }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "1em" }}>
            <Alarm sx={{ fontSize: { xs: "20px", md: "24px" } }}/>
            <Typography component="span" sx={{ fontSize: { xs: "20px", md: "24px" }, fontWeight: 600, fontFamily: "inherit" }}>Quartas-Feira:</Typography>
            <Typography component="span" sx={{ fontFamily: "inherit" }}> 08:00 - 02:00</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "1em" }}>
            <Alarm sx={{ fontSize: { xs: "20px", md: "24px" } }}/>
            <Typography component="span" sx={{ fontSize: { xs: "20px", md: "24px" }, fontWeight: 600, fontFamily: "inherit" }}>Quintas-Feira:</Typography>
            <Typography component="span" sx={{ fontFamily: "inherit" }}> 08:00 - 02:00</Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "2em", flexDirection: { xs: "column", md: "row" } }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "1em" }}>
            <Alarm sx={{ fontSize: { xs: "20px", md: "24px" } }}/>
            <Typography component="span" sx={{ fontSize: { xs: "20px", md: "24px" }, fontWeight: 600, fontFamily: "inherit" }}>Sextas-Feira:</Typography>
            <Typography component="span" sx={{ fontFamily: "inherit" }}> 08:00 - 02:00</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "1em" }}>
            <Alarm sx={{ fontSize: { xs: "20px", md: "24px" } }}/>
            <Typography component="span" sx={{ fontSize: { xs: "20px", md: "24px" }, fontWeight: 600, fontFamily: "inherit" }}>Sábados:</Typography>
            <Typography component="span" sx={{ fontFamily: "inherit" }}> 08:00 - 02:00</Typography>
          </Box>
        </Box>
        
        <Box sx={{ display: "flex", alignItems: "center", gap: "1em", flexDirection: { xs: "row", md: "row" } }}>
          <Alarm sx={{ fontSize: { xs: "20px", md: "24px" } }}/>
          <Typography component="span" sx={{ fontSize: { xs: "20px", md: "24px" }, fontWeight: 600, fontFamily: "inherit" }}>Domingos:</Typography>
          <Typography component="span" sx={{ fontFamily: "inherit" }}> 08:00 - 02:00</Typography>
        </Box>

      </Box>
    </Box>
  );
};




