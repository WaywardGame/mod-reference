/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
export declare enum Stat {
    Health = 0,
    Stamina = 1,
    Hunger = 2,
    Thirst = 3,
    Weight = 4,
    Attack = 5,
    /**
     * Positive reputation
     */
    Benignity = 6,
    /**
     * Negative reputation
     */
    Malignity = 7,
    /**
     * The base defense of the player.
     * UI only. Does not exist on `Player` instances.
     */
    Defense = 8,
    /**
     * A combination of `Stat.Benignity` + `Stat.Malignity`
     * UI only. Does not exist on `Player` instances.
     */
    Reputation = 9,
    /**
     * A combination of `Stat.Hunger` + `Stat.Thirst`
     * Does not exist on `Player` instances. Used for item legendaries.
     */
    Metabolism = 10,
    /**
     * Used to calculate the max weight & max health of the player.
     */
    Strength = 11,
    /**
     * Used for chicken eggs and goat milk
     */
    Produce = 12,
    /**
     * Used for tamed animals
     */
    Happiness = 13,
    Tamed = 14
}
export declare type IStats = {
    [key in keyof typeof Stat]: IStat;
};
export interface IStatBase {
    readonly type: Stat;
    readonly value: number;
    readonly max: number | undefined;
    /**
     * If set to `true`, when the `value` changes it isn't clamped to the `max`.
     * EG: `max` in this case will usually only be useful visually
     */
    canExceedMax?: true;
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
    /**
     * A bonus value added to be added to `max` and `value`.
     */
    bonus?: number;
}
export interface IStatMax extends IStatBase {
    readonly max: number;
}
export interface IStatChanging extends IStatBase {
    changeAmount: number;
    changeTimer: number;
    readonly nextChangeTimer: number;
}
export interface IStatBonus extends IStatBase {
    bonus: number;
}
export declare type IStat = IStatBase | IStatMax | IStatChanging | IStatBonus;
export declare enum StatDisplayType {
    /**
     * Do not display this stat
     */
    None = 0,
    /**
     * Allow implementation to decide the display type automatically
     */
    Auto = 1,
    /**
     * Display as an attribute
     */
    Attribute = 2,
    /**
     * Display as a statbar
     */
    Statbar = 3
}
export interface IStatFactory {
    get(): IStat;
}
