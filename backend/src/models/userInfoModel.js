const connection = require("../database/connection");

module.exports = {
  async insertUser(data) {
    await connection("user_info")
      .insert(data)
      .catch(function () {
        return -1;
      });
    return 0;
  },
  async getUser(key) {
    await connection("user_info")
      .where("STR_UserKey", key)
      .select("*")
      .then(function (user) {
        return user[0];
      })
      .catch(function () {
        return -1;
      });
  },
  async getUserID(key) {
    await connection("user_info")
    .where("STR_UserKey", key)
    .select("*")
    .then(function (user) {
      return user[0].SQ_User;
    })
    .catch(function () {
      return -1;
    });
  }
};
