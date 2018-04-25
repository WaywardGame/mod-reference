import IBaseEntity from "entity/IBaseEntity";
import { IStat, IStatMax, Stat } from "entity/IStats";
import { IUiElementOptions } from "newui/element/IUiElement";
import UiElement from "newui/element/UiElement";
import { UiApi } from "newui/INewUi";
export declare abstract class StatElement extends UiElement {
    private readonly entity;
    constructor(uiApi: UiApi, entity: IBaseEntity, stat: Stat, options?: IUiElementOptions);
    /**
     * Returns the attached entity's `IStat` for this `StatElement`'s `Stat`.
     */
    getStat<S extends IStat>(): S;
    /**
     * Returns the formatted string value of this stat.
     *
     * If `statDescription.getFormatted` is defined, uses this method. Else, generates based on if the stat has a `max`
     */
    getStatValue(): string;
    /**
     * Returns the color of this stat.
     */
    getStatColor(): string;
    /**
     * Returns the formatted CSS url for the stat icon.
     */
    getStatIcon(): string;
    /**
     * Returns the display priority for this stat.
     */
    getDisplayOrder(): number;
    abstract getDisplayElement(): UiElement;
    /**
     * Returns the generic string representation of this stat.
     */
    protected getGenericStatValue(stat: IStat): string;
    /**
     * Event handler for when a stat changes. Updates the text, color, icon, and tooltip of this `StatElement`.
     *
     * Should be used for both `value` & `max` changing.
     */
    protected onStatChange(_?: any, stat?: IStat, oldValue?: number): void;
    /**
     * Event handler for when the stat tooltip is shown.
     */
    private onTooltip(_, tooltip);
}
export declare class Statbar extends StatElement {
    private readonly bar;
    constructor(uiApi: UiApi, entity: IBaseEntity, stat: Stat);
    getDisplayElement(): UiElement<any>;
    getGenericStatValue(stat: IStatMax): string;
    /**
     * Overrides the superclass method of the same name. Calls the superclass method, then updates the CSS
     * property `--stat-percent`, to update the statbar's fill width.
     */
    onStatChange(_?: any, stat?: IStat, oldValue?: number): void;
}
export declare class StatAttribute extends StatElement {
    private readonly attribute;
    constructor(uiApi: UiApi, entity: IBaseEntity, stat: Stat);
    getDisplayElement(): UiElement<any>;
}
export declare class Statbars extends UiElement {
    private readonly _statbars;
    readonly statbars: Map<Stat, Statbar>;
    constructor(uiApi: UiApi, entity: IBaseEntity, iterableOfStats: IterableIterator<Stat>);
}
export declare class StatAttributes extends UiElement {
    private readonly _attributes;
    readonly attributes: Map<Stat, StatAttribute>;
    constructor(uiApi: UiApi, entity: IBaseEntity, iterableOfStats: IterableIterator<Stat>);
}