import { Box, Typography } from "@mui/material"

export const Hero = () => {
    return (
        <Box sx={{ width: "100%", textAlign: "center", padding: "8em 0 20em 0" }}>
          <Typography fontSize="102px" variant="h1" fontFamily="Anton, sans-serif" sx={{
              background: 'linear-gradient(180deg, #fff, #fff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>STUDIO</Typography>
            <Typography fontSize="102px" variant="h1" fontFamily="Anton, sans-serif" sx={{
              background: 'linear-gradient(180deg, #fff, #7d7d7d)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: ".1em"
            }}>AUDIO MAKER</Typography>
            <Typography fontSize="17px" sx={{ color: "#B4BABC" }}>Desde 1998 com os espaços perfeitos para o seu som</Typography>
            <Typography fontSize="17px" sx={{ color: "#B4BABC", marginBottom: ".5em" }}>virar arte. Agende agora!</Typography>

            <button
              style={{
                cursor: "pointer",
                border: "none",
                borderRadius: "5px",
                fontSize: "17px",
                fontFamily: "Poppins, sans-serif", 
                backgroundColor: "#03A9F4", 
                color: "#fff", 
                padding: "10px 20px", 
                marginTop: "20px",
                boxShadow: "rgba(3, 169, 244, 0.25) 0px 54px 55px, rgba(3, 169, 244, 0.12) 0px -12px 30px, rgba(3, 169, 244, 0.12) 0px 4px 6px, rgba(3, 169, 244, 0.17) 0px 12px 13px, rgba(3, 169, 244, 0.09) 0px -3px 5px",
                transition: "transform 0.2s ease-in-out"
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              Agende uma sessão
            </button>
        </Box>
    )
}