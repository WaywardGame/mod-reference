/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
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
import { ConnectionState } from "Enums";
import { PacketTarget } from "multiplayer/IMultiplayer";
import IndexedPacket from "multiplayer/packets/IndexedPacket";
import { IPacket, ISynchronizationCheckData } from "multiplayer/packets/IPacket";
export declare abstract class Packet extends IndexedPacket implements IPacket {
    protected synchronizationCheckData: ISynchronizationCheckData;
    private _arrayBuffer;
    getDebugInfo(): string;
    getAllowedStates(): ConnectionState;
    isSyncCheckEnabled(): boolean;
    isAllowedWhenPaused(): boolean;
    getSynchronizationCheckData(): ISynchronizationCheckData;
    getArrayBuffer(id?: number): ArrayBuffer;
    processData(dataView: DataView): void;
    abstract process(): any;
    send(exclude?: PacketTarget): void;
    sendTo(to: PacketTarget, force?: boolean): void;
    processAndSend(exclude?: PacketTarget): any;
    protected getInitialBufferSize(): number;
    protected getIndexSize(): number;
    protected preWriteData(): void;
    protected writeData(): void;
    protected preReadData(): void;
    protected readData(): void;
    protected preProcess(): void;
    private readSynchronizationCheck;
    private writeSynchronizationCheck;
}
