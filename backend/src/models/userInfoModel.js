const connection = require("../database/connection");

module.exports = {
  async create(data) {
    const { STR_UserKey, STR_Name, STR_Password, STR_Email } = data;

    await connection("user_info")
      .insert({
        STR_UserKey,
        STR_Name,
        STR_Password,
        STR_Email,
      })
      .then(function () {
        return 0;
      })
      .catch(function () {
        return -1;
      });
  },
  async getUser(key) {
    let user = await connection("user_info")
      .where("STR_UserKey", key)
      .select("*")
      .then(function () {
        return user;
      })
      .catch(function () {
        return -1;
      });
  },
};
