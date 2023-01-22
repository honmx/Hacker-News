import { Stack } from "@mui/system";
import React from "react"
import { useSelector } from "react-redux";
import NewsItem from "../NewsItem/NewsItem";
import s from "./NewsList.module.css"

const NewsList = ({ news }) => {
  
  return (
    <Stack
      spacing={2}
      sx={{
        marginInline: "auto",
        mt: 3
      }}
    >
      {
        news.map(elem => <NewsItem key={elem.id} news={elem} />)
      }
    </Stack>
  )
};

export default NewsList;
