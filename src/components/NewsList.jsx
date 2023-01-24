import { Stack } from "@mui/system";
import React from "react"
import NewsItem from "./NewsItem";

const NewsList = ({ news }) => {
  return (
    <Stack
      spacing={2}
      sx={{
        marginInline: "auto",
        mt: 3
      }}
    >
      {news.map(elem => <NewsItem key={elem.id} news={elem} />)}
    </Stack>
  )
};

export default NewsList;
