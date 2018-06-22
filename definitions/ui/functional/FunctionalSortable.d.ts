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
