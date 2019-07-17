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
import Human from "entity/Human";
import { StatusType } from "entity/IEntity";
import { IModdable } from "mod/ModRegistry";
import StatusEffectRenderer from "renderer/StatusEffectRenderer";
import { IRGB } from "utilities/Color";
export interface IStatusEffectDescription extends IModdable {
    iconPath?: string | ((entity: Entity) => string);
    renderer: StatusEffectRenderer;
    particles?: {
        /**
         * Particle effect for every turn, in a 2-val tuple.
         * @param countOrChance If a number less than `1`, the chance of the particle effect happening. Greater than `1` increases the number of particles.
         * @param color The color of the particle effect
         */
        onTurn?: [number, IRGB];
        /**
         * Particle effect for every status effect tick (20 turns), in a 2-val tuple.
         * @param countOrChance If a number less than `1`, the chance of the particle effect happening. Greater than `1` increases the number of particles.
         * @param color The color of the particle effect
         */
        onTick?: [number, IRGB];
    };
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
