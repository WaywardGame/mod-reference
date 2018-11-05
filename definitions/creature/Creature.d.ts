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
import Inspection from "game/inspection/Inspect";
import { InspectionSection } from "game/inspection/Inspections";
import { IItem } from "item/IItem";
import Translation from "language/Translation";
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
    originalMoveType: MoveType | undefined;
    private _description;
    private _owner;
    constructor(creatureType?: CreatureType, x?: number, y?: number, z?: number, aberrant?: boolean);
    /**
     * Initializes the creature's stats. Used in the constructor & save conversion.
     */
    initializeStats(hp: number, maxhp?: number): void;
    getName(article?: boolean, count?: number): Translation;
    description(): ICreatureDescription | undefined;
    inspect({ inspector, context, inspectEntityHealth }: Inspection, section: InspectionSection): void;
    isHidden(): boolean;
    isDefender(): boolean;
    checkForBurn(moveType?: MoveType): boolean;
    isTamed(): boolean;
    tame(player: IPlayer): boolean;
    increaseTamedCount(): void;
    release(): boolean;
    pet(): boolean;
    skipNextUpdate(): void;
    getMoveType(): MoveType;
    queueSoundEffect(type: SfxType, delay?: number, speed?: number): void;
    update(): boolean;
    moveTo(x: number, y: number, z: number): boolean;
    /**
     * Checks under the creature for getting burned, setting off traps, eating items off the ground, and more
     * @returns Returns whether the creature can keep moving (in the case of creatures with >= 2 speed)
     */
    checkUnder(checkX?: number, checkY?: number): boolean;
    canSwapWith(player: IPlayer): boolean;
    getOwner(): IPlayer | undefined;
    damage(damageInfo: IDamageInfo): number | undefined;
    onUnserialized(): void;
    offer(items: IItem[]): IItem | undefined;
    private inspectResistancesAndVulnerabilities;
    private inspectHappiness;
    private findPath;
    private checkCreatureMove;
    private findPlayersWithinRadius;
    private processAttack;
    private processMovement;
    private processAiChanges;
    private processSpecialAbilities;
}
