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
import { ICreature, ICreatureDescription, IDamageInfo } from "creature/ICreature";
import Entity from "entity/Entity";
import { AiType, EntityType } from "entity/IEntity";
import { CreatureType, ItemType, MoveType, SfxType } from "Enums";
import Inspection from "game/inspection/Inspect";
import { InspectionSection } from "game/inspection/Inspections";
import { IItem } from "item/IItem";
import Translation from "language/Translation";
import { IPlayer } from "player/IPlayer";
import { IUnserializedCallback } from "save/ISerializer";
export default class Creature extends Entity implements ICreature, IUnserializedCallback {
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
    hitchedTo?: number;
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
    hasAi(aiType: AiType): boolean;
    isHidden(): boolean;
    isDefender(): boolean;
    isTamed(): boolean;
    checkForBurn(moveType?: MoveType): boolean;
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
    checkUnder(x?: number, y?: number): boolean;
    canSwapWith(player: IPlayer): boolean;
    getOwner(): IPlayer | undefined;
    damage(damageInfo: IDamageInfo, creatureX?: number, creatureY?: number, creatureZ?: number): number | undefined;
    offer(items: IItem[]): IItem | undefined;
    onUnserialized(): void;
    private inspectResistancesAndVulnerabilities;
    private inspectHappiness;
    private findPath;
    private checkCreatureMove;
    private findPlayersWithinRadius;
    private processAttack;
    private processMovement;
    /**
     * Some creatures can break doodads, leading to lost rest or sleep when near them
     * @param doodad The doodad to damage
     * @param moveType The move type of the creature attempting to break the doodad
     */
    private breakDoodad;
    private processAiChanges;
    private processSpecialAbilities;
}
