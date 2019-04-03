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
import { Events } from "event/EventBuses";
import EventEmitter from "event/EventEmitter";
import { IHookHost } from "mod/IHookHost";
import { Bindable, BindCatcherApi } from "newui/BindingManager";
import { AppendStrategy, IComponent, IContextMenu, IHighlight, ITooltip, Namespace, SelectableLayer } from "newui/component/IComponent";
import { AttributeManipulator, ClassManipulator, DataManipulator, StyleManipulator } from "newui/util/ComponentManipulator";
import Stream from "utilities/stream/Stream";
export default class Component extends EventEmitter.Host<Events<IComponent>> implements IComponent, IHookHost {
    private static readonly map;
    static get<C extends Component = Component>(selector: string): C;
    static get<C extends Component = Component>(element: Element): C;
    static get<C extends Component = Component>(event: Event): C;
    static all(selector: string): Stream<Component>;
    static findDescendants(inElement: IComponent | HTMLElement, selector: string, includeSelf?: boolean): HTMLElement[];
    static getSelectableLayer(element: IComponent | HTMLElement): number | false;
    static append(elementToMove: string | IComponent | HTMLElement, placeToAppendTo: string | IComponent | HTMLElement, strategy?: AppendStrategy): void;
    static remove(elementToRemove: string | IComponent | HTMLElement): void;
    readonly element: HTMLElement;
    readonly classes: ClassManipulator<this>;
    readonly attributes: AttributeManipulator<this>;
    readonly data: DataManipulator<this>;
    readonly style: StyleManipulator<this>;
    readonly dataset: DOMStringMap;
    readonly childCount: number;
    private _element;
    private scrollingChild?;
    private contextMenuGenerator?;
    private tooltipInitializer;
    private highlight;
    private readonly debounces;
    readonly selectable: SelectableLayer | false;
    /**
     * Alias of `.element.addEventListener`
     */
    readonly listen: (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined) => this;
    private addEventListener;
    constructor(elementType?: string, namespace?: Namespace);
    /**
     * Warning: This method will replace the internal element backing this component.
     *
     * Only call this directly after constructing the element.
     */
    setElement(element: HTMLElement): this;
    /**
     * Warning: This method will replace the internal element backing this component.
     *
     * Only call this directly after constructing the element.
     */
    setElement(elementType?: string, namespace?: Namespace): this;
    setId(id: string): this;
    setSelectable(val: SelectableLayer | false): this;
    registerEventBusSubscriber(...untilEvents: Array<keyof Events<this>>): void;
    registerHookHost(name?: string, ...untilEvents: Array<keyof Events<this>>): void;
    onBindLoop(bindPressed: Bindable, api: BindCatcherApi): Bindable;
    isVisible(): boolean;
    show(): this;
    hide(): this;
    toggle(visible?: boolean): this;
    exists(): boolean;
    getParent<C extends Component = Component>(): C | null;
    appendTo(where: string | HTMLElement | IComponent, appendStrategy?: AppendStrategy): this;
    append(...elements: ArrayOfIterablesOr<HTMLElement | IComponent | undefined | false>): this;
    remove(): this;
    contains(what: string | HTMLElement | IComponent): boolean;
    dump(filter?: (element: Component) => boolean): this;
    /**
     * Dumps all child components & elements without triggering any events.
     */
    dumpFast(): this;
    setContents(html: string, escape?: boolean): this;
    store(): this;
    findDescendants(selector: string): NodeListOf<Element>;
    setTooltip(initializer?: (tooltip: ITooltip) => ITooltip): this;
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
    setStyle(property: string, value: string | number): this;
    getBox(): DOMRect | ClientRect;
    getOffset(): {
        top: number;
        left: number;
    };
    getNthChild<C extends Component = Component>(nth?: number): C;
    getChildren<C extends Component = Component>(): Stream<C>;
    scrollTo(child: Component, ms?: number): void;
    scrollTo(child: Component, offsetTop: number, ms?: number): void;
    getStyle(styleName: string): string;
    schedule<A extends any[]>(cb: (this: this, button: this, ...args: A) => any, ...args: A): this;
    schedule(cb?: (this: this, button: this) => any, ...args: any[]): this;
    schedule<A extends any[]>(ms: number, cb: (this: this, button: this, ...args: A) => any, ...args: A): this;
    schedule(ms: number, cb?: (this: this, button: this) => any, ...args: any[]): this;
    schedule<A extends any[]>(ms: number, debounce: number, cb: (this: this, button: this, ...args: A) => any, ...args: A): this;
    schedule(ms: number, debounce: number, cb?: (this: this, button: this) => any, ...args: any[]): this;
    repaint(): void;
    forceShowTooltip(): void;
    private onMouseEnterForTooltip;
    private onMouseLeaveForTooltip;
    private onMouseEnterForHighlights;
    private onMouseLeaveForHighlights;
}
