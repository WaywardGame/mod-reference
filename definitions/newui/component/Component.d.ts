import { Bindable } from "Enums";
import { IHookHost } from "mod/IHookHost";
import { BindCatcherApi } from "newui/BindingManager";
import { AppendStrategy, IComponent, IContextMenu, IHighlight, ITooltip, Namespace, SelectableLayer } from "newui/component/IComponent";
import { UiApi } from "newui/INewUi";
import { AttributeManipulator, ClassListManipulator, DataManipulator } from "newui/util/ElementManipulator";
import Emitter from "utilities/Emitter";
export default class Component extends Emitter implements IComponent, IHookHost {
    protected api: UiApi;
    static findDescendants(inElement: IComponent | HTMLElement, selector: string, includeSelf?: boolean): HTMLElement[];
    static getSelectableLayer(element: IComponent | HTMLElement): number | false;
    static append(elementToMove: string | IComponent | HTMLElement, placeToAppendTo: string | IComponent | HTMLElement, strategy?: AppendStrategy): void;
    private static removeFromParent;
    static remove(elementToRemove: string | IComponent | HTMLElement): void;
    readonly element: HTMLElement;
    readonly parent: Component;
    readonly classes: ClassListManipulator<this>;
    readonly attributes: AttributeManipulator<this>;
    readonly data: DataManipulator<this>;
    readonly dataset: DOMStringMap;
    readonly childCount: number;
    readonly scrollHeight: number;
    readonly style: CSSStyleDeclaration;
    protected children: Component[];
    private _element;
    private _parent;
    private scrollingChild?;
    private _data;
    private contextMenuGenerator?;
    private tooltipInitializer;
    private highlight;
    readonly selectable: SelectableLayer | false;
    /**
     * Alias of `.element.addEventListener`
     */
    readonly listen: {
        <K extends "waiting" | "error" | "abort" | "progress" | "ended" | "change" | "input" | "select" | "activate" | "beforeactivate" | "beforedeactivate" | "blur" | "canplay" | "canplaythrough" | "click" | "contextmenu" | "dblclick" | "deactivate" | "drag" | "dragend" | "dragenter" | "dragleave" | "dragover" | "dragstart" | "drop" | "durationchange" | "emptied" | "focus" | "invalid" | "keydown" | "keypress" | "keyup" | "load" | "loadeddata" | "loadedmetadata" | "loadstart" | "mousedown" | "mousemove" | "mouseout" | "mouseover" | "mouseup" | "mousewheel" | "MSContentZoom" | "MSGestureChange" | "MSGestureDoubleTap" | "MSGestureEnd" | "MSGestureHold" | "MSGestureStart" | "MSGestureTap" | "MSInertiaStart" | "MSManipulationStateChanged" | "MSPointerCancel" | "MSPointerDown" | "MSPointerEnter" | "MSPointerLeave" | "MSPointerMove" | "MSPointerOut" | "MSPointerOver" | "MSPointerUp" | "pause" | "play" | "playing" | "ratechange" | "reset" | "scroll" | "seeked" | "seeking" | "selectstart" | "stalled" | "submit" | "suspend" | "timeupdate" | "touchcancel" | "touchend" | "touchmove" | "touchstart" | "volumechange" | "webkitfullscreenchange" | "webkitfullscreenerror" | "pointercancel" | "pointerdown" | "pointerenter" | "pointerleave" | "pointermove" | "pointerout" | "pointerover" | "pointerup" | "wheel" | "ariarequest" | "command" | "gotpointercapture" | "lostpointercapture" | "MSGotPointerCapture" | "MSLostPointerCapture" | "beforecopy" | "beforecut" | "beforepaste" | "copy" | "cuechange" | "cut" | "mouseenter" | "mouseleave" | "paste">(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions | undefined): void;
        (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined): void;
    };
    private addEventListener;
    constructor(api: UiApi, elementType?: string, namespace?: Namespace);
    /**
     * Warning: This method will replace the internal element backing this component.
     *
     * Only call this directly after constructing the element.
     */
    setElementType(elementType?: string, namespace?: Namespace): this;
    setId(id: string): this;
    jsonData<T>(): DOMStringMap & T;
    setSelectable(val: SelectableLayer | false): this;
    onBindLoop(bindPressed: Bindable, api: BindCatcherApi): Bindable;
    isVisible(): boolean;
    show(): this;
    hide(): this;
    toggle(visible?: boolean): this;
    appendTo(where: string | HTMLElement | IComponent, appendStrategy?: AppendStrategy): this;
    append(...elements: ArrayOfTOrIterablesOfT<HTMLElement | IComponent | undefined | false>): this;
    remove(): this;
    contains(what: string | HTMLElement | IComponent): boolean;
    dump(filter?: (element: Component) => boolean): this;
    /**
     * Dumps all child components & elements without triggering any events.
     */
    dumpFast(): this;
    setContents(html: string, escape?: boolean): this;
    store(): void;
    findDescendants(selector: string): NodeListOf<Element>;
    setTooltip(initializer: (tooltip: ITooltip) => ITooltip): this;
    removeTooltip(): void;
    /**
     * Remove the context menu from this element
     */
    setContextMenu(): void;
    /**
     * Set the context menu for this element
     */
    setContextMenu(generator: () => IContextMenu | undefined): void;
    setHighlight(highlight: IHighlight): this;
    removeHighlight(): void;
    getBox(): ClientRect | DOMRect;
    getOffset(): {
        top: number;
        left: number;
    };
    getNthChild(nth?: number): Component;
    getChildren(): Component[];
    scrollTo(child: Component, ms?: number): void;
    getStyle(styleName: string): string;
    schedule(cb?: (this: this, button: this) => any, ...args: any[]): this;
    schedule(ms: number, cb?: (this: this, button: this) => any, ...args: any[]): this;
    repaint(): void;
    private onMouseEnterForTooltip;
    private onMouseLeaveForTooltip;
    private onMouseEnterForHighlights;
    private onMouseLeaveForHighlights;
}
