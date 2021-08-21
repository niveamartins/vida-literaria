const userInfoModel = require("../models/userInfoModel");
const bcrypt = require("bcrypt");

module.exports = {
  async signUp(req, res) {
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

    const key = crypto.randomBytes(6).toString("hex")

    let insert = await userInfoModel.insertUser({
      STR_UserKey: key,
      STR_Name: req.body.name,
      STR_Password: bcrypt.hashSync(req.body.password + key, 10),
      STR_Email: req.body.email,
    });
    
    if (insert !== undefined) {
      return res.status(200).send("Cadastrado com sucesso");
    } else {
      return res.status(500).send("Não foi possível cadastrar o usuário.");
    }
  },

  async signIn(req, res) {
    if (req.body.password === undefined || req.body.email === undefined) {
      return res.status(500).send({
        error_msg: "Verifique se os campos obrigatórios estão preenchidos.",
      });
    }

    const userFound = await userInfoModel.getUserbyEmail(req.body.email);

    let password;

    userFound
      ? (password = req.body.password + userFound.STR_UserKey)
      : res.status(500).send("E-mail ou senha inválidos");
    
      bcrypt.compareSync(password, userFound.STR_Password)
      ? res.status(200).send("Usuário encontrado")
      : res.status(500).send("E-mail ou senha inválidos");
  },
};
