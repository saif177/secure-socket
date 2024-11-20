import { io, Socket } from 'socket.io-client';
import { encryptMessage, decryptMessage } from './encryption/aes';

class SecureSocketClient {
    private socket: Socket;
    private secretKey: string;

    constructor(serverUrl: string, secretKey: string) {
        if (!secretKey || secretKey.length < 8) {
            throw new Error('Secret key must be at least 8 characters long.');
        }

        this.socket = io(serverUrl);
        this.secretKey = secretKey;

        this.socket.on('secure-response', (data: { encryptedMessage: string }) => {
            const decryptedMessage = decryptMessage(data.encryptedMessage, this.secretKey);
            console.log('Decrypted message from server:', decryptedMessage);
        });
    }

    sendEncrypted(event: string, message: string) {
        const encryptedMessage = encryptMessage(message, this.secretKey);
        this.socket.emit(event, { encryptedMessage });
    }

    disconnect() {
        this.socket.disconnect();
    }
}

export default SecureSocketClient;
