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
import { Bindable } from "Enums";
import { IHookHost } from "mod/IHookHost";
import { BindCatcherApi } from "newui/BindingManager";
import { AppendStrategy, IComponent, IContextMenu, IHighlight, ITooltip, Namespace, SelectableLayer } from "newui/component/IComponent";
import { UiApi } from "newui/INewUi";
import { AttributeManipulator, ClassListManipulator, DataManipulator } from "newui/util/ElementManipulator";
import Emitter from "utilities/Emitter";
export default class Component extends Emitter implements IComponent, IHookHost {
    protected api: UiApi;
    private static readonly map;
    static get<C extends Component = Component>(selector: string): C;
    static get<C extends Component = Component>(element: Element): C;
    static all(selector: string): IterableIterator<Component>;
    static findDescendants(inElement: IComponent | HTMLElement, selector: string, includeSelf?: boolean): HTMLElement[];
    static getSelectableLayer(element: IComponent | HTMLElement): number | false;
    static append(elementToMove: string | IComponent | HTMLElement, placeToAppendTo: string | IComponent | HTMLElement, strategy?: AppendStrategy): void;
    static remove(elementToRemove: string | IComponent | HTMLElement): void;
    readonly element: HTMLElement;
    readonly classes: ClassListManipulator<this>;
    readonly attributes: AttributeManipulator<this>;
    readonly data: DataManipulator<this>;
    readonly dataset: DOMStringMap;
    readonly childCount: number;
    readonly scrollHeight: number;
    readonly style: CSSStyleDeclaration;
    private _element;
    private scrollingChild?;
    private _data;
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
    constructor(api: UiApi, elementType?: string, namespace?: Namespace);
    /**
     * Warning: This method will replace the internal element backing this component.
     *
     * Only call this directly after constructing the element.
     */
    setElement(element: HTMLElement): this;
    setElement(elementType?: string, namespace?: Namespace): this;
    setId(id: string): this;
    jsonData<T>(): DOMStringMap & T;
    setSelectable(val: SelectableLayer | false): this;
    onBindLoop(bindPressed: Bindable, api: BindCatcherApi): Bindable;
    isVisible(): boolean;
    show(): this;
    hide(): this;
    toggle(visible?: boolean): this;
    exists(): boolean;
    getParent<C extends Component = Component>(): C | null;
    appendTo(where: string | HTMLElement | IComponent, appendStrategy?: AppendStrategy): this;
    append(...elements: ArrayOfIterablesOfOr<HTMLElement | IComponent | undefined | false>): this;
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
    getChildren<C extends Component = Component>(): IterableIterator<C>;
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
