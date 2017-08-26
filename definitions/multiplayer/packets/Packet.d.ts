import { ConnectionState } from "Enums";
import { IConnection } from "multiplayer/IMultiplayer";
import IndexedPacket from "multiplayer/packets/IndexedPacket";
import { IPacket, ISynchronizationCheckData } from "multiplayer/packets/IPacket";
import { IPlayer } from "player/IPlayer";
export declare abstract class Packet extends IndexedPacket implements IPacket {
    protected synchronizationCheckData: ISynchronizationCheckData;
    private _arrayBuffer;
    protected getInitialBufferSize(): number;
    getAllowedStates(): ConnectionState;
    isSyncCheckEnabled(): boolean;
    getSynchronizationCheckData(): ISynchronizationCheckData;
    getArrayBuffer(id?: number): ArrayBuffer;
    processData(dataView: DataView): void;
    protected preWriteData(): void;
    protected writeData(): void;
    protected preReadData(): void;
    protected readData(): void;
    protected preProcess(): void;
    abstract process(): any;
    send(exclude?: IPlayer | IConnection): void;
    sendTo(player: IPlayer | IConnection, force?: boolean): void;
    processAndSend(exclude?: IPlayer | IConnection): any;
    private readSynchronizationCheck();
    private writeSynchronizationCheck();
}
