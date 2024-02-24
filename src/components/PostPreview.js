import React from "react";
import { Typography, Box, Link } from "@mui/material";

const PostPreview = (props) => {
  return (
    <Box>
      <Typography variant="body1">{props.date}</Typography>
      <Link href={`/posts/${props.slug}`} underline="none" color="inherit">
        <Typography variant="h6" component="h2">
          {props.title}
        </Typography>
      </Link>
      <Typography variant="body2">{props.subtitle}</Typography>
    </Box>
  );
};

export default PostPreview;
