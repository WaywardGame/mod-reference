export interface ITooltipOptions {
    selector: string;
    disabled?: boolean;
    trackMouse?: boolean;
    position?: ITooltipPosition;
    onOpen?(target: JQuery): void;
    onClose?(target: JQuery): void;
    onPosition?(target: JQuery): ITooltipPosition;
    content(target: JQuery): void;
}
export interface ITooltip extends ITooltipOptions {
    visible?: HTMLElement;
    lastEvent: string;
    element: HTMLElement;
    width: number;
    height: number;
    show(event: MouseEvent): void;
    updateTooltipPosition(left: number, top: number, mouseX: number, mouseY: number): void;
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
