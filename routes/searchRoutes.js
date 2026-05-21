const express = require("express");

const router = express.Router();

const Post = require("../models/Post");


// CREATE POST
router.post("/posts", async (req, res) => {

  try {

    const post = new Post(req.body);

    await post.save();

    res.status(201).json(post);

  } catch (err) {

    res.status(500).json({
      error: err.message
    });

  }

});


// GET ALL POSTS
router.get("/posts", async (req, res) => {

  try {

    const posts = await Post.find();

    res.json(posts);

  } catch (err) {

    res.status(500).json({
      error: err.message
    });

  }

});


// TEXT SEARCH
router.get("/search", async (req, res) => {

  try {

    const {
      query,
      author,
      tag
    } = req.query;

    const filter = {};

    // TEXT SEARCH
    if (query) {

      filter.$text = {
        $search: query
      };

    }

    // FILTER BY AUTHOR
    if (author) {
      filter.author = author;
    }

    // FILTER BY TAG
    if (tag) {
      filter.tags = tag;
    }

    let posts;

    // IF USING TEXT SEARCH
    if (query) {

      posts = await Post.find(
        filter,
        {
          score: {
            $meta: "textScore"
          }
        }
      ).sort({
        score: {
          $meta: "textScore"
        }
      });

    } else {

      // NORMAL FILTER SEARCH
      posts = await Post.find(filter);

    }

    res.json(posts);

  } catch (err) {

    res.status(500).json({
      error: err.message
    });

  }

});

module.exports = router;