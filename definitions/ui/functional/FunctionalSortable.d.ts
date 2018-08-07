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
import { ISortable, ISortableOptions } from "ui/functional/IFunctionalSortable";
export default class Sortable implements ISortable {
    item?: JQuery;
    placeholder?: JQuery;
    scrollParent?: JQuery;
    helper?: JQuery;
    initialContainer: JQuery;
    targetContainer?: JQuery;
    private readonly _options;
    private items;
    private initialEvent?;
    constructor(element: JQuery, options: ISortableOptions);
    start(event: JQueryEventObject): void;
    stop(): void;
    cancel(): void;
    refreshItems(): void;
    runAction(action: string, ...data: any[]): JQuery | boolean | undefined;
    private _refreshItemPositions;
    private _updateHelperPosition;
    private _onMouseDown;
    private _onMouseMove;
    private _scroll;
    private _onMouseUp;
    private _getMousePosition;
    private _createEvent;
    private _updatePosition;
}
