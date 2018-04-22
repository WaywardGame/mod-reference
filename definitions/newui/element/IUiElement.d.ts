import { Dictionary, UiTranslation } from "language/ILanguage";
import Emitter from "utilities/Emitter";
import { ISplit } from "utilities/string/Interpolate";
export declare enum UiElementEvent {
    Show = 0,
    Hide = 1,
    Append = 2,
    Remove = 3,
    AddChild = 4,
    RemoveChild = 5,
    Change = 6,
    Tooltip = 7,
}
export interface IUiElement<T = any> extends Emitter {
    jsonData: DOMStringMap & T;
    data: DOMStringMap;
    addClass(...classes: string[]): this;
    removeClass(...classes: string[]): this;
    isVisible(): boolean;
    show(...args: any[]): Promise<void>;
    hide(...args: any[]): Promise<void>;
    toggle(visible: boolean, ...args: any[]): Promise<void>;
    /**
     * Moves this element to a hidden element, in order to retain any information the element had.
     * This allows the element to be re-appended later without re-adding event handlers, CSS, or
     * any other data.
     */
    store(): void;
    appendTo(element: string | HTMLElement | IUiElement): this;
    append(elements: IterableOf<HTMLElement | IUiElement | undefined>): this;
    remove(removeFromParent?: boolean): Promise<void>;
    removeChild(child: IUiElement, removeChild?: boolean): void;
    findDescendants(selector: string): NodeListOf<Element>;
    contains(what: string | HTMLElement | IUiElement): boolean;
    showTooltip(): Promise<void>;
}
export interface IUiElementOptions {
    visible?: boolean;
    elementType?: string;
    namespace?: Namespace;
    id?: string;
    classes?: string[];
    attributes?: {
        [key: string]: string | number;
    };
    tooltip?: ITooltipOptionsVague | boolean;
    selectable?: SelectableLayer;
}
export declare enum Namespace {
    SVG = "http://www.w3.org/2000/svg",
}
export declare enum SelectableLayer {
    Primary = 0,
    Secondary = 1,
    Tertiary = 2,
    Quaternary = 3,
}
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
    Mouse = 10,
}
export declare type TooltipTextData = TextOrTranslationData | ISplit[];
export interface ITooltipOptionsVague extends IUiElementOptions {
    tooltip?: never;
    location: TooltipLocation;
    heading?: TextOrTranslationData;
    text?: TooltipTextData | (() => TooltipTextData);
    cache?: false;
    maxWidth?: number;
    create?(tooltip: IUiElement): Promise<void>;
}
export interface IBaseTranslationData {
    dictionary: Dictionary;
    entry: number;
    args?: any[] | (() => any[]);
    properties?: string[];
    shouldTrim?: false;
}
export declare type TranslationData = IBaseTranslationData | (Partial<IBaseTranslationData> & {
    entry: UiTranslation;
});
export declare type TextOrTranslationData = string | UiTranslation | TranslationData;
