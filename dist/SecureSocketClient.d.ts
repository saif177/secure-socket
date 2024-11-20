declare class SecureSocketClient {
    private socket;
    private secretKey;
    constructor(serverUrl: string, secretKey: string);
    sendEncrypted(event: string, message: string): void;
    disconnect(): void;
}
export default SecureSocketClient;
//# sourceMappingURL=SecureSocketClient.d.ts.map