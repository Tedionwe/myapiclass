"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var auth_1 = __importDefault(require("./routes/auth"));
var app = express_1.default();
app.use(body_parser_1.default.json({ type: "*/*" }));
app.get("/", function (req, res) {
    res.send("Welcome to My Express Api");
});
//// All Routes
app.use(auth_1.default);
var PORT = 8081;
app.listen(PORT, function () {
    console.log("Server Running At http://127.0.0.1:" + PORT);
});
