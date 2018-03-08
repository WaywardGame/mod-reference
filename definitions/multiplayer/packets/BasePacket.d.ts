import { ICreature } from "creature/ICreature";
import { IDoodad } from "doodad/IDoodad";
import { IContainer, IItem } from "item/IItem";
import { IConnection } from "multiplayer/networking/IConnection";
import { PacketType } from "multiplayer/packets/IPacket";
import { INPC } from "npc/INPC";
import { IPoint } from "utilities/math/IPoint";
export default abstract class BasePacket {
    protected static registrarId: number;
    "constructor": typeof BasePacket;
    protected connection: IConnection;
    protected byteArray: Uint8Array;
    protected dataView: DataView;
    protected byteOffset: number;
    protected bufferSize: number;
    static getRegistrarId(): number;
    static setRegistrarId(id: number): void;
    constructor(connection?: IConnection);
    getRegistrarId(): number;
    abstract getType(): PacketType;
    protected readInt8(): number;
    protected writeInt8(value: number): void;
    protected readUint8(): number;
    protected writeUint8(value: number): void;
    protected readUint16(): number;
    protected writeUint16(value: number): void;
    protected readUint32(): number;
    protected writeUint32(value: number): void;
    protected readFloat64(): number;
    protected writeFloat64(value: number): void;
    protected readBool(): boolean;
    protected writeBool(value: boolean): void;
    protected readUint8Array(): Uint8Array;
    protected writeUint8Array(value: Uint8Array): void;
    protected readUint32NumberArray(): number[];
    protected writeUint32NumberArray(value: number[]): void;
    protected readString(): string;
    protected writeString(value: string): void;
    protected readStringArray(): string[];
    protected writeStringArray(value: string[]): void;
    protected readPoint(): IPoint;
    protected writePoint(value: IPoint): void;
    protected readContainer(): IContainer;
    protected writeContainer(value: IContainer): void;
    protected readCreature(): ICreature | undefined;
    protected writeCreature(value: ICreature): void;
    protected readDoodad(): IDoodad | undefined;
    protected writeDoodad(value: IDoodad): void;
    protected readNPC(): INPC | undefined;
    protected writeNPC(value: INPC): void;
    protected readItem(): IItem;
    protected writeItem(value: IItem): void;
    protected readItemOrDoodad(): IItem | IDoodad | undefined;
    protected writeItemOrDoodad(value: IItem | IDoodad): void;
    protected readItems(): IItem[];
    protected writeItems(value: IItem[]): void;
    protected readObject(): any;
    protected writeObject(value: any): void;
    private ensureSize(byteIncrease);
}
