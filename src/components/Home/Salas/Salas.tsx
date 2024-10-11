import { Box, Typography } from "@mui/material"
import { SalaTecnica } from "./SalaTecnica"
import { SalaB } from "./SalaB"

export const Salas = () => {
    return (
        <Box width="100%" sx={{  textAlign: "center" }}>
            <Typography sx={{ color: "#fff", fontWeight: "600", fontSize: "60px", fontFamily: "Poppins, sans-serif" }}>SALAS</Typography>
            <SalaTecnica />
            <SalaB />
        </Box>
    )
}