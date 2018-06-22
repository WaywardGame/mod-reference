import IBaseEntity from "entity/IBaseEntity";
import { StatusType } from "Enums";
import Component from "newui/component/Component";
import { UiApi } from "newui/INewUi";
export default class StatusEffects extends Component {
    private readonly entity;
    private readonly effectIcons;
    constructor(uiApi: UiApi, entity: IBaseEntity);
    /**
     * Event handler for the status effects of this entity changing
     */
    onStatusChange(_: any, status: StatusType, hasStatus: boolean): void;
}
