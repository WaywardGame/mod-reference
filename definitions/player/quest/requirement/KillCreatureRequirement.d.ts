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
import { CreatureType } from "Enums";
import Translation from "language/Translation";
import Requirement, { RequirementFactory } from "player/quest/requirement/Requirement";
export default class KillCreatureRequirementFactory extends RequirementFactory<[CreatureType, number], KillCreatureRequirement> {
    constructor();
    protected getRequirementClass(): typeof KillCreatureRequirement;
    protected validateOptions(creatureType: unknown, killQuantity: unknown): boolean;
    private onKill;
}
declare class KillCreatureRequirement extends Requirement<[CreatureType, number]> {
    private kills;
    onCreatureKill(attacker: IEntity, target: IEntity): boolean;
    getTranslation(): Translation;
}
export {};
