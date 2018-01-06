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
    VersionMismatch = 3,
    BuildMismatch = 4,
    Banned = 5,
    MaxPlayerCountExceeded = 6,
    DuplicateIdentifier = 7,
    UnknownError = 8,
    Connected = 9,
    HostIpAddress = 10,
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
export interface IMatchmakingVersionMismatchMessageData extends IMatchmakingMessageData {
    type: MatchmakingMessageDataType.VersionMismatch;
    serverVersion: string;
}
export interface IMatchmakingBuildMismatchMessageData extends IMatchmakingMessageData {
    type: MatchmakingMessageDataType.BuildMismatch;
    serverBuildTime: number;
}
export interface IMatchmakingBannedMessageData extends IMatchmakingMessageData {
    type: MatchmakingMessageDataType.Banned;
}
export interface IMatchmakingMaxPlayerCountExceededMessageData extends IMatchmakingMessageData {
    type: MatchmakingMessageDataType.MaxPlayerCountExceeded;
}
export interface IMatchmakingDuplicateIdentifierMessageData extends IMatchmakingMessageData {
    type: MatchmakingMessageDataType.DuplicateIdentifier;
}
export interface IMatchmakingUnknownErrorMessageData extends IMatchmakingMessageData {
    type: MatchmakingMessageDataType.UnknownError;
    code: number;
}
export interface IMatchmakingIceCandidateMessageData extends IMatchmakingMessageData {
    type: MatchmakingMessageDataType.IceCandidate;
    iceCandidate: RTCIceCandidateInit;
}
export interface IMatchmakingSessionDescriptionMessageData extends IMatchmakingMessageData {
    type: MatchmakingMessageDataType.SessionDescription;
    sessionDescription: RTCSessionDescriptionInit;
}
export interface IMatchmakingConnectedMessageData extends IMatchmakingMessageData {
    type: MatchmakingMessageDataType.Connected;
}
export interface IMatchmakingHostIpAddressMessageData extends IMatchmakingMessageData {
    type: MatchmakingMessageDataType.HostIpAddress;
    ip: string;
}
export declare type MatchmakingMessageData = IMatchmakingIpAddressMessageData | IMatchmakingJoinChannelMessageData | IMatchmakingIceCandidateMessageData | IMatchmakingSessionDescriptionMessageData | IMatchmakingMaxPlayerCountExceededMessageData | IMatchmakingVersionMismatchMessageData | IMatchmakingBuildMismatchMessageData | IMatchmakingBannedMessageData | IMatchmakingDuplicateIdentifierMessageData | IMatchmakingUnknownErrorMessageData | IMatchmakingConnectedMessageData | IMatchmakingHostIpAddressMessageData;
