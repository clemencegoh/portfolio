import { Container } from "@mui/material";

type Props = {};

export default function AboutPage({}: Props) {
  return (
    <Container sx={{ minHeight: "80vh" }}>
      <article>Something here about me</article>
      <article>Something here about my achievements</article>
      <article>Something here about my hobbies & interests</article>
      <article>
        Stuff here about checking my most interesting project out
      </article>
    </Container>
  );
}
