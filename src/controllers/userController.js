import User from "./../models/userModel"

exports.createUser = async (req, res, next) => {
    try {
        const user = await new User(req.body)
        return res.status(201).json({
            status: 'success',
            user
        })
    }
    catch (error) {
        return res.send(error.message)
    }
}
exports.getUser