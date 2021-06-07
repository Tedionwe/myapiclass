"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = __importDefault(require("./user"));
var Auth = /** @class */ (function () {
    function Auth() {
        this.users = [];
        var user1 = new user_1.default("sarah", "sarah@yahoo.com", "123456");
        var user2 = new user_1.default("paul", "paul@outlook.com", "password");
        this.users = [user1, user2];
    }
    Auth.prototype.login = function (email, pwd) {
        var user = this.users.find(function (e) {
            var isMatch = e.email === email && e.pwd === pwd;
            return isMatch;
        });
        if (!user)
            throw new Error("invalid Password or User");
        user.lastLogin = new Date().toDateString();
        return user.name + "welcome back !";
    };
    Auth.prototype.register = function (email, pwd, name, _isVerified, _lastLogin) {
        var user = this.users.find(function (e) {
            var isMatch = e.email === email && e.pwd === pwd && e.name === name;
            return isMatch;
        });
        if (!user)
            throw new Error("invalid Password or User");
        user.lastLogin = new Date().toDateString();
        return user.name + "welcome back !";
    };
    return Auth;
}());
exports.default = Auth;
