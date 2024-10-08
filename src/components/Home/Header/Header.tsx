import { Facebook, Instagram, WhatsApp, YouTube } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"

export const Header = () => {
    return (
        <Box component="header" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1em 2em' }}>

            <Typography sx={{ fontFamily: "Poppins, sans-serif", color: '#fff', fontWeight: 600 }}>STUDIO AUDIO MAKER</Typography>

            <Box component='nav'>
                <ul style={{ display: 'flex', gap: '2em', fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: '13px', color: '#fff', fontWeight: 500, listStyle: 'none' }}>
                    <li>Início</li>
                    <li>Estrutura</li>
                    <li>Ensaios e Gravações</li>
                    <li>Preços</li>
                    <li>Clientes</li>
                    <li>Instrumentos</li>
                </ul>
            </Box>

            <Box component='nav'>
                <ul style={{ display: 'flex', gap: '1em', listStyle: 'none', color: '#fff' }}>
                    <li><WhatsApp /></li>
                    <li><Instagram /></li>
                    <li><Facebook /></li>
                    <li><YouTube /></li>
                </ul>
            </Box>

        </Box>
    )
}