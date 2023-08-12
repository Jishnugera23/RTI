const { Router } = require("express");
const { login, signup } = require("../Controller/Authority.controller");
const deserializeUser = require("../middleware/deserailizeUser");
const requireUser = require("../middleware/requireUser");
const { answerRTIController } = require("../Controller/RTI.controller");
const router = Router();

router.post("/login", login);
router.post("/signup", signup);

router.post("/answer", [deserializeUser, requireUser], answerRTIController);

module.exports = router;
