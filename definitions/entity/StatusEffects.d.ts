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
import { IModdable } from "Enums";
import StatusEffectRenderer from "renderer/StatusEffectRenderer";
export interface IStatusEffectDescription extends IModdable {
    iconPath?: string | ((entity: IBaseEntity) => string);
    renderer: StatusEffectRenderer;
    /**
     * Whether the status effect should pass (be removed from the human).
     */
    shouldPass(human: Human): boolean;
    /**
     * Event handler for when the status effect passes.
     */
    onPassed(human: Human): void;
    /**
     * Event handler for every tick that the human has the status effect.
     */
    onTick(human: Human): void;
}
declare const statusEffectDescriptions: Description<IStatusEffectDescription>;
export default statusEffectDescriptions;
