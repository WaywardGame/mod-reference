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
import IEntity from "entity/IEntity";
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
     * Sets the "bonus" for the stat. This changes the value that will be returned.
     */
    setBonus(bonus: number): this;
    /**
     * Initializes the `IStat` constructed by this factory on the given entity.
     */
    initializeOn(entity: IEntity): void;
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
