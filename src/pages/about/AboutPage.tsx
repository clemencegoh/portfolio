import { css } from "@emotion/css";
import { Container, Typography } from "@mui/material";
import NavigateButton from "components/navigation/NavigateButton";

type Props = {};

export default function AboutPage({}: Props) {
  return (
    <Container
      sx={{ minHeight: "80vh", marginTop: "2rem", color: "var(--text-main)" }}
    >
      <section className={css``}>
        <Typography variant="overline" gutterBottom>
          MY INTERESTS AND HOBBIES
        </Typography>
        <Typography variant="h3" component="h1">
          Software engineer &
        </Typography>
        <Typography variant="h3" gutterBottom>
          innovation enthusiast
        </Typography>
      </section>
      <section
        className={css`
          margin-top: 4rem;
        `}
      >
        <Typography paragraph>
          I'm a developer specialising in web full-stack technologies, with an
          emphasis on frontend.
        </Typography>
      </section>
      <section>Something here about my hobbies & interests</section>
      <section id="navigate-to-projects">
        <NavigateButton
          link="/portfolio/projects"
          overText="Look deeper 👀"
          underText="See my projects"
        />
      </section>
    </Container>
  );
}
