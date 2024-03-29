"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_1 = __importDefault(require("../controller/auth"));
var auth_2 = __importDefault(require("../validation/auth"));
var route = express_1.Router();
// route.get("/user", AuthController.get_user_by_email);
// route.get("/users", AuthController.list_of_users);
route.get("/users", auth_1.default.is_Email_Verified);
route.post("/login", auth_2.default.login, auth_1.default.login);
route.post("/register", auth_2.default.register, auth_1.default.register);
exports.default = route;
