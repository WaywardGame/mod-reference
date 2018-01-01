import { ConnectionState } from "Enums";
import { MatchmakingMessageData } from "multiplayer/matchmaking/IMatchmaking";
import { IPacket } from "multiplayer/packets/IPacket";
export interface IConnection {
    state: ConnectionState;
    playerIdentifier: string;
    matchmakingIdentifier: string;
    pid?: number;
    queuedPackets: IPacket[];
    buffer?: Uint8Array;
    bufferOffset?: number;
    bufferPacketId?: number;
    lastPacketNumberSent?: number;
    lastPacketNumberReceived?: number;
    isConnected(): boolean;
    close(): void;
    send(data: ArrayBuffer): void;
    processMatchmakingMessage(message: ArrayBuffer | MatchmakingMessageData): Promise<boolean>;
}
