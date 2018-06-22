/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { ICreature, ICreatureDescription, IDamageInfo } from "creature/ICreature";
import BaseEntity from "entity/BaseEntity";
import { AiType, EntityType } from "entity/IEntity";
import { CreatureType, ItemType, MoveType, SfxType } from "Enums";
import { IItem } from "item/IItem";
import { IMessagePack } from "language/IMessages";
import { IPlayer } from "player/IPlayer";
import { IUnserializedCallback } from "save/ISerializer";
export default class Creature extends BaseEntity implements ICreature, IUnserializedCallback {
    readonly entityType: EntityType.Creature;
    aberrant?: boolean;
    ai: AiType;
    enemy?: number;
    enemyAttempts?: number;
    enemyIsPlayer?: boolean;
    loot?: ItemType[];
    respawned?: boolean;
    shouldSkipNextUpdate: boolean;
    type: CreatureType;
    private _description;
    private _owner;
    constructor(creatureType?: CreatureType, x?: number, y?: number, z?: number, aberrant?: boolean);
    /**
     * Initializes the creature's stats. Used in the constructor & save conversion.
     */
    initializeStats(hp: number, maxhp?: number): void;
    description(): ICreatureDescription | undefined;
    isHidden(): boolean;
    isDefender(): boolean;
    getInspectHealthMessage(player: IPlayer): IMessagePack;
    getInspectResistVulnerabilityMessage(player: IPlayer): IMessagePack | undefined;
    checkForBurn(moveType?: MoveType): boolean;
    isTamed(): boolean;
    tame(player: IPlayer): boolean;
    release(): boolean;
    pet(): boolean;
    skipNextUpdate(): void;
    getMoveType(): MoveType;
    queueSoundEffect(type: SfxType, delay?: number, speed?: number): void;
    update(): boolean;
    moveTo(x: number, y: number, z: number): boolean;
    canSwapWith(player: IPlayer): boolean;
    getOwner(): IPlayer | undefined;
    damage(damageInfo: IDamageInfo): number | undefined;
    onUnserialized(): void;
    offer(items: IItem[]): IItem | undefined;
    private findPath;
    private checkCreatureMove;
    private findPlayersWithinRadius;
    private processAttack;
    private processMovement;
    private processAiChanges;
    private processSpecialAbilities;
}
