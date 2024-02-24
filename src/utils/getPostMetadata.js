import { useState, useEffect } from "react";
import matter from "gray-matter";

const loadAllPosts = async () => {
  const postsDirectory = "/posts"; // Assuming the 'posts' folder is in the 'public' directory
  // List of file names, replace with actual file names or fetch from a directory listing API
  const fileNames = [
    "post1.md",
    "post2.md",
    "post3.md",
    "post4.md",
    "post5.md",
  ];

  const postsPromises = fileNames.map(async (fileName) => {
    const response = await fetch(`${postsDirectory}/${fileName}`);
    const fileContents = await response.text();
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
    };
  });

  return Promise.all(postsPromises);
};

export const useLoadAllPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadAllPosts().then((fetchedPosts) => {
      setPosts(fetchedPosts);
    });
  }, []);

  return posts;
};
