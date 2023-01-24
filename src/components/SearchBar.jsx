import { TextField, Container } from "@mui/material";
import React from "react"

const SearchBar = ({ filter, setFilter}) => {
  return (
    <Container maxWidth="sm">
      <TextField 
        label="Search"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        fullWidth
      />
    </Container>
  )
};

export default SearchBar;
