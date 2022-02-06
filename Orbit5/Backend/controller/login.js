const _MEMBER = require("../model/Member");

exports.addEmail = async function (req, res) {
  try {
    const addEmail = await _MEMBER.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        email: addEmail,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};

// get All memebers
exports.getEmail = async function (req, res) {
  try {
    var emails = await _MEMBER.find();

    res.status(201).json({
      status: "success",
      total: tot_mem,
      data: {
        email: emails,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};
