import {
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

type IListItemLinkProps = {
  to: string;
  label: string;
  onClick: () => void;
};

export const ListItemLink = ({
  label,
  onClick,
  to,
}: IListItemLinkProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    onClick();
    navigate(to);
  };

  return (
    <ListItemButton onClick={handleClick}>
      <ListItemText primary={label} sx={{ fontFamily: "Poppins, sans-serif" }}/>
    </ListItemButton>
  );
};
