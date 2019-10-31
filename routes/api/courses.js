const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load Validation
const validateCourseInput = require("../../validation/course");

// Load Profile Model
const Course = require("../../models/Course");
// Load User Model
const User = require("../../models/User");

router.get("/", (req, res) => {
  Course.find()
    .sort({ date: -1 })
    .then(courses => res.json(courses))
    .catch(err => res.status(404).json({ nocoursesfound: "No courses found" }));
});

router.get("/:id", (req, res) => {
  Course.findById(req.params.id)
    .then(course => res.json(course))
    .catch(err =>
      res.status(404).json({ nocourseound: "No course found with that ID" })
    );
});

router.post(
  "/",

  (req, res) => {
    const { errors, isValid } = validateCourseInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    const newCourse = new Course({
      title: req.body.title,
      featured: req.body.featured,
      published: req.body.published,
      tags: req.body.tags.split(","),
      youtube: req.body.youtube
    });

    newCourse.save().then(course => res.json(course));
  }
);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Course.findById(req.params.id)
      .then(course => {
        // Check for post owner
        if (course.user.toString() !== req.user.id) {
          return res.status(401).json({ notauthorized: "User not authorized" });
        }

        // Delete
        course.remove().then(() => res.json({ success: true }));
      })
      .catch(err =>
        res.status(404).json({ coursenotfound: "No course found" })
      );
  }
);

module.exports = router;
