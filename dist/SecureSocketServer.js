"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
const aes_1 = require("./encryption/aes");
class SecureSocketServer {
    constructor(server, secretKey) {
        if (!secretKey || secretKey.length < 8) {
            throw new Error('Secret key must be at least 8 characters long.');
        }
        this.io = new socket_io_1.Server(server);
        this.secretKey = secretKey;
        this.io.on('connection', (socket) => {
            console.log('Client connected:', socket.id);
            socket.on('secure-message', (data) => {
                const decryptedMessage = (0, aes_1.decryptMessage)(data.encryptedMessage, this.secretKey);
                console.log(`Decrypted message from ${socket.id}:`, decryptedMessage);
                const response = `Server received: ${decryptedMessage}`;
                socket.emit('secure-response', { encryptedMessage: (0, aes_1.encryptMessage)(response, this.secretKey) });
            });
        });
    }
    emitEncrypted(event, message) {
        const encryptedMessage = (0, aes_1.encryptMessage)(message, this.secretKey);
        this.io.emit(event, { encryptedMessage });
    }
}
exports.default = SecureSocketServer;
