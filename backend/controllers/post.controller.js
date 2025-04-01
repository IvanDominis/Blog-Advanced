import Post from "../models/post.model.js";
import User from "../models/user.model.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).send(posts);
  } catch (error) {
    res.status(500).send("Failed to fetch posts!");
  }
};

export const getPost = async (req, res) => {
  const { slug } = req.params;
  const post = await Post.findOne({ slug });
  if (!post) return res.status(404).send("Post not found!");
  res.status(200).send(post);
};

export const createPost = async (req, res) => {
  const clerkUserId = req.auth.userId;
  if (!clerkUserId) return res.status(401).send("User not authenticated!");

  const user = await User.findOne({ clerkUserId });
  if (!user) return res.status(404).send("User not found!");

  const newPost = new Post({ user: user._id, ...req.body });
  try {
    await newPost.save();
    res.status(201).send("Post created successfully!", newPost);
  } catch (error) {
    res.status(400).send("Failed to create post!");
  }
};

export const deletePost = async (req, res) => {
  const clerkUserId = req.auth.userId;
  if (!clerkUserId) return res.status(401).send("User not authenticated!");

  try {
    const user = await User.findOne({ clerkUserId });
    const deletedpost = await Post.findOneAndDelete({
      _id: req.params.id,
      user: user._id,
    });
    if (!deletedpost)
      return res
        .status(404)
        .send("Post not found or you can delete only your posts!");
    res.status(200).send("Post deleted successfully!");
  } catch (error) {
    res.status(400).send("Failed to delete post!");
  }
};
