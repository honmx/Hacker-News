import { Stack } from "@mui/system";
import React, {FC} from "react"
import { INews } from "types/News";
import NewsItem from "./NewsItem";

interface Props {
  news: INews[]
}

const NewsList: FC<Props> = ({ news }) => {
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
