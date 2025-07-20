import {
  Facebook,
  Instagram,
  WhatsApp,
  YouTube,
  Menu,
} from "@mui/icons-material";
import {
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { ListItemLink } from "./ListItemLink";
import { Link } from "react-router-dom";
import logo from "../../../data/assets/logoazul.png";

export const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        "key" in event &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const menuItems = [
    { nome: "Início", link: "/" },
    { nome: "Estrutura", link: "/estrutura" },
    { nome: "Ensaios e Gravações", link: "/ensaiosegravacoes" },
    { nome: "Preços", link: "/precos" },
    // { nome: "Clientes", link: "/clientes" }
  ];

  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1em 2em",
        width: "100%",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Poppins, sans-serif",
          color: "#fff",
          fontWeight: 600,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box component="img" src={logo} height="40px" />
        AUDIO MAKER
      </Typography>

      <Box component="nav" sx={{ display: { xs: "none", md: "block" } }}>
        <ul
          style={{
            display: "flex",
            gap: "2em",
            fontFamily: "Plus Jakarta Sans, sans-serif",
            fontSize: "13px",
            color: "#fff",
            fontWeight: 500,
            listStyle: "none",
          }}
        >
          {menuItems.map((item) => (
            <Link
              to={`${item.link}`}
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <li
                key={item.link}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "#03A9F4"; // cor ao passar o mouse
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "#fff"; // cor original
                }}
              >
                {item.nome}
              </li>
            </Link>
          ))}
        </ul>
      </Box>

      <Box component="nav" sx={{ display: { xs: "none", md: "block" } }}>
        <ul
          style={{
            display: "flex",
            gap: "1em",
            listStyle: "none",
            color: "#fff",
          }}
        >
          <li>
            <Link
              to="https://wa.me/5511963139042"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <WhatsApp />
            </Link>
          </li>
          <li>
            <Link
              to="https://www.instagram.com/audiomakersbc/"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <Instagram />
            </Link>
          </li>
          <li>
            <Facebook />
          </li>
          <li>
            <YouTube />
          </li>
        </ul>
      </Box>

      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ display: { xs: "block", md: "none" }, color: "#fff" }}
        onClick={toggleDrawer(true)}
      >
        <Menu />
      </IconButton>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250, backgroundColor: "#151A27", color: "#fff" }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItemLink label="Início" to="/" onClick={() => toggleDrawer} />
            <ListItemLink
              label="Estrutura"
              to="/estrutura"
              onClick={() => toggleDrawer}
            />
            <ListItemLink
              label="Ensaios e Gravações"
              to="/ensaiosegravacoes"
              onClick={() => toggleDrawer}
            />
            <ListItemLink
              label="Preços"
              to="/precos"
              onClick={() => toggleDrawer}
            />
            {/* <ListItemLink
              label="Clientes"
              to="/clientes"
              onClick={() => toggleDrawer}
            /> */}
          </List>
          <List sx={{ display: "flex", gap: "1em", padding: "1em" }}>
            <Link
              to="https://wa.me/5511963139042"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <WhatsApp />
            </Link>
            <Link
              to="https://www.instagram.com/audiomakersbc/"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <Instagram />
            </Link>
            <Facebook />
            <YouTube />
          </List>
        </Box>
        <Box sx={{ flexGrow: 1, backgroundColor: "#151A27" }} />
      </Drawer>
    </Box>
  );
};
