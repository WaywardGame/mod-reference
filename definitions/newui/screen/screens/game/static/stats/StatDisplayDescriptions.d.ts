import IBaseEntity from "entity/IBaseEntity";
import { IStat, IStatBase } from "entity/IStats";
import Component from "newui/component/Component";
import { IStatDisplayDescription } from "newui/screen/screens/game/static/stats/IStatDisplayDescription";
declare const statDisplayDescriptions: Description<IStatDisplayDescription>;
export interface IStatInfo extends Partial<IStatBase> {
    value: number;
    percent: number;
    oldValue?: number;
}
/**
 * Returns a `IStatDescription["onChange"]` handler that will check a predicate and run the handler with the result of that predicate.
 * @param predicate A function that takes an `IStatInfo` object and returns whether it "matches".
 * @param handler A function that takes whether the info matches, the `statElement`, the entity, and the `IStatInfo` object and "handles" it.
 */
export declare function when(predicate: (info: IStatInfo) => boolean, handler: (matched: boolean, statElement: Component, entity: IBaseEntity, info: IStatInfo) => any): (statElement: Component, entity: IBaseEntity, stat: IStat, oldValue?: number | undefined) => void;
/**
 * Returns a `when()` handler that will toggle classes on a `statElement` based on whether the `predicate` matched.
 */
export declare function toggleClasses(...classes: string[]): (matched: boolean, statElement: Component) => void;
/**
 * Shakes the stat element if `shouldShake` is true, otherwise removes the `shake` class.
 *
 * When adding the `shake` class, removes it after 250 ms.
 */
export declare function shake(shouldShake: boolean, statElement: Component): Promise<void>;
export default statDisplayDescriptions;
