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
import Component from "component/Component";
import { Events } from "event/EventBuses";
import { IEventEmitter } from "event/EventEmitter";
import Stream from "utilities/stream/Stream";
interface SortableTilesEvents extends Events<Component> {
    sort(): any;
}
export default class SortableTiles<T extends Component> extends Component {
    private readonly variablySized?;
    readonly event: IEventEmitter<this, SortableTilesEvents>;
    constructor(variablySized?: "vertical" | "horizontal" | undefined);
    isSorting(): boolean;
    tiles(): Stream<T>;
    addTile(content: T, sortable?: boolean): void;
}
export {};
