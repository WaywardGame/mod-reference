/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
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
    queuedPackets: IPacket[];
    buffer?: Uint8Array;
    bufferOffset?: number;
    bufferPacketId?: number;
    lastPacketNumberSent?: number;
    lastPacketNumberReceived?: number;
    addConnectionTimeout(): void;
    addTimeout(milliseconds: number, callback: () => void): void;
    clearTimeout(): void;
    addKeepAliveTimeout(): void;
    startKeepAlive(): void;
    getState(): ConnectionState;
    setState(state: ConnectionState): void;
    isConnected(): boolean;
    close(): void;
    send(data: ArrayBuffer | Uint8Array): void;
    processMatchmakingMessage(message: ArrayBuffer | MatchmakingMessageData): Promise<boolean>;
}
