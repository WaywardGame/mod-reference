import { ConnectionState } from "Enums";
import { IMatchmakingInfo, MatchmakingMessageData } from "multiplayer/matchmaking/IMatchmaking";
import { Connection } from "multiplayer/networking/Connection";
export declare class WebRTCWithFallbackConnection extends Connection {
    private readonly onConnected?;
    private _webRTCTimeoutId;
    private _hostIpAddress;
    private readonly _webRTCConnection;
    constructor(matchmakingInfo: IMatchmakingInfo, matchmakingIdentifier: string, config: RTCConfiguration, sendMatchmakingMessage: (message: MatchmakingMessageData) => void, onData: (data: ArrayBuffer) => void, onConnected?: ((matchmakingInfo: IMatchmakingInfo) => void) | undefined);
    getState(): ConnectionState;
    setState(state: ConnectionState): void;
    isConnected(): boolean;
    close(): void;
    send(data: ArrayBuffer): void;
    processMatchmakingMessage(message: MatchmakingMessageData): Promise<boolean>;
    private _onConnected;
}
