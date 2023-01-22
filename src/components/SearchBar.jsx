import { Input, TextField, Box, Container } from "@mui/material";
import React from "react"
import SearchIcon from '@mui/icons-material/Search';
// import s from "./SearchBar.module.css"

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
