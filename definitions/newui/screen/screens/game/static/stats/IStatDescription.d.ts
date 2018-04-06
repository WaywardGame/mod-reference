import IBaseEntity from "entity/IBaseEntity";
import { IStat, StatDisplayType } from "entity/IStats";
import { IModdable } from "Enums";
import { TooltipOptionsVague } from "newui/element/IUiElement";
import UiElement from "newui/element/UiElement";
export interface IStatDisplayDescription extends IModdable {
    imagePath?: string | ((entity: IBaseEntity, stat?: IStat) => string);
    /**
     * Defaults to `#ffffff`
     */
    color?: string | ((entity: IBaseEntity, stat?: IStat) => string);
    /**
     * Defaults to `StatDisplayType.Auto`
     */
    displayType?: StatDisplayType;
    /**
     * For the order this stat displays in. Smaller numbers appear higher in the list.
     *
     * Not providing `displayPriority` uses `100`.
     */
    displayOrder?: number;
    /**
     * Gets the tooltip data for this stat.
     */
    tooltip?: Partial<TooltipOptionsVague> | ((entity: IBaseEntity, stat?: IStat) => Partial<TooltipOptionsVague>);
    /**
     * Handlers for when the stat changes. Called when the stat changes & when the stat max changes.
     */
    onChange?: Array<(statElement: UiElement, entity: IBaseEntity, stat: IStat, oldValue?: number) => void>;
    /**
     * Requires `StatDisplayType.Attribute`.
     *
     * For overriding the normal formatted output of a stat.
     */
    getFormatted?(entity: IBaseEntity, stat?: IStat): string;
}
