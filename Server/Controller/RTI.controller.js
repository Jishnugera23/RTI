const RTIModel = require("../model/RTI.model");
const ScratchCardModel = require("../model/ScratchCard.model");

async function createRTIController(req, res) {
  const { card_code } = req.body;
  // console.log(req.body);
  try {
    const isValid = await ScratchCardModel.findOne({
      _id: card_code,
      is_used: false,
    });

    if (!isValid) {
      return res.status(400).json({ message: "Invalid Card" });
    }

    await ScratchCardModel.updateOne({
      _id: card_code},
      {is_used: true,
      used_date: new Date(),
    });

    await RTIModel.create({ ...req.body });
  } catch (error) {
    return res.json({
      errored:error,
      message: "Error While Filing the RTI",
    });
  }

  return res.json({ message: "RTI Filed" });
}

const answerRTIController = async (req, res) => {
  const { rti_id, answer } = req.body;
  const rti = await RTIModel.findOne({ _id: rti_id });
  if (!rti) {
    return res.json({
      message: "Invalid RTI",
    });
  }

  if (rti.public_authority !== res.locals.user.name) {
    return res.json({
      message: "You cannot answer this question",
    });
  }

  await RTIModel.updateOne(
    { _id: rti_id },
    { $set: { answer, answer_date: new Date() } }
  );

  return res.json({ message: "Answer Set" });
};

const requestListController = async (req, res) => {
  const { authority } = req.query;

  const list = await RTIModel.find({ public_authority: authority }).lean();

  return res.json({
    body: list,
    isSuccess: true,
  });
};

const requestDetailsController = async (req, res) => {
  const { id } = req.params;

  const rti = await RTIModel.findOne({ _id: id });
  return res.json({
    body: rti,
    isSuccess: true,
  });
};
const get_request = async (req,res) =>{
  return res.sendFile(__dirname +"/index.html");
}
module.exports = {
  createRTIController,
  answerRTIController,
  requestListController,
  requestDetailsController,
  get_request,
};
