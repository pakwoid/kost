import sqlite from 'node:sqlite'
const db = new sqlite.DatabaseSync(process.env.DBNAME)

const permissionModel = {
  getPermission : (userId, action) => {
    const data = db.prepare(`
      SELECT id
      FROM permission
      WHERE user_id = ?
        AND action_id = (
          SELECT id
          FROM action
          WHERE action = ?
        )
    `).get(userId, action)

    return data
  }
}

export default permissionModel
