import { IUiElement, SelectableLayer, TooltipOptionsVague, UiElementOptions } from "newui/element/IUiElement";
import { UiApi } from "newui/INewUi";
import Emitter from "utilities/Emitter";
export default class UiElement<T = any> extends Emitter implements IUiElement<T> {
    protected uiApi: UiApi;
    protected children: UiElement[];
    protected parent: UiElement;
    private readonly _element;
    private scrollingChild?;
    private readonly _data;
    private _tooltipOptions?;
    readonly element: HTMLElement;
    readonly jsonData: DOMStringMap & T;
    readonly data: DOMStringMap;
    readonly childCount: number;
    readonly scrollHeight: number;
    readonly style: CSSStyleDeclaration;
    static findDescendants(inElement: IUiElement | HTMLElement, selector: string, includeSelf?: boolean): HTMLElement[];
    selectable: SelectableLayer | false;
    constructor(uiApi: UiApi, options?: UiElementOptions);
    setContents(html: string, escape?: boolean): this;
    addClass(...classes: string[]): this;
    removeClass(...classes: string[]): this;
    toggleClass(...classes: string[]): this;
    toggleClass(on: boolean, ...classes: string[]): this;
    hasClass(...classes: string[]): boolean;
    setAttribute(name: string): this;
    setAttribute(name: string, value: string): this;
    getAttribute(name: string): string | null;
    removeAttribute(name: string): this;
    repaint(): void;
    isVisible(): boolean;
    show(...args: any[]): Promise<void>;
    hide(...args: any[]): Promise<void>;
    toggle(visible?: boolean, ...args: any[]): Promise<void>;
    contains(what: string | HTMLElement | IUiElement): boolean;
    appendTo(where: string | HTMLElement | IUiElement): this;
    append(elements: IterableOf<HTMLElement | IUiElement | undefined>): this;
    remove(removeFromParent?: boolean): Promise<void>;
    store(): void;
    removeChild(child: IUiElement, removeChild?: boolean): Promise<void>;
    /**
     * Remove all children
     * @param filter A predicate that filters the children not to dump
     */
    dump(filter?: (element: UiElement) => boolean): Promise<void>;
    findDescendants(selector: string): NodeListOf<Element>;
    showTooltip(): Promise<void>;
    setTooltip(tooltipOptions?: TooltipOptionsVague): void;
    getBox(): ClientRect | DOMRect;
    getOffset(): {
        top: number;
        left: number;
    };
    getNthChild(nth?: number): UiElement<any>;
    getChildren(): UiElement<any>[];
    scrollTo(child: UiElement, ms?: number): void;
    getStyle(styleName: string): string;
    then(cb: (this: this, button: this) => any, ...args: any[]): this;
    private initializeTooltip();
}
