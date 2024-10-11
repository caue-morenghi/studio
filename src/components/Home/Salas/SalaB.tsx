import { Box, Typography } from "@mui/material";
import img1 from "../../../data/assets/sala21.png";
import img2 from "../../../data/assets/sala22.png";
import img3 from "../../../data/assets/sala23.png";
import img4 from "../../../data/assets/sala24.png";
import { Check } from "@mui/icons-material";

export const SalaB = () => {
    return (
        <Box width="100%" sx={{ padding: "5em", display: "flex" }}>
            <Box width="50%" sx={{ padding: "3em 5em", color: "#fff", textAlign: "left", display: "flex", gap: "2em", flexDirection: "column" }}>
                <Typography sx={{ fontWeight: "600", fontSize: "35px", fontFamily: "Poppins, sans-serif",  }}>Sala B</Typography>
                <Box sx={{ display: "flex", gap: "2em" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: ".5em" }}>
                        <Check sx={{ color: "#03A9F4" }}/>
                        <Typography sx={{ fontFamily: "Poppins, sans-serif",  }}>Ensaios</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: ".5em" }}>
                        <Check sx={{ color: "#03A9F4" }}/>
                        <Typography sx={{ fontFamily: "Poppins, sans-serif",  }}>Reuniões e Social</Typography>
                    </Box>
                </Box>
                <Typography sx={{ fontFamily: "Poppins, sans-serif",  }}>Utilizada exclusivamente para ensaios, a sala de baixo foi construída em um espaço de Xm2, possibilitando o uso para artistas ou bandas de pequeno a grande porte.</Typography>
                <Typography sx={{ fontFamily: "Poppins, sans-serif",  }}>Sala moderna, espaçosa e com tratamento acústico planejado e altamente profissional. Espaço perfeito para ensaios com equipamentos de alta qualidade.</Typography>

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
                    EQUIPAMENTOS, DETALHES E GALERIA DA SALA B
                </button>
            </Box>

            <Box width="50%">
                <Box sx={{ padding: "1.5em", backgroundColor: "#252832", display: "flex", flexDirection: "column", borderRadius: "10px" }}>
                    <Box sx={{ display: "flex" }}>
                        <img src={img1} alt="Sala 1" style={{ width: "50%", height: "auto", boxSizing: "border-box" }} />
                        <img src={img2} alt="Sala 2" style={{ width: "50%", height: "auto", boxSizing: "border-box" }} />
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <img src={img3} alt="Sala 3" style={{ width: "50%", height: "auto", boxSizing: "border-box" }} />
                        <img src={img4} alt="Sala 4" style={{ width: "50%", height: "auto", boxSizing: "border-box" }} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};