import IBaseEntity from "entity/IBaseEntity";
import { IStat, IStatFactory, IStats, Stat } from "entity/IStats";
declare class StatFactory implements IStatFactory {
    private readonly result;
    /**
     * @param type The `Stat` this factory is building
     * @param value The starting value of this stat. Defaults to `0`
     */
    constructor(type: Stat, value?: number);
    /**
     * Sets the max value this stat can be
     */
    setMax(max: number, canExceed?: true): this;
    /**
     * Sets the stat to change over time.
     * @param timer The number of turns that should pass before the stat should change.
     * @param amt The amount the stat should change, whenever the timer completes.
     *
     * Stat timers are managed by their parent Entity. Currently, only players support `changeTimer`
     */
    setChangeTimer(timer: number, amt?: number): this;
    /**
     * Initializes the `IStat` constructed by this factory on the given entity.
     */
    initializeOn(entity: IBaseEntity): void;
    get(): IStat;
}
declare module StatFactory {
    /**
     * Stats are stored by their names, not their ordinal. Therefore, to access a stat, you must first
     * get the name of the stat. `entity.stats[Stat[<your stat here>]]`. This is unweildy especially
     * for `IStats` construction. This function is provided to alleviate that.
     * @param stats A list of `StatFactory` instances to construct the `IStats` instance from.
     *
     * When passing multiple `StatFactory`s of the same `Stat`, the latter will replace the former.
     */
    function getStats(...stats: Array<StatFactory | undefined>): IStats;
}
export default StatFactory;
