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
import IBaseEntity from "entity/IBaseEntity";
import IBaseHumanEntity from "entity/IBaseHumanEntity";
import { IModdable, StatusType } from "Enums";
import StatusEffectRenderer from "renderer/StatusEffectRenderer";
export interface IStatusEffectDescription extends IModdable {
    iconPath?: string | ((entity: IBaseEntity) => string);
    renderer: StatusEffectRenderer;
    /**
     * Whether the status effect can pass (is it possible to remove it from the human).
     */
    canPass(human: IBaseHumanEntity): boolean;
    /**
     * Whether the status effect should pass (be removed from the human).
     */
    shouldPass(human: IBaseHumanEntity): boolean;
    /**
     * Event handler for when the status effect passes.
     */
    onPassed(human: IBaseHumanEntity): void;
    /**
     * Event handler for every tick that the human has the status effect.
     */
    onTick(human: IBaseHumanEntity): void;
}
export declare function canPass(statusType: StatusType): boolean;
declare const statusEffectDescriptions: Description<IStatusEffectDescription>;
export default statusEffectDescriptions;
