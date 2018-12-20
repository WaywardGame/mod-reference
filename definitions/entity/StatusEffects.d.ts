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
import IEntity from "entity/IEntity";
import { IModdable, StatusType } from "Enums";
import StatusEffectRenderer from "renderer/StatusEffectRenderer";
export interface IStatusEffectDescription extends IModdable {
    iconPath?: string | ((entity: IEntity) => string);
    renderer: StatusEffectRenderer;
    /**
     * Whether the status effect should pass (be removed from the human).
     */
    shouldPass(human: Human, passChanceMultiplier: number): boolean;
    /**
     * Event handler for when the status effect passes.
     */
    onPassed(human: Human): void;
    /**
     * Event handler for every tick that the human has the status effect.
     */
    onTick(human: Human, effectMultiplier: number): void;
}
declare const statusEffectDescriptions: OptionalDescriptions<StatusType, IStatusEffectDescription>;
export default statusEffectDescriptions;
