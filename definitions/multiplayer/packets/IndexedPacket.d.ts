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
import { ICorpse } from "creature/corpse/ICorpse";
import { ICreature } from "creature/ICreature";
import { IDoodad } from "doodad/IDoodad";
import IEntity from "entity/IEntity";
import { IContainer, IItem } from "item/IItem";
import BasePacket from "multiplayer/packets/BasePacket";
import { INPC } from "npc/INPC";
import IPlayer, { IMovementIntent } from "player/IPlayer";
import { IVector2, IVector3 } from "utilities/math/IVector";
export default abstract class IndexedPacket extends BasePacket {
    private _index;
    private _indexFlags;
    protected resetIndexes(write: boolean): void;
    protected abstract getIndexSize(): number;
    protected readIndexedInt8(): number | undefined;
    protected writeIndexedInt8(value?: number): void;
    protected readIndexedUint8(): number | undefined;
    protected writeIndexedUint8(value?: number): void;
    protected readIndexedUint16(): number | undefined;
    protected writeIndexedUint16(value?: number): void;
    protected readIndexedUint32(): number | undefined;
    protected writeIndexedUint32(value?: number): void;
    protected readIndexedFloat64(): number | undefined;
    protected writeIndexedFloat64(value?: number): void;
    protected readIndexedBool(): boolean | undefined;
    protected writeIndexedBool(value?: boolean): void;
    protected readIndexedUint8Array(): Uint8Array | undefined;
    protected writeIndexedUint8Array(value?: Uint8Array): void;
    protected readIndexedUint32NumberArray(): number[] | undefined;
    protected writeIndexedUint32NumberArray(value?: number[]): void;
    protected readIndexedString(): string | undefined;
    protected writeIndexedString(value?: string): void;
    protected readIndexedStringArray(): string[] | undefined;
    protected writeIndexedStringArray(value?: string[]): void;
    protected readIndexedVector2(): IVector2 | undefined;
    protected writeIndexedVector2(value?: IVector2): void;
    protected readIndexedVector3(): IVector3 | undefined;
    protected writeIndexedVector3(value?: IVector3): void;
    protected readIndexedContainer(): IContainer | undefined;
    protected writeIndexedContainer(value?: IContainer): void;
    protected readIndexedCreature(): ICreature | undefined;
    protected writeIndexedCreature(value?: ICreature): void;
    protected readIndexedPlayer(): IPlayer | undefined;
    protected writeIndexedPlayer(value?: IPlayer): void;
    protected readIndexedDoodad(): IDoodad | undefined;
    protected writeIndexedDoodad(value?: IDoodad): void;
    protected readIndexedNPC(): INPC | undefined;
    protected writeIndexedNPC(value?: INPC): void;
    protected readIndexedCorpse(): ICorpse | undefined;
    protected writeIndexedCorpse(value?: ICorpse): void;
    protected readIndexedEntity(): ICreature | INPC | IPlayer | undefined;
    protected writeIndexedEntity(value?: IEntity): void;
    protected readIndexedHuman(): Human | undefined;
    protected writeIndexedHuman(value?: Human): void;
    protected readIndexedItem(): IItem | undefined;
    protected writeIndexedItem(value?: IItem): void;
    protected readIndexedMovementIntent(): IMovementIntent | undefined;
    protected writeIndexedMovementIntent(value?: IMovementIntent): void;
    protected readIndexedItems(): IItem[] | undefined;
    protected writeIndexedItems(value?: IItem[]): void;
    protected readIndexedObject(): any;
    protected writeIndexedObject(value?: any): void;
    protected readIndexedVector2Array(): IVector2[] | undefined;
    protected writeIndexedVector2Array(value?: IVector2[]): void;
    private writeIndex;
    private readIndex;
}
