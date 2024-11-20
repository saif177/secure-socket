"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecureSocketClient = exports.SecureSocketServer = void 0;
var SecureSocketServer_1 = require("./SecureSocketServer");
Object.defineProperty(exports, "SecureSocketServer", { enumerable: true, get: function () { return __importDefault(SecureSocketServer_1).default; } });
var SecureSocketClient_1 = require("./SecureSocketClient");
Object.defineProperty(exports, "SecureSocketClient", { enumerable: true, get: function () { return __importDefault(SecureSocketClient_1).default; } });
