import { TextField, Container } from "@mui/material";
import React, { FC } from "react"

interface Props {
  filter: any;
  setFilter: any;
}

const SearchBar: FC<Props> = ({ filter, setFilter}) => {
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
