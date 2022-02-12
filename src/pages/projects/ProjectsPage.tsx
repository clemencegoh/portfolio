import { css } from "@emotion/css";
import { Outlet, useParams } from "react-router-dom";
import { projectsData } from "data/projects";
import Searchbar from "./Searchbar";
import { useState } from "react";
import { Container } from "@mui/material";
import TagSearch from "./TagSearch";

type Props = {};

export default function ProjectsPage({}: Props) {
  const { name } = useParams();

  const tags: Set<string> = new Set();
  projectsData.forEach((item) => {
    item.tags.forEach(tags.add, tags);
  });

  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());

  const toggleTag = (tagName: string) => {
    if (selectedTags.has(tagName)) {
      selectedTags.delete(tagName);
      setSelectedTags(selectedTags);
    } else {
      selectedTags.add(tagName);
    }
  };

  const showMe = (val: string) => {
    console.log(val);
  };

  const ProjectsSummary = (
    <Container>
      <Searchbar onDebouncedChange={showMe} />
      <TagSearch
        tags={tags}
        selectedTags={selectedTags}
        toggleTag={toggleTag}
      />
      Summary for projects
    </Container>
  );

  return <section>{name ? <Outlet /> : ProjectsSummary}</section>;
}
