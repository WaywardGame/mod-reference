import { Bindable } from "Enums";
import { IHookHost } from "mod/IHookHost";
import { BindCatcherApi } from "newui/BindingManager";
import { IComponent, IComponentOptions, IContextMenu, ITooltipOptionsVague, Namespace, SelectableLayer } from "newui/component/IComponent";
import { UiApi } from "newui/INewUi";
import { AttributeManipulator, ClassListManipulator } from "newui/util/ElementManipulator";
import Emitter from "utilities/Emitter";
export default class Component extends Emitter implements IComponent, IHookHost {
    protected api: UiApi;
    static findDescendants(inElement: IComponent | HTMLElement, selector: string, includeSelf?: boolean): HTMLElement[];
    static getSelectableLayer(element: IComponent | HTMLElement): number | false;
    static append(elementToMove: string | IComponent | HTMLElement, placeToAppendTo: string | IComponent | HTMLElement, prepend?: boolean): Promise<void>;
    private static removeFromParent(elementToRemove);
    static remove(elementToRemove: string | IComponent | HTMLElement): Promise<void>;
    readonly classes: ClassListManipulator<this>;
    readonly attributes: AttributeManipulator<this>;
    readonly element: HTMLElement;
    readonly data: DOMStringMap;
    readonly childCount: number;
    readonly scrollHeight: number;
    readonly style: CSSStyleDeclaration;
    protected children: Component[];
    protected parent: Component;
    private readonly internalElement;
    private scrollingChild?;
    private readonly _data;
    private _tooltipOptions?;
    private contextMenuGenerator?;
    private addEventListener;
    selectable: SelectableLayer | false;
    protected readonly listen: {
        <K extends "waiting" | "error" | "abort" | "progress" | "ended" | "change" | "input" | "select" | "activate" | "beforeactivate" | "beforedeactivate" | "blur" | "canplay" | "canplaythrough" | "click" | "contextmenu" | "dblclick" | "deactivate" | "drag" | "dragend" | "dragenter" | "dragleave" | "dragover" | "dragstart" | "drop" | "durationchange" | "emptied" | "focus" | "invalid" | "keydown" | "keypress" | "keyup" | "load" | "loadeddata" | "loadedmetadata" | "loadstart" | "mousedown" | "mousemove" | "mouseout" | "mouseover" | "mouseup" | "mousewheel" | "MSContentZoom" | "MSGestureChange" | "MSGestureDoubleTap" | "MSGestureEnd" | "MSGestureHold" | "MSGestureStart" | "MSGestureTap" | "MSInertiaStart" | "MSManipulationStateChanged" | "MSPointerCancel" | "MSPointerDown" | "MSPointerEnter" | "MSPointerLeave" | "MSPointerMove" | "MSPointerOut" | "MSPointerOver" | "MSPointerUp" | "pause" | "play" | "playing" | "ratechange" | "reset" | "scroll" | "seeked" | "seeking" | "selectstart" | "stalled" | "submit" | "suspend" | "timeupdate" | "touchcancel" | "touchend" | "touchmove" | "touchstart" | "volumechange" | "webkitfullscreenchange" | "webkitfullscreenerror" | "pointercancel" | "pointerdown" | "pointerenter" | "pointerleave" | "pointermove" | "pointerout" | "pointerover" | "pointerup" | "wheel" | "ariarequest" | "command" | "gotpointercapture" | "lostpointercapture" | "MSGotPointerCapture" | "MSLostPointerCapture" | "beforecopy" | "beforecut" | "beforepaste" | "copy" | "cuechange" | "cut" | "mouseenter" | "mouseleave" | "paste">(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions | undefined): void;
        (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined): void;
    };
    constructor(uiApi: UiApi, elementType?: string, namespace?: Namespace);
    constructor(uiApi: UiApi, options?: IComponentOptions);
    jsonData<T>(): DOMStringMap & T;
    onBindLoop(bindPressed: Bindable, api: BindCatcherApi): Bindable;
    isVisible(): boolean;
    show(...args: any[]): Promise<void>;
    hide(...args: any[]): Promise<void>;
    toggle(visible?: boolean, ...args: any[]): Promise<void>;
    appendTo(where: string | HTMLElement | IComponent): this;
    prependTo(where: string | HTMLElement | IComponent): this;
    append(...elements: ArrayOfTOrIterablesOfT<HTMLElement | IComponent | undefined>): this;
    remove(): Promise<void>;
    contains(what: string | HTMLElement | IComponent): boolean;
    dump(filter?: (element: Component) => boolean): Promise<void>;
    setContents(html: string, escape?: boolean): this;
    store(): void;
    findDescendants(selector: string): NodeListOf<Element>;
    showTooltip(): Promise<void>;
    setTooltip(tooltipOptions?: ITooltipOptionsVague): void;
    /**
     * Remove the context menu from this element
     */
    setContextMenu(): void;
    /**
     * Set the context menu for this element
     */
    setContextMenu(generator: () => IContextMenu | undefined): void;
    getBox(): ClientRect | DOMRect;
    getOffset(): {
        top: number;
        left: number;
    };
    getNthChild(nth?: number): Component;
    getChildren(): Component[];
    scrollTo(child: Component, ms?: number): void;
    getStyle(styleName: string): string;
    schedule(cb: (this: this, button: this) => any, ...args: any[]): this;
    schedule(ms: number, cb: (this: this, button: this) => any, ...args: any[]): this;
    repaint(): void;
    collect<T>(collector: (component: IComponent) => T): T;
    private initializeTooltip();
}
