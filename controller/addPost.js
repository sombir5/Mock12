const JobPost = require("../modal/post.modal");
const addJob = async (req, res) => {
  try {
    let job = await JobPost.create(req.body);
    job.save();
    res.send({ job, message: "job Added" });
  } catch (error) {
    console.log(error.message);
  }
};
const allJob = async (req, res) => {
  let {
    page = 1,
    limit = 10,
    sortBy = "postedAt",
    order = "latest",
    role,
    language,
  } = req.query;
  try {
    if (language && role) {
      let jobs = await JobPost.find({ language: language, role: role })
        .skip((page - 1) * limit)
        .limit(limit)
        .sort({ [sortBy]: order === "latest" ? 1 : -1 });
      let nos = jobs.length;
      return res.send({ data: jobs, totalPages: Math.ceil(nos / limit) });
    } else if (role) {
      // console.log(language);
      let jobs = await JobPost.find({ role: role })
        .skip((page - 1) * limit)
        .limit(limit)
        .sort({ [sortBy]: order === "latest" ? 1 : -1 });
      let nos = jobs.length;
      return res.send({ data: jobs, totalPages: Math.ceil(nos / limit) });
    } else if (language) {
      console.log(language);
      let jobs = await JobPost.find({ language: language })
        .skip((page - 1) * limit)
        .limit(limit)
        .sort({ [sortBy]: order === "latest" ? 1 : -1 });
      let nos = jobs.length;
      return res.send({ data: jobs, totalPages: Math.ceil(nos / limit) });
    } else {
      let jobs = await JobPost.find({})
        .skip((page - 1) * limit)
        .limit(limit)
        .sort({ [sortBy]: order === "latest" ? 1 : -1 });
      let nos = await JobPost.find().count();
      return res.send({ data: jobs, totalPages: Math.ceil(nos / limit) });
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { addJob, allJob };
