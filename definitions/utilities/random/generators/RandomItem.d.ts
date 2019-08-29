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
import { Quality } from "game/IObject";
import { IContainer, ItemType, ItemTypeGroup } from "item/IItem";
import { RandomInstance } from "utilities/Random";
import RandomValueGenerator from "utilities/random/RandomValueGenerator";
export default class RandomItem extends RandomValueGenerator<Array<ItemType | ItemTypeGroup>> {
    private quality;
    constructor();
    constructor(random: RandomInstance, ...options: Array<ItemType | ItemTypeGroup>);
    setQuality(quality: Quality): this;
    create(container: IContainer): import("../../../item/Item").default;
}
