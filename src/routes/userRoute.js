import express from "express";
const router = express.Router();
import userController from "./../controllers/userController";

router.route("/post").post(userController.createUser);
router.route("/allUser").get(userController.getUser);
router
  .route("/:id")
  .put(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
