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
import { CreatureType } from "entity/creature/ICreature";
import { SkillType } from "entity/IHuman";
import { IObject } from "game/IObject";
import { ItemType } from "item/IItem";
import { IModdable } from "mod/ModRegistry";
import { IRGB } from "utilities/Color";
import { IVector3 } from "utilities/math/IVector";
export interface ICorpseDescription extends IModdable {
    decay?: number;
    resource?: ICorpseResourceDrop[];
    aberrantResource?: ICorpseResourceDrop[];
    carve?: boolean;
    skill?: SkillType;
    damage?: number;
    lightSource?: boolean;
    lightColor?: IRGB;
    animated?: boolean;
    isFlammable?: boolean;
}
export interface ICorpseResourceDrop {
    item: ItemType;
    chance?: number;
}
export interface ICorpse extends IObject<CreatureType>, IVector3 {
    decay?: number;
    aberrant?: boolean;
    step?: number;
    qualityBonus?: number;
}
