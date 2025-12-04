import userModel from '../models/userModel.mjs'

const userController = {
  getViewAll : (req, res) => {
    res.json(userModel.getViewAll())
  },
  getViewId : (req, res) => {
    const id = req.params.id
    res.json(userModel.getViewId(id))
  },
  postCreate : (req, res) => {
    res.json(userModel.postCreate())
  },
  putUpdateId : (req, res) => {
    const id = req.params.id
    res.json(userModel.putUpdateId(id))
  },
  deleteRemoveId : (req, res) => {
    const id = req.params.id
    res.json(userModel.deleteRemoveId(id))
  }
}

export default userController
