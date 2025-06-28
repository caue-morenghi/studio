import { Box, Typography } from "@mui/material"
import { SalaTecnica } from "./SalaTecnica"
import { SalaB } from "./SalaB"

export const Salas = () => {
    return (
        <Box width="100%" sx={{  textAlign: "center", marginTop: "5em" }}>
            <Typography sx={{ color: "#fff", fontWeight: "600", fontSize: { xs: "40px", md: "60px" }, fontFamily: "Poppins, sans-serif" }}>SALAS</Typography>
            <SalaTecnica />
            <SalaB />
        </Box>
    )
}