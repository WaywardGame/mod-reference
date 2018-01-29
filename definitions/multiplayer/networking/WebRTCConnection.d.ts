import { IMatchmakingInfo, MatchmakingMessageData } from "multiplayer/matchmaking/IMatchmaking";
import { Connection } from "multiplayer/networking/Connection";
export declare class WebRTCConnection extends Connection {
    private readonly sendMatchmakingMessage;
    private readonly onData;
    private readonly onConnected;
    private readonly _peerConnection;
    private _dataChannel?;
    constructor(matchmakingInfo: IMatchmakingInfo | undefined, matchmakingIdentifier: string, config: RTCConfiguration, sendMatchmakingMessage: (message: MatchmakingMessageData) => void, onData: (data: ArrayBuffer) => void, onConnected?: ((matchmakingInfo: IMatchmakingInfo) => void) | undefined);
    isConnected(): boolean;
    close(): void;
    send(data: ArrayBuffer): void;
    processMatchmakingMessage(message: ArrayBuffer | MatchmakingMessageData): Promise<boolean>;
    private _onDataChannelMessage(event);
    private _onNegotiationNeeded();
    private _onDataChannelReceived(dataChannel);
    private _onDataChannelChanged();
    private _onIceConnectionStateChange(connectionState);
    private _onDescriptionCreated(description);
    private _parseIceCandidate(text);
}
