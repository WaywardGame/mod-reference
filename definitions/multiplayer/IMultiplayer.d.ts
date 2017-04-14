import { Difficulty } from "Enums";
import { Packet, PacketType } from "multiplayer/IPacket";
import { IPlayer } from "player/IPlayer";
export interface IMultiplayer {
    addSyncCheck(syncCheck: MultiplayerSyncCheck, value: any): void;
    createServer(serverId: string, options?: IMultiplayerOptions): void;
    disconnect(): void;
    executeSyncedPacket(packetObjectOrType: Packet | PacketType): number | undefined | void;
    getOptions(): IMultiplayerOptions;
    isClient(): boolean;
    isConnected(): boolean;
    isProcessingPacket(): boolean;
    isReady(): boolean;
    isServer(): boolean;
    joinServer(serverId: string): void;
    kick(player: IPlayer): void;
    onPlaying(): void;
    sendPacket(player: IPlayer, packet: Packet): void;
    setMatchmakingServer(host: string): void;
    syncPacket(packet: Packet, clientSide?: () => any): any;
    updatePlayerId(oldPid: number, newPid: number): void;
}
export default IMultiplayer;
export interface IMultiplayerOptions {
    difficulty: Difficulty;
    pvp: boolean;
}
export declare enum MultiplayerSyncCheck {
    Stats = 0,
    Creature = 1,
    CanASeeB = 2,
    Weight = 3,
    StaminaChanges = 4,
    InventoryCount = 5,
    ItemWeight = 6,
}
