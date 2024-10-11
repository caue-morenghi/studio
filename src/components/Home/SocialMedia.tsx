import { Facebook, Instagram, WhatsApp, YouTube } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export const SocialMedia = () => {
    return (
        <Box sx={{ width: "100%" }}>
            <Box
                sx={{
                    margin: "0 5em",
                    backgroundColor: "rgba(64, 70, 87, 0.5)",
                    padding: "3em",
                    position: "relative",
                    top: "-80px",
                    borderRadius: "10px",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backdropFilter: "blur(10px)",
                }}
            >
                <Typography
                    sx={{
                        marginBottom: ".5em",
                        color: "#fff",
                        fontSize: "27px",
                        fontWeight: "600",
                        boxSizing: "border-box",
                        fontFamily: "Poppins, sans-serif",
                    }}
                >
                    Nos siga em nossas redes sociais!
                </Typography>
                <Box sx={{ display: "flex", gap: "5em" }}>
                    <Box sx={{ display: "flex", gap: ".5em" }}>
                        <WhatsApp sx={{ color: "#fff" }} />
                        <Typography
                            sx={{
                                fontWeight: "300",
                                fontFamily: "Poppins, sans-serif",
                                color: "#fff",
                            }}
                        >
                            WhatsApp
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: ".5em" }}>
                        <Instagram sx={{ color: "#fff" }} />
                        <Typography
                            sx={{
                                fontWeight: "300",
                                fontFamily: "Poppins, sans-serif",
                                color: "#fff",
                            }}
                        >
                            Instagram
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: ".5em" }}>
                        <Facebook sx={{ color: "#fff" }} />
                        <Typography
                            sx={{
                                fontWeight: "300",
                                fontFamily: "Poppins, sans-serif",
                                color: "#fff",
                            }}
                        >
                            Facebook
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: ".5em" }}>
                        <YouTube sx={{ color: "#fff" }} />
                        <Typography
                            sx={{
                                fontWeight: "300",
                                fontFamily: "Poppins, sans-serif",
                                color: "#fff",
                            }}
                        >
                            YouTube
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};