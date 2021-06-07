"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Register = /** @class */ (function () {
    function Register(name, email, password) {
        this.name = "";
        this.email = "";
        this.pwd = "";
        this._isVerified = false;
        this._lastLogin = "";
        this.name = name;
        this.email = email;
        this.pwd = password;
        this._isVerified = false;
        this._lastLogin = new Date().toDateString();
    }
    Object.defineProperty(Register.prototype, "isVerified", {
        get: function () {
            return this._isVerified;
        },
        set: function (arg) {
            this._isVerified = arg;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Register.prototype, "lastLogin", {
        get: function () {
            return this._lastLogin;
        },
        set: function (date) {
            this._lastLogin = date;
        },
        enumerable: false,
        configurable: true
    });
    return Register;
}());
exports.default = Register;
