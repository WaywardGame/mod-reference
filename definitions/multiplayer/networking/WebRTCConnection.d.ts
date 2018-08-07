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
import { IMatchmakingInfo, MatchmakingMessageData } from "multiplayer/matchmaking/IMatchmaking";
import { Connection } from "multiplayer/networking/Connection";
export declare class WebRTCConnection extends Connection {
    private readonly sendMatchmakingMessage;
    private readonly onData;
    private readonly onConnected?;
    private readonly _peerConnection;
    private _dataChannel?;
    constructor(matchmakingInfo: IMatchmakingInfo | undefined, matchmakingIdentifier: string, config: RTCConfiguration, sendMatchmakingMessage: (message: MatchmakingMessageData) => void, onData: (data: ArrayBuffer) => void, onConnected?: ((matchmakingInfo: IMatchmakingInfo) => void) | undefined);
    isConnected(): boolean;
    close(): void;
    send(data: ArrayBuffer | Uint8Array): void;
    processMatchmakingMessage(message: ArrayBuffer | MatchmakingMessageData): Promise<boolean>;
    private _onDataChannelMessage;
    private _onNegotiationNeeded;
    private _onDataChannelReceived;
    private _onDataChannelChanged;
    private _onIceConnectionStateChange;
    private _onDescriptionCreated;
    private _parseIceCandidate;
}
