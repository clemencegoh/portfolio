import { css } from "@emotion/css";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { ThemedLink } from "components/ThemedComponents";
import { projectData } from "data/projects";
import { getImageURL } from "helpers/getImageURL";
import React from "react";

type Props = {
  data: projectData[];
};

export default function SearchResultsContainer({ data }: Props) {
  return (
    <div
      className={css`
        display: grid;
        grid-gap: 0.5rem;
        width: 88%;
        grid-template-columns: 1fr 1fr 1fr;
        margin: auto;

        @media screen and (max-width: 600px) {
          grid-template-columns: 1fr;
        }
      `}
    >
      {data.map((item) => (
        <Card
          sx={{ margin: "auto", backgroundColor: "var(--bg-card)" }}
          key={`item-key-${item.innerName}`}
        >
          <CardActionArea>
            <ThemedLink to={`${item.innerName}`}>
              <CardMedia
                component="img"
                height="180"
                sx={{ objectFit: "contain", padding: "1rem 0" }}
                image={getImageURL(item.teaserSrc)}
                alt={`teaser image for ${item.name}`}
              />
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {item.name}
                </Typography>
                <Typography variant="body2" paragraph>
                  {item.shortDescription}
                </Typography>
              </CardContent>
            </ThemedLink>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}
