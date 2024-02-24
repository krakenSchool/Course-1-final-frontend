export const fetchPostContent = async (slug) => {
  try {
    const response = await fetch(`/posts/${slug}.md`);
    if (!response.ok) {
      throw new Error("Post not found");
    }
    const content = await response.text();
    return content;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
};
