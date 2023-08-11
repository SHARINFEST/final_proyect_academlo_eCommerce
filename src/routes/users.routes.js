
const { Router } = require("express");
const {
  createUser,
  login,
  validateEmail,
} = require("../controllers/users.controlles");
const {
  createUserValidator,
  loginUserValidator,
} = require("../validators/user.validators");

const useRouter = Router();

useRouter.post("/users", createUserValidator, createUser);

useRouter.post("/users/login", loginUserValidator, login);

useRouter.post("/users/email-validate", validateEmail);

module.exports = useRouter;