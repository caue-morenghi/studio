import { Box, Typography } from "@mui/material"

export type CaixaProps = {
    nome: string
    descricao: string
    img: string
}

export const Caixa  = ({nome, descricao, img}: CaixaProps) => {
    return <Box sx={{ backgroundColor: "rgba(64, 70, 87, 0.5)", padding: "2em", borderRadius: "10px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: { xs: "100%", md: "30%" } }}>
        <Typography sx={{ color: "#fff", fontWeight: "600", fontSize: { xs: "16px", md: "22px" }, fontFamily: "Poppins, sans-serif" }}>{nome}</Typography>
        <Box component="img" src={img} alt={nome} sx={{ width: "100%", height: "auto", marginTop: "1em", borderRadius: "8px" }} />
        <Typography sx={{ color: "#B4BABC", fontSize: { xs: "10px", md: "14x" }, fontFamily: "Poppins, sans-serif", textAlign: "center", marginTop: "2em" }}>{descricao}</Typography>
    </Box>
}