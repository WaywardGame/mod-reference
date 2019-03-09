/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
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
export interface ITooltipOptions {
    selector: string;
    disabled?: boolean;
    trackMouse?: boolean;
    position?: ITooltipPosition;
    content(): string;
    onOpen?(target: JQuery): void;
    onClose?(target: JQuery): void;
}
export interface ITooltip extends ITooltipOptions {
    visible?: HTMLElement;
    lastEvent: string;
    element: HTMLElement;
    width: number;
    height: number;
    show(event: MouseEvent | undefined): void;
    updateTooltipPosition(left: number, top: number, mouseX?: number, mouseY?: number): void;
}
export interface ITooltipPosition {
    startAtRight?: boolean;
    startAtBottom?: boolean;
    centerX?: boolean;
    centerY?: boolean;
    leftOffset?: number;
    topOffset?: number;
    clampRight?: boolean;
}
