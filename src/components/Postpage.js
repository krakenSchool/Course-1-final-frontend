import React, { useState, useEffect } from "react";
import { Typography, Box, Container } from "@mui/material";
import ReactMarkdown from "react-markdown";
import { fetchPostContent } from "../utils/fetchPostContent";
import matter from "gray-matter";
import { HomepageHeader } from "./HomepageHeader";
import { useParams } from "react-router-dom";

const PostPage = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [date, setDate] = useState("");
  const [postContent, setPostContent] = useState("");
  const { slug } = useParams();

  useEffect(() => {
    fetchPostContent(slug).then((content) => {
      const matterResult = matter(content);
      setPostContent(matterResult.content);
      setTitle(matterResult.data.title);
      setSubtitle(matterResult.data.subtitle);
      setDate(matterResult.data.date);
    });
  }, [slug]);

  const markdownStyle = {
    "& img": {
      maxWidth: "100%",
      height: "auto",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
    },
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <HomepageHeader />
      <Box my={4} textAlign="center">
        <Typography variant="h2" color="textPrimary">
          {title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {subtitle}
          <br />
          {date}
        </Typography>
      </Box>

      <Box sx={markdownStyle}>
        <ReactMarkdown children={postContent} />
      </Box>
    </Container>
  );
};

export default PostPage;
