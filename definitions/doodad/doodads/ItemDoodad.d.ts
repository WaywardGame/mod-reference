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
import { ActionType } from "action/IAction";
import DoodadInfo from "doodad/DoodadInfo";
import Doodad from "doodad/doodads/Doodad";
import { IDoodad, IDoodadDescription, IDoodadOptions } from "doodad/IDoodad";
import { ItemType } from "Enums";
import Translation from "language/Translation";
export default class ItemDoodad extends Doodad implements IDoodad {
    itemType: ItemType;
    constructor(id?: number, x?: number, y?: number, z?: number, options?: IDoodadOptions);
    description(): IDoodadDescription | undefined;
    getDoodadInfo(): DoodadInfo | undefined;
    getPickupTypes(): ItemType[] | undefined;
    getActions(): ActionType[] | undefined;
    protected getNameTranslation(article?: boolean, count?: number): Translation;
    protected getDescriptionTranslation(): Translation;
    private _itemDescription;
}
