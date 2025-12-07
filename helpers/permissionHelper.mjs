import permissionModel
  from '../models/permissionModel.mjs'

const permissionHelper = (req, res, next) => {
  req.action = req.method + ':'
  req.action += req.baseUrl + req.route.path

  // get userId from session
  // sessionModel.getUserId
  // const userId = 1 //admin
  const userId = 2 //operator

  if (permissionModel.getPermission(userId, req.action)) {
    next()
  } else {
    res.status(403)
    res.json({
      'message' : 'forbidden'
    })
  }
}

export default permissionHelper
