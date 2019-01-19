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
import IEntity, { AiType, EntityType } from "entity/IEntity";
import { CreatureType, DamageType, Defense, IModdable, IObject, IRGB, ItemType, ItemTypeGroup, LootGroupType, MoveType, StatusType } from "Enums";
import { IInspectable } from "game/inspection/Inspections";
import { IItem } from "item/IItem";
import Message from "language/dictionary/Message";
import Translation from "language/Translation";
import { IPlayer } from "player/IPlayer";
export interface ICreature extends IEntity, IObject<CreatureType>, IInspectable {
    entityType: EntityType.Creature;
    ai: AiType;
    anim: number;
    loot?: ItemType[];
    aberrant?: boolean;
    respawned?: boolean;
    enemy?: number;
    enemyIsPlayer?: boolean;
    enemyAttempts?: number;
    hitchedTo?: number;
    /**
     * @param article Whether to include an article for the name of the creature. Uses the article rules on the language. Defaults to `true`.
     * @param count The number of this creature that you're getting the name of. Defaults to `1`.
     *
     * Examples:
     * - `creature.getName()` // "an acid spitter demon"
     * - `creature.getName(false)` // "acid spitter demon"
     * - `creature.getName(undefined, 3)` // "acid spitter demons"
     */
    getName(article?: boolean, count?: number): Translation;
    description(): ICreatureDescription | undefined;
    isHidden(): boolean;
    isDefender(): boolean;
    checkForBurn(moveType?: MoveType): boolean;
    damage(damageInfo: IDamageInfo): number | undefined;
    isTamed(): boolean;
    tame(player: IPlayer): boolean;
    release(): boolean;
    increaseTamedCount(): void;
    pet(): boolean;
    skipNextUpdate(): void;
    onUnserialized(): void;
    offer(items: IItem[]): IItem | undefined;
    setMoveType(moveType: MoveType): void;
    getMovementFinishTime(): number | undefined;
    update(): boolean;
    moveTo(x: number, y: number, z: number): boolean;
    checkUnder(checkX?: number, checkY?: number): boolean;
    canSwapWith(player: IPlayer): boolean;
    getOwner(): IPlayer | undefined;
    initializeStats(hp: number, maxhp?: number): void;
}
export interface ICreatureOld extends ICreature {
    hp: number;
    maxhp: number;
    happiness?: number;
    chickenEggCounter?: number;
    goatMilkCounter?: number;
}
export declare enum SpawnGroup {
    Any = 0,
    Guardians = 1,
    Seawater = 2,
    CaveWater = 3,
    Cave = 4,
    Night = 5,
    StrongGuardians = 6,
    FreshWater = 7,
    EasyNight = 8
}
export declare enum SpawnableTiles {
    None = 0,
    Default = 1,
    DefaultWithLava = 2,
    DefaultWithWater = 3,
    DeepSeawater = 4,
    Water = 5,
    Flying = 6,
    Ghost = 7,
    Desert = 8,
    Lava = 9,
    Wet = 10,
    Ground = 11,
    All = 12,
    Seawater = 13,
    FreshWater = 14
}
export interface ICreatureDescription extends IModdable {
    minhp: number;
    maxhp: number;
    minatk: number;
    maxatk: number;
    defense: Defense;
    damageType: DamageType;
    ai: AiType;
    moveType: MoveType;
    /**
     * A percentage number for the amount of time the creature should skip movement
     * 100 means the creature always skips their movement
     */
    skipMovementChance?: number;
    fishable?: boolean;
    blood?: IRGB;
    aberrantBlood?: IRGB;
    loot?: ICreatureLoot[];
    aberrantLoot?: ICreatureLoot[];
    spawnTiles: SpawnableTiles;
    spawnReputation?: number;
    spawnOnBenignity?: boolean;
    spawnGroup?: SpawnGroup[];
    makeNoise?: boolean;
    canCauseStatus?: StatusType[];
    lootGroup?: LootGroupType;
    jumpOver?: boolean;
    noCorpse?: boolean;
    respawn?: boolean;
    reputation: number;
    waterAnimations?: boolean;
    tamingDifficulty?: number;
    acceptedItems?: Array<ItemType | ItemTypeGroup>;
    lightSource?: boolean;
    noStumble?: boolean;
    particlesOnMove?: boolean;
    providesFire?: boolean;
    canTrample?: boolean;
    helpPlants?: boolean;
    speed?: number;
    disableHitching?: boolean;
}
export interface ICreatureLoot {
    item: ItemType;
    chance?: number;
}
export interface IDamageInfo {
    human?: Human;
    amount: number;
    type: DamageType;
    weaponName?: Message | Translation;
    creature?: ICreature;
    skipMilestones?: boolean;
    legacy?: boolean;
    damageMessage?: Message | Translation;
    soundDelay?: number;
}
