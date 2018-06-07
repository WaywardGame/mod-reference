import { UiTranslation } from "language/ILanguage";
export interface IMatchmaking {
    getIdentifier(): string;
    isConnected(): boolean;
    connect(): void;
    disconnect(): void;
    send(data: ArrayBuffer | MatchmakingMessageData, channel?: string): void;
}
export interface IMatchmakingInfo {
    identifier: string;
    channel: string;
    matchmakingServer: string;
    isDedicatedServer: boolean;
}
export interface MatchmakingMessage {
    channel?: string;
    data?: MatchmakingMessageData;
}
export declare enum MatchmakingMessageDataType {
    IpAddress = -1,
    JoinChannel = 0,
    IceCandidate = 1,
    SessionDescription = 2,
    HostIpAddress = 3,
    Connected = 4,
    UnableToJoinGame = 5
}
export interface IMatchmakingMessageData {
    type: MatchmakingMessageDataType;
    matchmakingIdentifier?: string;
    targetMatchmakingIdentifier?: string;
}
export interface IMatchmakingIpAddressMessageData extends IMatchmakingMessageData {
    type: MatchmakingMessageDataType.IpAddress;
    ip?: string;
}
export interface IMatchmakingJoinChannelMessageData extends IMatchmakingMessageData {
    type: MatchmakingMessageDataType.JoinChannel;
    clientVersion: string;
    clientBuild: number | undefined;
    playerIdentifier: string;
}
export interface IMatchmakingIceCandidateMessageData extends IMatchmakingMessageData {
    type: MatchmakingMessageDataType.IceCandidate;
    iceCandidate: RTCIceCandidateInit;
}
export interface IMatchmakingSessionDescriptionMessageData extends IMatchmakingMessageData {
    type: MatchmakingMessageDataType.SessionDescription;
    sessionDescription: RTCSessionDescriptionInit;
}
export interface IMatchmakingHostIpAddressMessageData extends IMatchmakingMessageData {
    type: MatchmakingMessageDataType.HostIpAddress;
    ip: string;
}
export interface IMatchmakingConnectedMessageData extends IMatchmakingMessageData {
    type: MatchmakingMessageDataType.Connected;
}
export interface IMatchmakingUnableToJoinGameMessageData extends IMatchmakingMessageData {
    type: MatchmakingMessageDataType.UnableToJoinGame;
    entry: UiTranslation;
    args?: Array<number | string>;
}
export declare type MatchmakingMessageData = IMatchmakingIpAddressMessageData | IMatchmakingJoinChannelMessageData | IMatchmakingIceCandidateMessageData | IMatchmakingSessionDescriptionMessageData | IMatchmakingHostIpAddressMessageData | IMatchmakingConnectedMessageData | IMatchmakingUnableToJoinGameMessageData;
