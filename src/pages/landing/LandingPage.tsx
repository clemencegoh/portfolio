import { css } from "@emotion/css";
import { Avatar, Container, Typography } from "@mui/material";
import NavigateButton from "components/navigation/NavigateButton";
import { getImageURL } from "helpers/getImageURL";

export default function LandingPage() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        color: "var(--text-main)",
        minHeight: "78vh",
      }}
    >
      <section
        id="introduction"
        className={css`
          display: flex;
          flex-flow: column;
          justify-content: center;
          margin: 2rem 0;
          text-align: center;

          @media screen and (max-width: 600px) {
          }
        `}
      >
        <Avatar
          alt="Clemence Profile Pic"
          src={getImageURL("closeup_me.jpg")}
          sx={{
            margin: "2rem auto 0",
            height: "10rem",
            width: "10rem",
          }}
        />
        <Typography variant="h3" component="h1" margin="auto">
          Clemence Goh
        </Typography>
        <Typography variant="h5" margin="auto" component="h2">
          Software engineer | Web developer
        </Typography>
      </section>

      <section id="getting-around">
        <NavigateButton
          link="/portfolio/about"
          overText="Check it out!"
          underText="My interests and hobbies"
        />
      </section>
    </Container>
  );
}
