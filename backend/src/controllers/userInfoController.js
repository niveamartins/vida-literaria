const userInfoModel = require("../models/userInfoModel");

module.exports = {
  async createUser(req, res) {
    let parse_email =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (
      req.body.name === undefined ||
      req.body.password === undefined ||
      req.body.email === undefined
    ) {
      return res.status(500).send({
        error_msg: "Verifique se os campos obrigatórios estão preenchidos.",
      });
    }

    if (!parse_email.test(req.body.email)) {
      return res.status(500).send({
        error_msg: "Email inválido.",
      });
    }

    var crypto = require("crypto");

    const insert = await userInfoModel.insertUser({
      STR_UserKey: crypto.randomBytes(6).toString('hex'),
      STR_Name: req.body.name,
      STR_Password: req.body.password,
      STR_Email: req.body.email,
    });

    if (insert === 0) {
        return res.status(200).send("Cadastrado com sucesso");
    } else {
        return res.status(500).send("Não foi possível cadastrar o usuário.");
    }
  },

  async getUser(req, res) {
    
  }
};
