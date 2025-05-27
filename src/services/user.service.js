const User = require("../models/user.model");

exports.getAll = async () => await User.find();
exports.create = async (data) => await User.create(data);
