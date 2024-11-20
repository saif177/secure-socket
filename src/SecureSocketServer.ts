import { Server } from 'socket.io';
import { encryptMessage, decryptMessage } from './encryption/aes';

class SecureSocketServer {
    private io: Server;
    private secretKey: string;

    constructor(server: any, secretKey: string) {
        if (!secretKey || secretKey.length < 8) {
            throw new Error('Secret key must be at least 8 characters long.');
        }
        this.io = new Server(server);
        this.secretKey = secretKey;

        this.io.on('connection', (socket) => {
            console.log('Client connected:', socket.id);

            socket.on('secure-message', (data: { encryptedMessage: string }) => {
                const decryptedMessage = decryptMessage(data.encryptedMessage, this.secretKey);
                console.log(`Decrypted message from ${socket.id}:`, decryptedMessage);

                const response = `Server received: ${decryptedMessage}`;
                socket.emit('secure-response', { encryptedMessage: encryptMessage(response, this.secretKey) });
            });
        });
    }

    emitEncrypted(event: string, message: string) {
        const encryptedMessage = encryptMessage(message, this.secretKey);
        this.io.emit(event, { encryptedMessage });
    }
}

export default SecureSocketServer;
