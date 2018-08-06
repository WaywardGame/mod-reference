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
import { ItemType, SkillType } from "Enums";
import { ITileEvent } from "tile/ITileEvent";
declare const _default: {
    items: ({
        type: ItemType.Twigs;
    } | {
        type: ItemType.TumbleweedSeeds;
    })[];
    skillUse: SkillType.Botany;
    particles: {
        r: number;
        g: number;
        b: number;
    };
    graphicVariation: true;
    isFlammable: true;
    update(tileEvent: ITileEvent): void;
};
export default _default;
