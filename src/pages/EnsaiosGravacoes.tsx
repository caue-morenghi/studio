import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Typography,
  Grid,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { Header } from "../components/Home/Inicio/Header";
import { Footer } from "../components/Home/Footer";
import { WhatsApp } from "@mui/icons-material";

type FormData = {
  dateTime: string;
  numberOfHours: number;
  peopleCount: number;
  instrumentRental: "sim" | "nao";
  instruments: string[];
};

export const EnsaiosEGravacoes = () => {
  const { control, handleSubmit, watch } = useForm<FormData>({
    defaultValues: {
      dateTime: "",
      numberOfHours: 1,
      peopleCount: 1,
      instrumentRental: "nao",
      instruments: [],
    },
  });

  const numberOfHours = watch("numberOfHours");
  const peopleCount = watch("peopleCount");
  const instrumentRental = watch("instrumentRental");
  const selectedInstruments = watch("instruments");

  // Para 1 a 8 pessoas o valor é de R$50,00/hora; para 9 ou mais, R$60,00/hora.
  const pricePerHour = peopleCount <= 8 ? 50 : 60;
  const basePrice = pricePerHour * numberOfHours;
  const instrumentsAdditional =
    instrumentRental === "sim" && selectedInstruments
      ? selectedInstruments.length * 30
      : 0;
  const total = basePrice + instrumentsAdditional;

  const instrumentOptions = [
    "Pratos de bateria",
    "Guitarra Fender Squier Stratocaster",
    "Guitarra Tagima Vulcan",
    "Guitarra EVH Frankenstrat",
    "Baixo Stringberg CLB25A 5 Cordas",
    "Teclado Yamaha PSS-F30",
    "Violão 7 Cordas Rozini Pro",
    "Violão de Aço Aria FET-DLX",
  ];

  const onSubmit = (data: FormData) => {
    const msg = `Ensaio:
Data e hora: ${new Date(data.dateTime).toLocaleString()};
Número de horas: ${data.numberOfHours};
Número de pessoas: ${data.peopleCount};
Aluguel de instrumento: ${data.instrumentRental};
Instrumentos: ${data.instruments.join(", ")};
Total: R$${total.toFixed(2)}`;
    window.open(
      `https://wa.me/5511963139042?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <Box sx={{ backgroundColor: "#151A27", minHeight: "100vh" }}>
      <Header />
      <Box sx={{ padding: "4em", maxWidth: 1120, mx: "auto" }}>
        <Typography
          sx={{
            color: "#fff",
            fontWeight: 600,
            fontSize: { xs: "2.5rem", md: "4rem" },
            mb: 4,
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Ensaios
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: "#2C2F3A",
                p: 3,
                borderRadius: "8px",
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: 500,
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                  mb: 2,
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Preços de Ensaios
              </Typography>
              <Typography sx={{ color: "#B4BABC", mb: 1 }}>
                Ensaio Individual: R$50,00 / hora
              </Typography>
              <Typography sx={{ color: "#B4BABC", mb: 1 }}>
                Ensaio em Grupo: R$50,00 / hora
              </Typography>
              <Typography sx={{ color: "#B4BABC", mb: 1 }}>
                Ensaio em Grupo Grande: R$60,00 / hora
              </Typography>
              <Typography sx={{ color: "#B4BABC", mb: 1 }}>
                Aluguel de instrumento: R$30,00 por ensaio
              </Typography>
              <Typography sx={{ color: "#B4BABC" }}>
                Pacote promocional: +55 (11) 96313-9042
              </Typography>
            </Box>
            <Button
              type="submit"
              sx={{
                backgroundColor: "#03A9F4",
                color: "#fff",
                "&:hover": { backgroundColor: "#0288D1" },
                mt: 2,
                padding: ".5em 2em",
              }}
              endIcon={<WhatsApp />}
              href="https://wa.me/5511963139042?text=Gostaria de agendar um ensaio"
            >
              OU Agendar diretamente no WhatsApp
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{ display: "flex", flexDirection: "column", gap: "1.5em" }}
            >
              <Box>
                <Typography sx={{ color: "#fff", fontWeight: 600, mb: 1 }}>
                  Data e Hora
                </Typography>
                <Controller
                  name="dateTime"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="datetime-local"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      size="small"
                      required
                      InputProps={{
                        sx: { backgroundColor: "#fff", borderRadius: "4px" },
                      }}
                    />
                  )}
                />
              </Box>
              <Box>
                <Typography sx={{ color: "#fff", fontWeight: 600, mb: 1 }}>
                  Número de Horas
                </Typography>
                <Controller
                  name="numberOfHours"
                  control={control}
                  render={({ field }) => (
                    <FormControl
                      fullWidth
                      size="small"
                      sx={{ backgroundColor: "#fff", borderRadius: "4px" }}
                      required
                    >
                      <Select {...field}>
                        {[1, 2, 3, 4, 5].map((h) => (
                          <MenuItem key={h} value={h}>
                            {h} hora{h > 1 && "s"}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )}
                />
              </Box>
              <Box>
                <Typography sx={{ color: "#fff", fontWeight: 600, mb: 1 }}>
                  Número de Pessoas
                </Typography>
                <Controller
                  name="peopleCount"
                  control={control}
                  render={({ field }) => (
                    <FormControl
                      fullWidth
                      size="small"
                      sx={{ backgroundColor: "#fff", borderRadius: "4px" }}
                      required
                    >
                      <Select {...field} label="Número de pessoas">
                        {Array.from({ length: 20 }, (_, i) => i + 1).map(
                          (num) => (
                            <MenuItem key={num} value={num}>
                              {num} pessoa{num > 1 && "s"}
                            </MenuItem>
                          )
                        )}
                      </Select>
                    </FormControl>
                  )}
                />
              </Box>
              <Box>
                <Typography sx={{ color: "#fff", fontWeight: 600, mb: 1 }}>
                  Aluguel de Instrumento
                </Typography>
                <Controller
                  name="instrumentRental"
                  control={control}
                  render={({ field }) => (
                    <FormControl
                      fullWidth
                      size="small"
                      sx={{ backgroundColor: "#fff", borderRadius: "4px" }}
                      required
                    >
                      <Select {...field} label="Aluguel de instrumento">
                        <MenuItem value="sim">Sim</MenuItem>
                        <MenuItem value="nao">Não</MenuItem>
                      </Select>
                    </FormControl>
                  )}
                />
              </Box>
              {instrumentRental === "sim" && (
                <Box>
                  <Typography sx={{ color: "#fff", fontWeight: 600, mb: 1 }}>
                    Instrumentos para Aluguel
                  </Typography>
                  <Controller
                    name="instruments"
                    control={control}
                    render={({ field }) => (
                      <FormControl
                        fullWidth
                        size="small"
                        sx={{ backgroundColor: "#fff", borderRadius: "4px" }}
                        required
                      >
                        <Select {...field} multiple label="Instrumentos">
                          {instrumentOptions.map((inst) => (
                            <MenuItem key={inst} value={inst}>
                              {inst}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    )}
                  />
                </Box>
              )}
              <Box
                sx={{
                  backgroundColor: "rgba(64,70,87,0.7)",
                  p: "1em",
                  borderRadius: "8px",
                }}
              >
                <Typography sx={{ color: "#fff", fontWeight: 600 }}>
                  Total: R${total.toFixed(2)}
                </Typography>
              </Box>
              <Button
                type="submit"
                sx={{
                  backgroundColor: "#03A9F4",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#0288D1" },
                }}
                endIcon={<WhatsApp />}
              >
                Agendar
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Seção de Gravações */}
        <Box sx={{ mt: 15 }}>
          <Typography
            sx={{
              color: "#fff",
              fontWeight: 600,
              fontSize: { xs: "2.5rem", md: "4rem" },
              mb: 4,
              fontFamily: "Poppins, sans-serif",
              textAlign: "left",
            }}
          >
            Gravações
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "left" }}>
            <Button
              sx={{
                backgroundColor: "#03A9F4",
                color: "#fff",
                "&:hover": { backgroundColor: "#0288D1" },
                padding: ".5em 2em",
              }}
              endIcon={<WhatsApp />}
              href="https://wa.me/551193366542?text=Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20grava%C3%A7%C3%A3o"
            >
              Orçamento de gravação
            </Button>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default EnsaiosEGravacoes;
