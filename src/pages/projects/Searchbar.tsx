import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { BaseComponentProps } from "components/BaseComponent";
import React, { useEffect, useState } from "react";
import { useDebounce } from "hooks/useDebounce";

type Props = {
  placeholder?: string;
  onDebouncedChange?: (value: string) => void;
} & BaseComponentProps;

export default function Searchbar({ placeholder, onDebouncedChange }: Props) {
  const [searchInput, setSearchInput] = useState<string>("");
  const debouncedInput = useDebounce(searchInput, 500);

  useEffect(() => {
    onDebouncedChange && onDebouncedChange(debouncedInput);
  }, [debouncedInput, onDebouncedChange]);

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "88%",
        margin: "2rem auto",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder ?? "Search by name"}
        inputProps={{ "aria-label": "search" }}
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />
      <IconButton disabled sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
