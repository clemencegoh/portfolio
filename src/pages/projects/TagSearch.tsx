import { css } from "@emotion/css";
import { Chip, Grid, Paper } from "@mui/material";
import { BaseComponentProps } from "components/BaseComponent";
import React from "react";

type Props = {
  tags: Set<string>;
  selectedTags: Set<string>;
  toggleTag: (tagName: string) => void;
} & BaseComponentProps;

export default function TagSearch({ tags, selectedTags, toggleTag }: Props) {
  console.log(tags, selectedTags);
  return (
    <div
      className={css`
        display: flex;
        width: 88%;
        margin: 0 auto 1rem;
        color: var(--text-main);
      `}
    >
      {Array.from(tags.keys()).map((tag) => (
        <Chip
          sx={{ margin: "0 0.2rem" }}
          label={tag}
          color={selectedTags.has(tag) ? "success" : "default"}
          component="button"
          variant="outlined"
          clickable
          onClick={() => toggleTag(tag)}
        />
      ))}
    </div>
  );
}
