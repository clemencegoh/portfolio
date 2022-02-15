import { Outlet, useParams } from "react-router-dom";
import { projectData, projectsData } from "data/projects";
import Searchbar from "./Searchbar";
import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import TagSearch from "./TagSearch";
import { Set } from "immutable";
import SearchResultsContainer from "./SearchResultsContainer";
import { isTruthy } from "helpers/truthy";
import { containsAll } from "helpers/arrayOverlap";

type Props = {};

export default function ProjectsPage({}: Props) {
  const { name } = useParams();
  const [data, setData] = useState<projectData[]>(projectsData);

  const [tagFilter, setTagFilter] = useState<string[]>([]);
  const [nameFilter, setNameFilter] = useState<string>("");

  let tags: Set<string> = Set();
  projectsData.forEach((item) => {
    item.tags.forEach((tag) => {
      tags = tags.add(tag);
    });
  });

  useEffect(() => {
    let filteredData = projectsData;
    if (isTruthy(nameFilter)) {
      filteredData = filteredData.filter((item) =>
        item.name.toLowerCase().includes(nameFilter.toLowerCase())
      );
    }
    if (isTruthy(tagFilter)) {
      filteredData = filteredData.filter((item) =>
        containsAll(item.tags, tagFilter)
      );
    }
    setData(filteredData);
  }, [tagFilter, nameFilter]);

  const tagFilters = (selected: Set<string>) => {
    setTagFilter(selected.toArray());
  };

  return (
    <section>
      <Container sx={{ minHeight: "80vh" }}>
        <Searchbar onDebouncedChange={setNameFilter} />
        <TagSearch tags={tags} onChangeSelected={tagFilters} />
        <SearchResultsContainer data={data} />
      </Container>
    </section>
  );
}
