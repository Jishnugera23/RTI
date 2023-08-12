const { Router } = require("express");
const {
  createRTIController,
  requestListController,
  requestDetailsController,
  get_request,
} = require("../Controller/RTI.controller");

const router = Router();

router.get("/create",get_request);
router.post("/create", createRTIController);
router.get("/list", requestListController);
router.get("/details/:id", requestDetailsController);  //Ye waala dekhna h abhi function

module.exports = router;
