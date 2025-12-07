DROP TABLE IF EXISTS user;
CREATE TABLE user (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  is_deleted INTEGER NOT NULL
);

DROP TABLE IF EXISTS session;
CREATE TABLE session (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  session TEXT NOT NULL,
  created_at TEXT NOT NULL,
  expired_at TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id)
);

DROP TABLE IF EXISTS action;
CREATE TABLE action (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  action TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL
);

DROP TABLE IF EXISTS permission;
CREATE TABLE permission (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER,
  action_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (action_id) REFERENCES action(id)
);

INSERT INTO user (id, username, password, is_deleted) VALUES
(NULL, 'admin', 'admin', 0),
(NULL, 'operator', 'operator', 0);

INSERT INTO action (id, action, description) VALUES
(NULL, 'GET:/user/view/all', 'view all user'),
(NULL, 'GET:/user/view/:id', 'view user with id'),
(NULL, 'POST:/user/create', 'create new user'),
(NULL, 'PUT:/user/update/:id', 'update user with id'),
(NULL, 'DELETE:/user/remove/:id', 'delete user');

INSERT INTO permission (id, user_id, action_id) VALUES
(NULL, 1, 1),
(NULL, 1, 2),
(NULL, 1, 3),
(NULL, 1, 4),
(NULL, 1, 5),
(NULL, 2, 1),
(NULL, 2, 2);
