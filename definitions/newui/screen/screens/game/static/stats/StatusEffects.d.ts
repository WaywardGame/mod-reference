import IBaseEntity from "entity/IBaseEntity";
import { StatusType } from "Enums";
import UiElement from "newui/element/UiElement";
import { UiApi } from "newui/INewUi";
export default class StatusEffects extends UiElement {
    private readonly effectIcons;
    constructor(uiApi: UiApi, entity: IBaseEntity);
    /**
     * Event handler for the status effects of this entity changing
     */
    onStatusChange(_: any, status: StatusType, hasStatus: boolean): void;
}
