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
import IEntity, { IStatChangeInfo } from "entity/IEntity";
import { IStat, IStatMax, Stat } from "entity/IStats";
import Component from "newui/component/Component";
import Text from "newui/component/Text";
import { UiApi } from "newui/INewUi";
import { IStringSection } from "utilities/string/Interpolator";
export declare abstract class StatElement extends Component {
    private readonly stat;
    private readonly entity;
    constructor(api: UiApi, entity: IEntity, stat: Stat);
    /**
     * Returns the attached entity's `IStat` for this `StatElement`'s `Stat`.
     */
    getStat<S extends IStat>(): S;
    /**
     * Returns the formatted string value of this stat.
     *
     * If `statDescription.getFormatted` is defined, uses this method. Else, generates based on if the stat has a `max`
     */
    getStatValue(): IStringSection[];
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
    abstract getDisplayElement(): Text;
    /**
     * Returns the generic string representation of this stat.
     */
    protected getGenericStatValue(stat: IStat): IStringSection[];
    /**
     * Event handler for when a stat changes. Updates the text, color, icon, and tooltip of this `StatElement`.
     *
     * Should be used for both `value` & `max` changing.
     */
    protected onStatChange(_?: any, stat?: IStat, oldValue?: number, info?: IStatChangeInfo): void;
    /**
     * Returns the component that should have the stat tooltip
     */
    protected getTooltipElement(): Component;
    private getTooltip;
}
export declare class Statbar extends StatElement {
    private readonly bar;
    private readonly text;
    constructor(uiApi: UiApi, entity: IEntity, stat: Stat);
    getDisplayElement(): Text;
    getGenericStatValue(stat: IStatMax): IStringSection[];
    /**
     * Overrides the superclass method of the same name. Calls the superclass method, then updates the CSS
     * property `--stat-percent`, to update the statbar's fill width.
     */
    onStatChange(_?: any, stat?: IStat, oldValue?: number): void;
    protected getTooltipElement(): Component;
}
export declare class StatAttribute extends StatElement {
    private readonly attribute;
    constructor(uiApi: UiApi, entity: IEntity, stat: Stat);
    getDisplayElement(): Text;
}
export declare class Statbars extends Component {
    private readonly _statbars;
    readonly statbars: Map<Stat, Statbar>;
    constructor(uiApi: UiApi, entity: IEntity, iterableOfStats: IterableIterator<Stat>);
}
export declare class StatAttributes extends Component {
    private readonly _stats;
    readonly stats: Map<Stat, StatAttribute>;
    constructor(uiApi: UiApi, entity: IEntity, iterableOfStats: IterableIterator<Stat>);
}
