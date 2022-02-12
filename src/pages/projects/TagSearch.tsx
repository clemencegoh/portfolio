import { css } from "@emotion/css";
import { Chip } from "@mui/material";
import { BaseComponentProps } from "components/BaseComponent";
import { useState } from "react";
import { Set } from "immutable";

type Props = {
  tags: Set<string>;
  onChangeSelected?: (selected: Set<string>) => void;
} & BaseComponentProps;

export default function TagSearch({ tags, onChangeSelected }: Props) {
  const [selectedTags, setSelectedTags] = useState<Set<string>>(Set());
  const toggleTag = (tagName: string) => {
    let newSet;
    if (selectedTags.has(tagName)) {
      newSet = selectedTags.delete(tagName);
    } else {
      newSet = selectedTags.add(tagName);
    }
    setSelectedTags(newSet);
    onChangeSelected && onChangeSelected(newSet);
  };

  return (
    <div
      className={css`
        display: flex;
        flex-wrap: wrap;
        width: 88%;
        margin: 0 auto 1rem;
      `}
    >
      {Array.from(tags.keys()).map((tag) => (
        <Chip
          sx={{ margin: "0 0.5rem 0.5rem 0", fontSize: "medium" }}
          label={tag}
          color={selectedTags.has(tag) ? "info" : "primary"}
          component="button"
          variant={selectedTags.has(tag) ? "filled" : "outlined"}
          clickable
          onClick={() => toggleTag(tag)}
          key={`tag-key-${tag}`}
        />
      ))}
    </div>
  );
}
