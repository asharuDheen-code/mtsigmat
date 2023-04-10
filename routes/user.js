const router = require("express").Router();
const { createUser } = require("../controllers/user");
// const { protect, authorize } = require("../middleware/auth");

// router.post("/create_user", protect, authorize("customer"), createUser);
router.post("/create_user", createUser);

module.exports = router;
