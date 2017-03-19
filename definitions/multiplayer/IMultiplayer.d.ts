import { Difficulty } from "Enums";
import { Packet, PacketType } from "multiplayer/IPacket";
import { IPlayer } from "player/IPlayer";
export interface IMultiplayer {
    createServer(serverId: string, options?: IMultiplayerOptions): void;
    disconnect(): void;
    executeSyncedPacket(packetObjectOrType: Packet | PacketType): number | undefined | void;
    getOptions(): IMultiplayerOptions;
    isClient(): boolean;
    isConnected(): boolean;
    isServer(): boolean;
    joinServer(serverId: string): void;
    kick(player: IPlayer): void;
    onPlaying(): void;
    sendPacket(player: IPlayer, packet: Packet): void;
    syncPacket(packet: Packet, clientSide?: () => any): any;
    updatePlayerId(oldPid: number, newPid: number): void;
}
export default IMultiplayer;
export interface IMultiplayerOptions {
    difficulty: Difficulty;
    pvp: boolean;
}
