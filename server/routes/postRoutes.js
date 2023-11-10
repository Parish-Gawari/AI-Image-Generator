const express = require("express");
const { v2: cloudinary } = require("cloudinary");
require("dotenv").config();
const router = express.Router();
const PostSchema = require("../mongodb/models/post");
const Controller = require("../controllers/post.controllers");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

router.get("/", Controller.GET);

router.post("/", async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;
    const photoUrl = await cloudinary.uploader.upload(photo);
    console.log(photoUrl.secure_url);
    const newPost = new PostSchema({
      name,
      prompt,
      photo: photoUrl.secure_url,
    });
    await newPost.save();
    res.status(200).json({ success: true, data: newPost });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Unable to create a post, please try again",
    });
  }
});

module.exports = router;
