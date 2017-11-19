import { ISortable, ISortableOptions } from "ui/functional/IFunctionalSortable";
export default class Sortable implements ISortable {
    item?: JQuery;
    placeholder?: JQuery;
    scrollParent?: JQuery;
    helper?: JQuery;
    initialContainer: JQuery;
    targetContainer?: JQuery;
    private _options;
    private items;
    private initialEvent?;
    constructor(element: JQuery, options: ISortableOptions);
    start(event: JQueryEventObject): void;
    stop(): void;
    cancel(): void;
    refreshItems(): void;
    runAction(action: string, ...data: any[]): JQuery | boolean | undefined;
    private _refreshItemPositions();
    private _updateHelperPosition(x, y);
    private _onMouseDown(event);
    private _onMouseMove(event);
    private _scroll(event);
    private _onMouseUp(event);
    private _onMouseLeave(event);
    private _getMousePosition(event);
    private _createEvent();
    private _updatePosition(item, after);
}
