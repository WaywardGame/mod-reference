import { IMatchmaking, IMatchmakingInfo, MatchmakingMessageData } from "multiplayer/matchmaking/IMatchmaking";
import { Connection } from "multiplayer/networking/Connection";
export declare class WebSocketConnection extends Connection {
    private readonly getMatchmaking;
    private readonly onData;
    private readonly onConnected?;
    constructor(matchmakingInfo: IMatchmakingInfo | undefined, matchmakingIdentifier: string, getMatchmaking: () => IMatchmaking | undefined, onData: (data: ArrayBuffer) => void, onConnected?: ((matchmakingInfo: IMatchmakingInfo) => void) | undefined);
    isConnected(): boolean;
    send(data: ArrayBuffer): void;
    processMatchmakingMessage(message: MatchmakingMessageData): Promise<boolean>;
}
