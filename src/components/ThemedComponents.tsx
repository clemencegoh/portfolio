import { IconButton, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const ThemedIconButton = styled(IconButton)`
  color: var(--text-main);
`;

export const ThemedLink = styled(Link)`
  text-decoration: none;
  color: var(--text-main);
`;
