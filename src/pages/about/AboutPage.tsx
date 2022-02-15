import { css } from "@emotion/css";
import NavigateButton from "components/navigation/NavigateButton";
import {
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { getImageURL } from "helpers/getImageURL";

type workExperience = {
  role: string;
  name: string;
  year: string;
};

export default function AboutPage() {
  const workData: workExperience[] = [
    {
      role: "Software Engineer intern",
      name: "Grab",
      year: "2017 & 2018",
    },
    {
      role: "Full Stack developer",
      name: "DBS",
      year: "2019 - 2021",
    },
    {
      role: "Full Stack Developer",
      name: "iLex",
      year: "2021",
    },
    {
      role: "Software Engineer",
      name: "Facebook (Meta)",
      year: "2021 - present",
    },
  ];

  return (
    <Container
      maxWidth="xl"
      sx={{ minHeight: "80vh", marginTop: "2rem", color: "var(--text-main)" }}
    >
      <section className={css``}>
        <Typography variant="overline" gutterBottom>
          MY INTERESTS AND HOBBIES
        </Typography>

        <Typography variant="h5">I'd like to think of myself as a:</Typography>
        <Typography variant="h3" component="h1">
          Developer | Climber | Innovator
        </Typography>
      </section>

      <section id="background-and-experience">
        <Grid container>
          <Grid item xs={12} md={7} lg={5}>
            <Stack
              spacing={-16}
              sx={{
                margin: "2rem 0 1rem",
                alignItem: "flex-start",
                width: "100%",
              }}
            >
              <img
                alt="academic"
                src={getImageURL("grad-photo.jpg")}
                className={css`
                  height: 40vh;
                  margin-left: auto;
                `}
              />

              <Card
                sx={{
                  width: "50vw",
                  maxWidth: "32rem",
                  backgroundColor: "var(--bg-card)",
                  color: "var(--text-main)",
                  "@media screen and (max-width: 600px)": {
                    width: "74vw",
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    My Academic Background
                  </Typography>
                  <Typography paragraph>
                    Singapore University of Technology and Design, Class of 2019
                  </Typography>
                  <Typography>
                    Graduated with an Honours Degree in Information Systems,
                    with a major in Artificial Intelligence
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            lg={7}
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
          >
            <Card
              sx={{
                color: "var(--text-main)",
                backgroundColor: "var(--bg-card)",
                width: "100%",
                margin: "0 0 1rem 4rem",
                "@media screen and (max-width: 600px)": {
                  margin: "0",
                },
              }}
            >
              <CardContent>
                <Typography paragraph>
                  My engineering journey began here!
                </Typography>
                <Typography paragraph>
                  I studied general engineering for 1 year before selecting
                  Information Systems as my course instead of my initial choice
                  of Electrical Engineering
                </Typography>
                <Typography paragraph>
                  Being a young school, the choice of specialisation in SUTD was
                  limited to either Data Science, Big Data, or Security. It
                  wasn't until a project involving building a Decentralised
                  Application using python and flask that i discovered my
                  passion for web development.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
          >
            <Card
              sx={{
                color: "var(--text-main)",
                backgroundColor: "var(--bg-card)",
                width: "100%",
                marginRight: "2rem",
                "@media screen and (max-width: 600px)": {
                  margin: "2rem 0 0",
                },
              }}
            >
              <CardContent>
                <Typography paragraph>
                  I started my professional career as an intern at Grab, lucky
                  to get into the most amazing team using modern languages like
                  Golang and ReactJS to develop internal tools with an emphasis
                  on performance and reliability.
                </Typography>
                <Typography paragraph>
                  I then moved on to full-stack development - an essential skill
                  to touch all aspects of the booming fintech industry.
                </Typography>
                <Typography paragraph>
                  My interest pivoted towards frontend technologies gradually as
                  it became apparent that frontend development occurs at a much
                  faster pace since the logic involved is usually less complex.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack
              spacing={-12}
              sx={{
                margin: "1rem 0 2rem",
                alignItems: "flex-end",
              }}
            >
              <img
                alt="work-pictures"
                src={getImageURL("grab-intern-me.jpg")}
                className={css`
                  height: 40vh;
                  margin-right: auto;
                `}
              />

              <Card
                sx={{
                  width: "40vw",
                  maxWidth: "36rem",
                  backgroundColor: "var(--bg-card)",
                  color: "var(--text-main)",
                  "@media screen and (max-width: 600px)": {
                    width: "74vw",
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    My Work Experience
                  </Typography>
                  <Grid container spacing={2}>
                    {workData.map((item) => (
                      <>
                        <Grid item xs={4} display="flex" alignItems="center">
                          <Typography>{item.role}</Typography>
                        </Grid>
                        <Grid item xs={4} display="flex" alignItems="center">
                          <Typography fontWeight="bold">{item.name}</Typography>
                        </Grid>
                        <Grid
                          item
                          xs={4}
                          display="flex"
                          alignItems="center"
                          justifyContent="flex-end"
                        >
                          <Typography textAlign="end">{item.year}</Typography>
                        </Grid>
                      </>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Card
              sx={{
                width: "88%",
                maxWidth: "32rem",
                backgroundColor: "var(--bg-card)",
                color: "var(--text-main)",
                marginBottom: "-2rem",
                "@media screen and (max-width: 600px)": {
                  width: "74vw",
                },
              }}
            >
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  I love climbing
                </Typography>
                <Typography paragraph>
                  Bouldering has been a passion of mine since 2020!
                </Typography>
                <Typography paragraph>
                  It's fun and challenging since it involves both physical
                  fitness as well as problem-solving skills.
                </Typography>
                <Typography paragraph>Come say hi if you see me!</Typography>
              </CardContent>
            </Card>
            <div
              className={css`
                width: 100%;
                display: flex;
                justify-content: flex-end;
              `}
            >
              <img
                alt="climber photos"
                src={getImageURL("climber-1.jpg")}
                className={css`
                  width: 60%;
                  margin-left: auto;
                  @media screen and (max-width: 600px) {
                    width: 100%;
                  }
                `}
              />
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
          >
            <div
              className={css`
                width: 100%;
                display: flex;
                flex-flow: column;
              `}
            >
              <img
                alt="climbing-2"
                src={getImageURL("climber-3.jpg")}
                className={css`
                  height: 24rem;
                  width: auto;
                  margin: 1rem auto 0;
                  @media screen and (max-width: 600px) {
                    width: 100%;
                    height: auto;
                  }
                `}
              />
              <img
                alt="climbing-2"
                src={getImageURL("climber-4.jpg")}
                className={css`
                  height: 24rem;
                  width: auto;
                  margin: 1rem auto;
                  @media screen and (max-width: 600px) {
                    width: 100%;
                    height: auto;
                  }
                `}
              />
            </div>
          </Grid>
        </Grid>
      </section>
      {/**
       * todo: add some achievements when I finally do something noteworthy with my life
       **/}
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
