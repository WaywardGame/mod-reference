import { Dictionary, ITranslationObject, UiTranslation } from "language/ILanguage";
import Translation from "language/Translation";
import { AttributeManipulator, ClassListManipulator } from "newui/util/ElementManipulator";
import Emitter from "utilities/Emitter";
import { IStringSection } from "utilities/string/Interpolator";
export declare enum ComponentEvent {
    Show = 0,
    Hide = 1,
    Append = 2,
    Remove = 3,
    RemoveForAppend = 4,
    AddChild = 5,
    RemoveChild = 6,
    InputChange = 7,
    WillRemove = 8
}
export declare type AppendStrategy = "append" | "prepend" | {
    after: IComponent;
} | {
    before: IComponent;
};
export declare module AppendStrategy {
    const Append = "append";
    const Prepend = "prepend";
    function after(component: IComponent): {
        after: IComponent;
    };
    function before(component: IComponent): {
        before: IComponent;
    };
}
export interface IComponent extends Emitter {
    /**
     * The element that this `UiElement` instance wraps.
     */
    element: HTMLElement;
    /**
     * The `dataset` of the internal element.
     */
    dataset: DOMStringMap;
    /**
     * The `scrollHeight` of the internal element.
     */
    scrollHeight: number;
    /**
     * The `style` of the internal element.
     */
    style: CSSStyleDeclaration;
    /**
     * The number of child `UiElement`s in this element.
     */
    childCount: number;
    /**
     * The selectable layer of this element, or `false` if it is not selectable.
     */
    selectable: false | SelectableLayer;
    classes: ClassListManipulator<this>;
    attributes: AttributeManipulator<this>;
    listen: Element["addEventListener"];
    /**
     * Sets the ID of this component's element.
     */
    setId(id: string): this;
    /**
     * Return a proxy for the data on this element that uses `JSON.stringify` and `JSON.parse` to set
     * and retrieve data.
     */
    jsonData<T = any>(): DOMStringMap & T;
    /**
     * Returns whether the element is visible.
     */
    isVisible(): boolean;
    /**
     * Shows the element.
     */
    show(): this;
    /**
     * Hides the element. If a tooltip is shown for this element, hides that as well.
     */
    hide(): this;
    /**
     * Toggles the visibility of this element. Internally uses `show` and `hide`.
     * @param visible The new visiblity of this element.
     */
    toggle(visible: boolean): this;
    /**
     * Append this element to another element, by selector, element, or UiElement.
     *
     * The element is only added to a UiElement wrapper if given that wrapper and not its internal element.
     */
    appendTo(element: string | HTMLElement | IComponent, appendStrategy?: AppendStrategy): this;
    /**
     * Append every element of a list of elements.
     * @param elements A varargs list of elements or iterables of elements. `undefined` is skipped
     */
    append(...elements: Array<HTMLElement | IComponent | undefined | IterableOf<HTMLElement | IComponent | undefined>>): this;
    /**
     * Remove this element.
     *
     * This will remove all child UiElements, remove itself from its parent UiElement, and then remove
     * itself from the DOM.
     */
    remove(): void;
    /**
     * Returns whether this UiElement contains the given element.
     */
    contains(what: string | HTMLElement | IComponent): boolean;
    /**
     * Remove all children
     */
    dump(): this;
    /**
     * Remove all children that are not filtered out with the given filter function
     * @param filter A function that will return true if the child should be kept
     */
    dump(filter: (element: IComponent) => boolean): this;
    /**
     * Sets the contents of this element using `innerHTML`.
     * @param html The content, an HTML string. Script tags will not be executed, as per the normal functionality of `innerHTML`
     * @param escape Only the text within the HTML will be appended, not the tags.
     */
    setContents(html: string, escape?: boolean): this;
    /**
     * Moves this element to a hidden element, in order to retain any information the element had.
     * This allows the element to be re-appended later without re-adding event handlers, CSS, or
     * any other data.
     */
    store(): void;
    /**
     * An alias for `element.querySelectorAll(selector)`
     */
    findDescendants(selector: string): NodeListOf<Element>;
    /**
     * Sets the tooltip options for this element. Setting the tooltip to undefined, or not
     * providing the argument removes the tooltip options.
     */
    setTooltip(initializer: (tooltip: ITooltip) => ITooltip): this;
    /**
     * Remove the context menu from this element
     */
    setContextMenu(): void;
    /**
     * Set the context menu for this element
     */
    setContextMenu(generator: () => IComponent): void;
    /**
     * An alias for `element.getBoundingClientRect()`
     */
    getBox(): ClientRect | DOMRect;
    /**
     * Returns an object containing `element.offsetTop` and `element.offsetLeft`
     */
    getOffset(): {
        top: number;
        left: number;
    };
    /**
     * Returns the `nth` child, defaulting to the first child
     */
    getNthChild(nth?: number): IComponent;
    /**
     * Returns a new array of the children
     */
    getChildren(): IComponent[];
    /**
     * Scrolls this element so the given child is at the top of the viewport.
     * @param child The child to scroll to
     * @param ms The time to take, defaulting to 1000 (1 second)
     */
    scrollTo(child: IComponent, ms?: number): void;
    /**
     * Returns the computed style property value of the given style name.
     *
     * An alias of `getComputedStyle(element).getPropertyValue(styleName)`
     */
    getStyle(styleName: string): string;
    /**
     * Runs the given callback with the given arguments. `this` and the first argument are this element.
     * @param cb The callback to run.
     * @param args The arguments with which to call the callback.
     */
    schedule(cb?: (this: this, button: this, ...args: any[]) => any, ...args: any[]): this;
    /**
     * Runs the given callback with the given arguments, after the specified amount of time.
     * `this` and the first argument are this element.
     * @param ms The amount of time to wait before running the callback, in milliseconds.
     * @param cb The callback to run.
     * @param args The arguments with which to call the callback.
     */
    schedule(ms: number, cb?: (this: this, button: this, ...args: any[]) => any, ...args: any[]): this;
    /**
     * Triggers a repaint on this element.
     */
    repaint(): void;
}
export interface IContextMenu<OptionType extends number | string | symbol = number | string | symbol> extends IComponent {
    setPosition(x: number, y: number, right?: boolean): this;
    hideAndRemove(): Promise<void>;
}
export declare enum Namespace {
    SVG = "http://www.w3.org/2000/svg"
}
export declare enum SelectableLayer {
    Primary = 0,
    Secondary = 1,
    Tertiary = 2,
    Quaternary = 3
}
export interface IBaseTranslationData {
    dictionary: Dictionary;
    entry: number | [number, keyof ITranslationObject];
    args?: any[] | (() => any[]);
    properties?: string[];
    shouldTrim?: false;
}
export declare type TranslationData = IBaseTranslationData | (Partial<IBaseTranslationData> & {
    entry: UiTranslation;
});
export declare type TextOrTranslationData = string | UiTranslation | TranslationData;
export declare enum TooltipLocation {
    AboveLeft = 0,
    AboveRight = 1,
    TopLeft = 2,
    TopRight = 3,
    CenterLeft = 4,
    CenterRight = 5,
    BottomLeft = 6,
    BottomRight = 7,
    BeneathLeft = 8,
    BeneathRight = 9,
    Mouse = 10
}
export interface ITooltip extends IComponent {
    setLocation(location: TooltipLocation): this;
    setMaxWidth(maxWidth: number): this;
    setNoCache(): this;
    addText(initializer: (text: IText) => any): this;
    addHeading(initializer: (text: IText) => any): this;
    addParagraph(initializer: (text: IText) => any): this;
}
export interface IText extends IComponent {
    setText(translation: TranslationGenerator): this;
}
export declare type TranslationGenerator = Translation | UiTranslation | (() => IStringSection[] | Translation | UiTranslation | undefined);
export declare type HighlightSelector = [HighlightType, string | number];
export interface IHighlight {
    selectors: HighlightSelector[];
    iterations?: number;
}
export declare enum HighlightType {
    Stat = 0,
    MenuBarButton = 1
}
