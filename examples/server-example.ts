import http from 'http';
import SecureSocketServer from '../dist/SecureSocketServer';

const server = http.createServer();
const secureSocket = new SecureSocketServer(server, 'user-defined-secret');

server.listen(3000, () => {
    console.log('Secure server is running on http://localhost:3000');
});

// Emit an encrypted message to connected clients every 5 seconds
setInterval(() => {
    secureSocket.emitEncrypted('heartbeat', 'Server is alive!');
}, 5000);
