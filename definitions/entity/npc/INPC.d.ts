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
import { ActionType } from "entity/action/IAction";
import { AiType, EntityType } from "entity/IEntity";
import IHuman from "entity/IHuman";
export interface INPC extends IHuman {
    entityType: EntityType.NPC;
    ai: AiType;
    getRegistrarId(): number;
    getActions(): ActionType[] | undefined;
    addAiType(ai: AiType): void;
    updateDirection(x: number, y: number): void;
    update(): void;
    moveTo(x: number, y: number, z: number): boolean;
    isHostile(): boolean;
    isWaiting(): boolean;
    makeHostile(): void;
}