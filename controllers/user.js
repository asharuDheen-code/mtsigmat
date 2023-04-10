const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    const response = await User.create(req.body);
    res.status(200).json({
      success: true,
      message: "succefully registered",
      user: req.body,
      //   response,
    });
  } catch (err) {
    res.status(204).json({
      success: false,
      message: err,
    });
  }
};
