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
import Entity from "entity/Entity";
import { Events } from "event/EventBuses";
import { IHasImagePath } from "game/IObject";
import { RecipeLevel } from "item/IItem";
import { IModdable } from "mod/ModRegistry";
import { IRGB } from "utilities/Color";
export interface IHumanEvents extends Events<Entity> {
    /**
     * @param skill The skill that is changing
     * @param value The new skill value (core + bonus)
     */
    skillChange(skill: SkillType, value: number): void;
}
export interface IHairstyleDescription extends IModdable, IHasImagePath {
    name: string;
}
export interface IColorDescription extends IModdable {
    color: IRGB;
}
export interface ICustomizations {
    hairStyle: keyof typeof HairStyle;
    hairColor: keyof typeof HairColor;
    skinColor: keyof typeof SkinColor;
}
export interface ICharacter {
    name: string;
    customization: ICustomizations;
}
export declare enum Delay {
    None = 0,
    LongPause = 25,
    Movement = 10,
    ShortPause = 13,
    Collision = 40,
    TurnDirection = 2,
    ReallyLongPause = 100
}
export declare enum EquipType {
    None = 0,
    Held = 1,
    Legs = 2,
    Chest = 3,
    Head = 4,
    Belt = 5,
    Feet = 6,
    Neck = 7,
    Hands = 8,
    Back = 9,
    LeftHand = 10,
    RightHand = 11
}
export declare enum HairColor {
    "#e7c978" = 0,
    "#b9793d" = 1,
    "#b84627" = 2,
    "#7f3721" = 3,
    "#7e4b1c" = 4,
    "#422116" = 5,
    "#28222a" = 6,
    "#bfb0a8" = 7,
    "#ffffff" = 8
}
export declare enum SkinColor {
    "#fddcd4" = 0,
    "#d6be93" = 1,
    "#f0ceab" = 2,
    "#c7a077" = 3,
    "#d89a72" = 4,
    "#89623a" = 5,
    "#88563b" = 6,
    "#613429" = 7,
    "#361e1c" = 8
}
export declare enum HairStyle {
    None = 0,
    Spike = 1,
    Bun = 2,
    Ponytail = 3,
    Afro = 4,
    Bouncy = 5,
    Dreads = 6,
    Shaved = 7,
    Long = 8,
    Mohawk = 9
}
export declare enum RestCancelReason {
    CreatureNearby = 0,
    Damaged = 1,
    FullStamina = 2,
    NearbyCreatureDamagedDoodad = 3,
    CreatureDamaged = 4,
    Canceled = 5
}
export interface IRestData {
    type: RestType;
    startHealth: number;
    totalCycles: number;
    itemId?: number;
    doodadId?: number;
    cycle?: number;
    cancelReason?: RestCancelReason;
}
export declare enum RestType {
    Resting = 0,
    Sleeping = 1
}
export declare enum SkillType {
    Chemistry = 0,
    Anatomy = 1,
    Marksmanship = 2,
    Blacksmithing = 3,
    Botany = 4,
    Camping = 5,
    Cartography = 6,
    Claythrowing = 7,
    Cooking = 8,
    Fishing = 9,
    Fletching = 10,
    Glassblowing = 11,
    Leatherworking = 12,
    LockPicking = 13,
    Lumberjacking = 14,
    Mining = 15,
    Mycology = 16,
    Parrying = 17,
    Stonecrafting = 18,
    Swimming = 19,
    Tactics = 20,
    Tailoring = 21,
    Throwing = 22,
    Tinkering = 23,
    Trapping = 24,
    Woodworking = 25,
    Taming = 26,
    Gardening = 27,
    Bartering = 28
}
export interface ICrafted {
    unlockTime: number;
    newUnlock: boolean;
}
export interface ICheckUnderOptions {
    autoActions?: boolean;
    enterCave?: boolean;
    forcePickUp?: boolean;
    skipDoodadEvents?: boolean;
    burned?: boolean;
}
export declare const craftingChances: Descriptions<RecipeLevel, number>;
