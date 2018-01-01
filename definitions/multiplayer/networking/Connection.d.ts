import { ConnectionState } from "Enums";
import { MatchmakingMessageData } from "multiplayer/matchmaking/IMatchmaking";
import { IConnection } from "multiplayer/networking/IConnection";
import { IPacket } from "multiplayer/packets/IPacket";
export declare abstract class Connection implements IConnection {
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
    constructor();
    abstract isConnected(): boolean;
    abstract close(): void;
    abstract send(data: ArrayBuffer): void;
    abstract processMatchmakingMessage(message: MatchmakingMessageData): Promise<boolean>;
}
