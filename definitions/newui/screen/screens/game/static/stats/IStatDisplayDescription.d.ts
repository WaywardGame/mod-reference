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
import IBaseEntity from "entity/IBaseEntity";
import { IStat, StatDisplayType } from "entity/IStats";
import { IModdable } from "Enums";
import Component from "newui/component/Component";
import { ITooltip } from "newui/component/IComponent";
import { IStringSection } from "utilities/string/Interpolator";
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
     * Handlers for when the stat changes. Called when the stat changes & when the stat max changes.
     */
    onChange?: Array<(statElement: Component, entity: IBaseEntity, stat: IStat, oldValue?: number) => void>;
    /**
     * Requires `StatDisplayType.Attribute`.
     *
     * For overriding the normal formatted output of a stat.
     */
    getFormatted?(entity: IBaseEntity, stat?: IStat): IStringSection[];
    /**
     * A function that will initialize a tooltip for this stat element
     */
    tooltip?(tooltip: ITooltip, entity: IBaseEntity, stat?: IStat): any;
}
