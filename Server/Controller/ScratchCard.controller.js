const ScratchCardModel = require("../model/ScratchCard.model");

module.exports.createScratchCard = async (req, res) => {
  try {
    await ScratchCardModel.create({ is_used: false });
  } catch (error) {
    return res.json({
      message: "Error While Creating the scratch card",
    });
  }

  return res.json({ message: "Card Created" });
};
