import { Box, Grid, Typography } from "@mui/material"
import img1 from "../../../data/assets/sobre1.png"
import img2 from "../../../data/assets/sobre2.png"
import img3 from "../../../data/assets/sobre3.png"
import img4 from "../../../data/assets/sobre4.png"
import img5 from "../../../data/assets/sobre5.png"
import img6 from "../../../data/assets/sobre6.png"

export const Sobre = () => {
    return (
        <Box width="100%" sx={{ backgroundColor: "#212739", padding: "5em 15em", display: "flex", clipPath: "polygon(0 10%, 100% 0, 100% 100%, 50% 90%, 0 100%)", mt: -20}}>

            <Box width="50%" sx={{ marginTop: "10em", display: "flex", flexDirection: "column", gap: "2em", textAlign: "left" }}>
                <Typography sx={{ color: "#fff", fontWeight: "600", fontSize: "60px", fontFamily: "Poppins, sans-serif",  }}>SOBRE O ESTÚDIO</Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5em" }}>
                    <Typography sx={{ color: "#fff", fontFamily: "Poppins, sans-serif",  }}>Em 1998, movidos pela paixão pela música e observando a carência na região do ABC de espaços que pudessem oferecer opções atrativas para o mercado música, Fábio Lopes e Nelson Ribeiro iniciaram um projeto para pequenas produções e ensaios de pequenos grupos no bairro assunção em São Bernardo.</Typography>

                    <Typography sx={{ color: "#fff", fontFamily: "Poppins, sans-serif",  }}>Pouco tempo depois em função da crescente procura, nascia a idéia de um projeto maior que se consolidou em um novo estúdio localizado no bairro Planalto em São Bernardo.</Typography>

                    <Typography sx={{ color: "#fff", fontFamily: "Poppins, sans-serif",  }}>O Estúdio Áudio Maker iniciou suas atividades no ano de 2001 com o propósito de oferecer na região do ABC um espaço versátil, que pudesse atender com qualidade tanto trabalhos de gravação quanto ensaios de bandas.</Typography>
                </Box>

            </Box>

            <Box width="50%" sx={{ padding: "5em" }}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <img src={img1} alt="Sala 1" style={{ width: "200px" }} />
                        <img src={img2} alt="Sala 2" style={{ width: "200px" }} />
                        <img src={img3} alt="Sala 2" style={{ width: "200px" }} />
                    </Grid>
                    <Grid item xs={6}>
                        <img src={img4} alt="Sala 3" style={{ width: "200px" }} />
                        <img src={img5} alt="Sala 4" style={{ width: "200px" }} />
                        <img src={img6} alt="Sala 4" style={{ width: "200px" }} />
                    </Grid>
                </Grid>
            </Box>

        </Box>
    )
}