import express from "express"
const router = express.Router()
import userController from "./../controllers/userController"

router.route('/post').post(userController.createUser)


module.exports = router