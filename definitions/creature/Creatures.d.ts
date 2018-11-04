/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 *
 *
 */
import { ICreatureDescription } from "creature/ICreature";
import { CreatureType, TerrainType } from "Enums";
export declare const spawnableTiles: TerrainType[][];
export declare const creatureDescriptions: OptionalDescriptions<CreatureType, ICreatureDescription>;
export default creatureDescriptions;
