import React, { FC } from "react"
import { CircularProgress, Box } from "@mui/material";

const CenteredLoading: FC = () => {
  return (
    <Box sx={{
        marginInline: "auto !important",
        width: 50,
        height: 50
      }}
    >
    <CircularProgress />
  </Box>
  )
};

export default CenteredLoading;
