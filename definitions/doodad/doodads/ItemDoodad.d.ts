import DoodadInfo from "doodad/DoodadInfo";
import Doodad from "doodad/doodads/Doodad";
import { IDoodad, IDoodadDescription, IDoodadOptions } from "doodad/IDoodad";
import { ActionType, ItemType } from "Enums";
export default class ItemDoodad extends Doodad implements IDoodad {
    itemType: ItemType;
    constructor(id?: number, x?: number, y?: number, z?: number, options?: IDoodadOptions);
    description(): IDoodadDescription | undefined;
    getDoodadInfo(): DoodadInfo | undefined;
    getPickupTypes(): ItemType[] | undefined;
    getActions(): ActionType[] | undefined;
    private _itemDescription;
}
