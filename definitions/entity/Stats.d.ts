export declare enum Stat {
    Health = 0,
    Stamina = 1,
    Hunger = 2,
    Thirst = 3,
    Weight = 4,
    /**
     * Used for chicken eggs and goat milk
     */
    Produce = 5,
    /**
     * Used for tamed animals
     */
    Happiness = 6,
    /**
     * Used for merchant
     */
    Credits = 7,
}
export declare type IStats = {
    [key in keyof typeof Stat]: IStat;
};
export interface IStatBase {
    readonly type: Stat;
    readonly value: number;
    readonly max: number | undefined;
    /**
     * The number of turns remaining until the stat changes.
     */
    changeTimer: number | undefined;
    /**
     * The value `changeTimer` will be reset to when it reaches `0`.
     */
    readonly nextChangeTimer: number | undefined;
    /**
     * The amount the value should change by when the `changeTimer` reaches `0`.
     * When not provided, defaults to `1`.
     */
    changeAmount?: number;
}
export interface IStatMax extends IStatBase {
    max: number;
}
export interface IStatChanging extends IStatBase {
    changeAmount: number;
    changeTimer: number;
    nextChangeTimer: number;
}
export declare type IStat = IStatBase | IStatMax | IStatChanging;
export declare enum StatDisplayType {
    /**
     * Allow implementation to decide the display type automatically
     */
    Auto = 0,
    /**
     * Display as an attribute
     */
    Attribute = 1,
    /**
     * Display as a statbar
     */
    Statbar = 2,
}
export interface IStatDescription {
    /**
     * Defaults to `#ffffff`
     */
    color?: string;
    /**
     * Defaults to `StatDisplayType.Auto`
     */
    displayType?: StatDisplayType;
    /**
     * Requires `StatDisplayType.Attribute`.
     *
     * For overriding the normal formatted output of a stat.
     */
    getFormatted?(): string;
}
export interface IStatFactory {
    get(): IStat;
}
export declare const statDescriptions: Description<IStatDescription>;
