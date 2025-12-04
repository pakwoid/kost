import sqlite from 'node:sqlite'
const db = new sqlite.DatabaseSync(process.env.DBNAME)

const userModel = {
  getViewAll : () => {
    const data = {
      'result' : 'userModel.getViewAll'
    }
    return data
  },
  getViewId : (id) => {
    const data = {
      'id' : id,
      'result' : 'userModel.getViewId'
    }
    return data
  },
  postCreate : () => {
    const data = {
      'result' : 'userModel.postCreate'
    }
    return data
  },
  putUpdateId : (id) => {
    const data = {
      'id' : id,
      'result' : 'userModel.putUpdateId'
    }
    return data
  },
  deleteRemoveId : (id) => {
    const data = {
      'id' : id,
      'result' : 'userModel.deleteRemoveId'
    }
    return data
  }
}

export default userModel
