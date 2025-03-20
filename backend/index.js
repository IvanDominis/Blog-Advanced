import express from "express";
import userRouter from "./routes/user.route.js";
import commentRouter from "./routes/comment.route.js"; 
import postRouter from "./routes/post.route.js";
const app = express();

// app.get("/test", (req,res)=>{res.status(200).send("Its works")});
app.use("/user", userRouter);
app.use("/comment", commentRouter);
app.use("/post", postRouter);

console.log(process.env.test);

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});
