import { IMatchmaking, IMatchmakingInfo, MatchmakingMessageData } from "multiplayer/matchmaking/IMatchmaking";
export declare class Matchmaking implements IMatchmaking {
    private readonly info;
    private readonly onConnected;
    private readonly onCloseOrError;
    private readonly onMessage;
    private webSocket?;
    constructor(info: IMatchmakingInfo, onConnected: (matchmaking: IMatchmaking) => void, onCloseOrError: (matchmaking: IMatchmaking) => void, onMessage: (matchmaking: IMatchmaking, message: ArrayBuffer | MatchmakingMessageData) => void);
    getIdentifier(): string;
    isConnected(): boolean;
    connect(): void;
    disconnect(): void;
    send(data: ArrayBuffer | MatchmakingMessageData, channel?: string): void;
}
