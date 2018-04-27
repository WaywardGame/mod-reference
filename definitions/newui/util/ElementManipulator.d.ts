export interface IElementWrapper {
    element: HTMLElement;
}
export declare class ClassListManipulator<E extends IElementWrapper = IElementWrapper> {
    private readonly element;
    constructor(element: E);
    add(...classes: string[]): E;
    remove(...classes: string[]): E;
    toggle(...classes: string[]): E;
    toggle(on: boolean, ...classes: string[]): E;
    has(...classes: string[]): boolean;
}
export declare class AttributeManipulator<E extends IElementWrapper = IElementWrapper> {
    private readonly element;
    constructor(element: E);
    set(name: string, value: string): E;
    set(attributes: IterableOf<[string, string | null]>): E;
    get(name: string): string;
    get(name: string, ...attributes: string[]): IterableIterator<[string, string | null]>;
    remove(...attributes: string[]): E;
    has(...attributes: string[]): boolean;
    private getAttributeIterator(...attributes);
}
