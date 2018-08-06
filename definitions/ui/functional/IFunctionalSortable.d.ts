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
export interface ISortableEvent {
    item?: JQuery;
    placeholder?: JQuery;
    helper?: JQuery;
    initialContainer: JQuery;
    targetContainer?: JQuery;
}
export interface ISortableOptions {
    connectWith?: string;
    appendTo?: JQuery;
    zIndex?: number;
    distance?: number;
    cursorAt?: {
        top: number;
        left: number;
    };
    onlyReceive?: boolean;
    onStart(sortableEvent: ISortableEvent): void;
    onOver(sortableEvent: ISortableEvent): void;
    onChange(sortableEvent: ISortableEvent): void;
    onOut(sortableEvent: ISortableEvent): void;
    onReceive(sortableEvent: ISortableEvent): void;
    onStop(sortableeEvent: ISortableEvent): void;
}
export interface ISortableItem {
    element: JQuery;
    left: number;
    top: number;
    width: number;
    height: number;
}
export interface ISortable {
    helper?: JQuery;
    start(event: JQueryEventObject): void;
    stop(): void;
    cancel(): void;
    refreshItems(): void;
    runAction(action: string, ...data: any[]): (JQuery | boolean | undefined);
}
