import { MatchmakingMessageData } from "multiplayer/matchmaking/IMatchmaking";
import { Connection } from "multiplayer/networking/Connection";
export declare class WebRTCConnection extends Connection {
    private sendMatchmakingMessage;
    private onData;
    private onConnected;
    private peerConnection;
    private dataChannel?;
    constructor(matchmakingIdentifier: string, config: RTCConfiguration, isServer: boolean, sendMatchmakingMessage: (message: MatchmakingMessageData) => void, onData: (data: ArrayBuffer) => void, onConnected?: (() => void) | undefined);
    isConnected(): boolean;
    close(): void;
    send(data: ArrayBuffer): void;
    processMatchmakingMessage(message: ArrayBuffer | MatchmakingMessageData): Promise<boolean>;
    private onDataChannelMessage(event);
    private onNegotiationNeeded();
    private onDataChannelReceived(dataChannel);
    private onDataChannelChanged();
    private onIceConnectionStateChange(connectionState);
    private onDescriptionCreated(description);
    private _parseIceCandidate(text);
}
