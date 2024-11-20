import SecureSocketClient from '../dist/SecureSocketClient';

const client = new SecureSocketClient('http://localhost:3000', 'user-defined-secret');

// Listen for encrypted messages from the server
client.sendEncrypted('secure-message', 'Hello, Secure Server!');
