/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import Doodad from "doodad/Doodad";
import { ICorpse } from "entity/creature/corpse/ICorpse";
import Creature from "entity/creature/Creature";
import Entity from "entity/Entity";
import Human from "entity/Human";
import NPC from "entity/npc/NPC";
import { IMovementIntent } from "entity/player/IPlayer";
import Player from "entity/player/Player";
import { IContainer } from "item/IItem";
import Item from "item/Item";
import { IConnection } from "multiplayer/networking/IConnection";
import { PacketType } from "multiplayer/packets/IPacket";
import { ITileEvent } from "tile/ITileEvent";
import { IVector2, IVector3 } from "utilities/math/IVector";
export default abstract class BasePacket {
    protected static registrarId: number;
    readonly constructorFunction: typeof BasePacket;
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
    protected readVector2(): IVector2;
    protected writeVector2(value: IVector2): void;
    protected readVector3(): IVector3;
    protected writeVector3(value: IVector3): void;
    protected readContainer(): IContainer;
    protected writeContainer(value: IContainer): void;
    protected readCreature(): Creature | undefined;
    protected writeCreature(value: Creature): void;
    protected readPlayer(): Player | undefined;
    protected writePlayer(value: Player): void;
    protected readDoodad(): Doodad | undefined;
    protected writeDoodad(value: Doodad): void;
    protected readNPC(): NPC | undefined;
    protected writeNPC(value: NPC): void;
    protected readCorpse(): ICorpse | undefined;
    protected writeCorpse(value: ICorpse): void;
    protected readEntity(): Player | Creature | NPC | undefined;
    protected writeHuman(value: Human): void;
    protected readHuman(): Player | NPC | undefined;
    protected writeEntity(value: Entity): void;
    protected readItem(): Item;
    protected writeItem(value: Item): void;
    protected readMovementIntent(): IMovementIntent;
    protected writeMovementIntent(value: IMovementIntent): void;
    protected readItems(): Item[];
    protected writeItems(value: Item[]): void;
    protected readTileEvent(): ITileEvent | undefined;
    protected writeTileEvent(value: ITileEvent): void;
    protected readObject(): any;
    protected writeObject(value: any): void;
    protected readVector2Array(): IVector2[];
    protected writeVector2Array(value: IVector2[]): void;
    private ensureSize;
}
