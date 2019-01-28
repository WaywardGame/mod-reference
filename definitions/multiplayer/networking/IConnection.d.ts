/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 *
 *
 */
import { ConnectionState } from "Enums";
import { MatchmakingMessageData } from "multiplayer/matchmaking/IMatchmaking";
import { IPacket } from "multiplayer/packets/IPacket";
export interface IConnection {
    playerIdentifier: string;
    matchmakingIdentifier: string;
    pid?: number;
    /**
     * Packets are queued while the player is connected.
     * They are dequeued once the client loads the world - catch up logic
     */
    queuedPackets: IPacket[];
    buffer?: Uint8Array;
    bufferOffset?: number;
    bufferPacketId?: number;
    lastPacketNumberSent?: number;
    lastPacketNumberReceived?: number;
    addConnectionTimeout(): void;
    addKeepAliveTimeout(): void;
    addTimeout(milliseconds: number, callback: () => void): void;
    clearTimeout(): void;
    close(): void;
    getState(): ConnectionState;
    isConnected(): boolean;
    processMatchmakingMessage(message: ArrayBuffer | MatchmakingMessageData): Promise<boolean>;
    queuePacketData(data: ArrayBuffer): void;
    send(data: ArrayBuffer | Uint8Array): void;
    setState(state: ConnectionState): void;
    startKeepAlive(): void;
}
export interface IQueuedData {
    data: ArrayBuffer;
    byteOffset: number;
    sendAfter: number | undefined;
    retries?: number;
}
