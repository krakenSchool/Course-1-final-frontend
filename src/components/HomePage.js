import { useLoadAllPosts } from "../utils/getPostMetadata";
import { HomepageHeader } from "./HomepageHeader";
import PostPreview from "./PostPreview";
import { Grid, Box } from "@mui/material";

const HomePage = () => {
  const postMetadata = useLoadAllPosts();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mx: "150px",
        alignItems: "center",
      }}
    >
      <HomepageHeader />
      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: "center",
          width: { xs: "350px", md: "auto" },
        }}
      >
        {postPreviews.map((post) => (
          <Grid
            item
            xs={12}
            md={3}
            key={post.key}
            sx={{
              border: "1px solid black",
              borderRadius: "15px",
              margin: "10px",
            }}
          >
            {post}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomePage;
 