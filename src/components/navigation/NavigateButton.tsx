import { css } from "@emotion/css";
import { Button, Typography } from "@mui/material";
import { ThemedLink } from "components/ThemedComponents";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React from "react";

type Props = {
  id?: string;
  link?: string;
  overText: string;
  underText: string;
};

export default function NavigateButton({
  id,
  link,
  overText,
  underText,
}: Props) {
  return (
    <div
      id={id}
      className={css`
        flex: 1;
        display: flex;
        justify-content: right;
        margin: 2rem 0;
      `}
    >
      <Button
        variant="text"
        sx={{ textTransform: "none" }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ThemedLink to={link ?? "#"}>
          <div
            className={css`
              display: flex;
              align-items: center;
              text-align: right;
            `}
          >
            <div>
              <Typography
                gutterBottom
                variant="overline"
                component="div"
                marginBottom="-0.5rem"
              >
                {overText}
              </Typography>
              <Typography variant="h5" component="div">
                {underText}
              </Typography>
            </div>
            <ChevronRightIcon sx={{ marginLeft: "1rem" }} />
          </div>
        </ThemedLink>
      </Button>
    </div>
  );
}
