import { IUiElement, SelectableLayer, UiApi, UiElementOptions } from "newui/INewUi";
import { Emitter } from "Utilities";
export default class UiElement<T = {}> extends Emitter implements IUiElement {
    protected uiApi: UiApi;
    protected children: UiElement[];
    protected parent: UiElement;
    private _element;
    private scrollingChild?;
    private _data;
    private tooltipOptions;
    readonly element: HTMLElement;
    readonly jsonData: DOMStringMap & T;
    readonly data: DOMStringMap;
    readonly childCount: number;
    readonly scrollHeight: number;
    readonly style: CSSStyleDeclaration;
    static findDescendants(inElement: UiElement | HTMLElement, selector: string, includeSelf?: boolean): HTMLElement[];
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
    append(elements: Array<HTMLElement | IUiElement | undefined>): this;
    remove(removeFromParent?: boolean): Promise<void>;
    removeChild(child: IUiElement, removeChild?: boolean): Promise<void>;
    /**
     * Remove all children
     * @param filter A predicate that filters the children not to dump
     */
    dump(filter?: (element: UiElement) => boolean): Promise<void>;
    findDescendants(selector: string): NodeListOf<HTMLElement>;
    showTooltip(): Promise<void>;
    getBox(): ClientRect;
    getOffset(): {
        top: number;
        left: number;
    };
    getNthChild(nth?: number): UiElement<{}>;
    getChildren(): UiElement<{}>[];
    scrollTo(child: UiElement, ms?: number): void;
    getStyle(styleName: string): string;
    then(cb: (this: this, button: this) => any, ...args: any[]): this;
}
