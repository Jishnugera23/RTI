const { Router } = require("express");
const { createScratchCard } = require("../Controller/ScratchCard.controller");

const router = Router();

// router.get("/create",)
router.get("/create", createScratchCard);

module.exports = router;
