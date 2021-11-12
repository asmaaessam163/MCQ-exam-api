//@ts-ignore
const express = require("express");

const router = express.Router();
const Question = require("./models/question");

// Get all questions
router.get("/questions", async (req, res) => {
  var random = Math.floor(Math.random() * 5);
  const questions = await Question.find().skip(random).limit(5);
  res.send(questions);
});

module.exports = router;
