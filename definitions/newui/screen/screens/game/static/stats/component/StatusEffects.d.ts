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
import { StatusType } from "Enums";
import Component from "newui/component/Component";
import { UiApi } from "newui/INewUi";
export default class StatusEffects extends Component {
    private readonly entity;
    private readonly effectIcons;
    constructor(uiApi: UiApi, entity: IEntity);
    /**
     * Event handler for the status effects of this entity changing
     */
    onStatusChange(_: any, status: StatusType, hasStatus: boolean): void;
}
