declare class SecureSocketServer {
    private io;
    private secretKey;
    constructor(server: any, secretKey: string);
    emitEncrypted(event: string, message: string): void;
}
export default SecureSocketServer;
//# sourceMappingURL=SecureSocketServer.d.ts.map