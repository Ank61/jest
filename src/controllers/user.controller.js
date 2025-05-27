const service = require("../services/user.service");

exports.getAllUsers = async (req, res) => {
  const users = await service.getAll();
  res.json(users);
};

exports.createUser = async (req, res) => {
  const user = await service.create(req.body);
  res.status(201).json(user);
};
