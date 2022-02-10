import { css } from "@emotion/css";
import {
  Button,
  Drawer,
  Fab,
  List,
  ListItem,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import ArticleIcon from "@mui/icons-material/Article";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import { Box } from "@mui/system";
import { ThemedIconButton } from "components/ThemedComponents";
import MenuIcon from "@mui/icons-material/Menu";

type Props = {
  theme: "theme-light" | "theme-dark";
  toggleTheme: () => void;
};

export default function Header({ theme, toggleTheme }: Props) {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <nav className={topnavStyle}>
        <Logo />

        <ul className={navItemStyle}>
          <li>
            <Link to="/portfolio/about">
              <Typography
                variant="button"
                component="a"
                className={css`
                  color: var(--text-main);
                `}
              >
                ABOUT
              </Typography>
            </Link>
          </li>
          <li>
            <Link to="/portfolio/projects">
              <Typography
                variant="button"
                component="a"
                className={css`
                  color: var(--text-main);
                `}
              >
                PROJECTS
              </Typography>
            </Link>
          </li>
          <li>
            <Button
              variant="contained"
              endIcon={<ArticleIcon />}
              onClick={() => {
                window.location.href = "https://clemencegoh.github.io/resume";
              }}
            >
              <span
                className={css`
                  margin-bottom: -3px;
                `}
              >
                Resume
              </span>
            </Button>
          </li>
          <li>
            <ThemedIconButton onClick={toggleTheme}>
              {theme === "theme-light" ? <LightModeIcon /> : <ModeNightIcon />}
            </ThemedIconButton>
          </li>
          <li className={`${mobileOnlyStyle} mobile-only`}>
            <ThemedIconButton onClick={toggleModal}>
              <MenuIcon />
            </ThemedIconButton>
          </li>
        </ul>
      </nav>

      <Box component="nav" aria-label="mailbox folders">
        <Drawer
          variant="temporary"
          open={modalOpen}
          onClose={toggleModal}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          PaperProps={{
            sx: {
              backgroundColor: theme === "theme-light" ? "#fff" : "#35363a",
              color: theme === "theme-light" ? "#000" : "#fff",
            },
          }}
        >
          <Box sx={{ width: "80vw", padding: "2rem 1rem" }} role="presentation">
            <List
              className={css`
                a {
                  font-size: large;
                  text-decoration: none;
                  color: var(--text-main);
                }
              `}
            >
              <ListItem>
                <Link to="/portfolio/about" onClick={toggleModal}>
                  <Typography
                    variant="button"
                    component="a"
                    className={css`
                      color: var(--text-main);
                    `}
                  >
                    ABOUT
                  </Typography>
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/portfolio/projects" onClick={toggleModal}>
                  <Typography
                    variant="button"
                    component="a"
                    className={css`
                      color: var(--text-main);
                    `}
                  >
                    PROJECTS
                  </Typography>
                </Link>
              </ListItem>

              <ListItem
                className={css`
                  margin-top: 2rem;
                `}
              >
                <Button
                  variant="contained"
                  endIcon={<ArticleIcon />}
                  onClick={() => {
                    window.location.href =
                      "https://clemencegoh.github.io/resume";
                  }}
                >
                  <span
                    className={css`
                      margin-bottom: -3px;
                    `}
                  >
                    Resume
                  </span>
                </Button>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Box>

      <CustomFab
        aria-label="toggle theme"
        variant="circular"
        color={theme === "theme-light" ? "primary" : "secondary"}
        onClick={toggleTheme}
      >
        {theme === "theme-light" ? <LightModeIcon /> : <ModeNightIcon />}
      </CustomFab>
    </>
  );
}

/**
 * Styles
 */
const topnavStyle = css`
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-between;
  padding: 1rem 1rem;
  background-color: var(--bg-main);
  z-index: 1;
`;

const navItemStyle = css`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  color: var(--text-main);

  li {
    margin: 0 1rem;

    a {
      text-decoration: none;
    }
  }

  @media screen and (max-width: 600px) {
    li:not(.mobile-only) {
      display: none;
    }
  }
`;

const mobileOnlyStyle = css`
  display: none;
  @media screen and (max-width: 600px) {
    display: flex;
  }
`;

const CustomFab = styled(Fab)`
  display: none;

  @media screen and (max-width: 600px) {
    display: inline-flex;
    position: fixed;
    bottom: 0;
    right: 0;
    transform: translate(-30%, -30%);
    z-index: 1;
  }
`;
