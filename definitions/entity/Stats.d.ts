import IBaseEntity from "entity/IBaseEntity";
import { IStat, StatDisplayType } from "entity/IStats";
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
    getFormatted?(entity: IBaseEntity, stat: IStat): string;
}
declare const stats: Description<IStatDescription>;
export default stats;
