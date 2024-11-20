"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptMessage = exports.encryptMessage = void 0;
const crypto_js_1 = __importDefault(require("crypto-js"));
const encryptMessage = (message, secretKey) => {
    return crypto_js_1.default.AES.encrypt(message, secretKey).toString();
};
exports.encryptMessage = encryptMessage;
const decryptMessage = (encryptedMessage, secretKey) => {
    const bytes = crypto_js_1.default.AES.decrypt(encryptedMessage, secretKey);
    return bytes.toString(crypto_js_1.default.enc.Utf8);
};
exports.decryptMessage = decryptMessage;
