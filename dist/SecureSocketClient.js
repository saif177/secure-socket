"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_client_1 = require("socket.io-client");
const aes_1 = require("./encryption/aes");
class SecureSocketClient {
    constructor(serverUrl, secretKey) {
        if (!secretKey || secretKey.length < 8) {
            throw new Error('Secret key must be at least 8 characters long.');
        }
        this.socket = (0, socket_io_client_1.io)(serverUrl);
        this.secretKey = secretKey;
        this.socket.on('secure-response', (data) => {
            const decryptedMessage = (0, aes_1.decryptMessage)(data.encryptedMessage, this.secretKey);
            console.log('Decrypted message from server:', decryptedMessage);
        });
    }
    sendEncrypted(event, message) {
        const encryptedMessage = (0, aes_1.encryptMessage)(message, this.secretKey);
        this.socket.emit(event, { encryptedMessage });
    }
    disconnect() {
        this.socket.disconnect();
    }
}
exports.default = SecureSocketClient;
