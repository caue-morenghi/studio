import { Email, Facebook, Instagram, WhatsApp, YouTube } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export const Footer = () => {
    return (
        <Box sx={{ backgroundColor: "#1D212E", padding: "4em", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "Poppins, sans-serif" }}>
            <Box sx={{ display: "flex", flexDirection: "column", textAlign: "left", gap: "1em", width: "30%" }}>
                <Typography sx={{ fontFamily: "Poppins, sans-serif", color: '#fff', fontWeight: 600 }}>STUDIO AUDIO MAKER</Typography>
                <Typography sx={{ fontSize: "13px", fontFamily: "Poppins, sans-serif", color: "#A7AAB5" }}>Studio Audio Maker é o espaço ideal para suas gravações e ensaios. Aproveite nosso estúdio completo com equipamentos de ponta. Torne seus projetos musicais realidade com facilidade e qualidade. Reserve seu horário hoje e faça parte da nossa comunidade</Typography>
            </Box>

            <Box sx={{ display: "flex", gap: "2em" }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "1em" }}>
                    <Typography sx={{ fontSize: "13px",  fontFamily: "Poppins, sans-serif", color: "#5B5C61" }}>Estrutura</Typography>
                    <Typography sx={{ fontSize: "13px", fontFamily: "Poppins, sans-serif", color: "#A7AAB5" }}>Equipamentos</Typography>
                    <Typography sx={{ fontSize: "13px", fontFamily: "Poppins, sans-serif", color: "#A7AAB5" }}>Instrumentos</Typography>
                    <Typography sx={{ fontSize: "13px", fontFamily: "Poppins, sans-serif", color: "#A7AAB5" }}>Sala Técnica</Typography>
                    <Typography sx={{ fontSize: "13px", fontFamily: "Poppins, sans-serif", color: "#A7AAB5" }}>Sala B</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "1em" }}>
                    <Typography sx={{ fontSize: "13px",  fontFamily: "Poppins, sans-serif", color: "#5B5C61" }}>Contato</Typography>
                    <Typography sx={{ fontSize: "13px", fontFamily: "Poppins, sans-serif", color: "#A7AAB5" }}>Para gravações</Typography>
                    <Typography sx={{ fontSize: "13px", fontFamily: "Poppins, sans-serif", color: "#A7AAB5" }}>Para ensaios</Typography>
                    <Typography sx={{ fontSize: "13px", fontFamily: "Poppins, sans-serif", color: "#A7AAB5" }}>Informações</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "1em" }}>
                    <Typography sx={{ fontSize: "13px",  fontFamily: "Poppins, sans-serif", color: "#5B5C61" }}>Redes sociais</Typography>
                    <Box sx={{ display: "flex", gap: "1em" }}>
                        <WhatsApp sx={{ color: "#a7aab5" }}/>
                        <Instagram sx={{ color: "#a7aab5" }}/>
                        <Facebook sx={{ color: "#a7aab5" }}/>
                        <YouTube sx={{ color: "#a7aab5" }}/>
                        <Email sx={{ color: "#a7aab5" }}/>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};