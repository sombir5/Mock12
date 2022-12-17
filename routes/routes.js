const express = require("express");
const { allJob, addJob } = require("../controller/addPost");
const router = express.Router();

router.post("/post", addJob);
router.get("/get", allJob);
module.exports = router;