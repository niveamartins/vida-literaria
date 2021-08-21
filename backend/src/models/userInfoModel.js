const connection = require("../database/connection");

module.exports = {
  async insertUser(data) {
    let response;

    await connection("user_info")
      .insert(data)
      .returning("STR_UserKey")
      .then(function (res) {
        response = res[0]
      })
      .catch(function (err) {
          console.log(err)
          response = -1;
      });

      return response
  },
  async getUserbyKey(key) {
    let response;

    await connection("user_info")
      .where("STR_UserKey", key)
      .select("*")
      .then(function (user) {
        response = user[0];
      })
      .catch(function (err) {
        console.log(err)
        response = -1;
      });
  },
  async getUserbyEmail(email){
    let response;
    await connection("user_info")
    .where("STR_Email", email)
    .select("*")
    .then(function (user) {
        response = user[0];
    })
    .catch(function (err) {
        console.log(err)
        response = -1;
    });

    return response
  },
  async getUserID(key) {
    let response;
    await connection("user_info")
    .where("STR_UserKey", key)
    .select("*")
    .then(function (user) {
        response = user[0].SQ_User;
    })
    .catch(function (err) {
        console.log(err)
        response = -1;
    });

    return response;
  }
};
