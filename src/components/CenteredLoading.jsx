import React from "react"
import { CircularProgress, Box } from "@mui/material";

const CenteredLoading = (props) => {
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
