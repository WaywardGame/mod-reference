/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { IInspection, IInspectionSection, InspectionResult, InspectType } from "game/inspection/IInspection";
import Inspection from "game/inspection/Inspect";
import Message from "language/dictionary/Message";
import Translation from "language/Translation";
export interface IInspectable {
    inspect(inspection: Inspection, result: InspectionSection): any;
}
export interface IInspectionHandler {
    /**
     * Defaults to `0`. Higher numbers are prioritised — IE, they are positioned above/before inspections with lower numbers.
     *
     * To position your inspection relative to "vanilla" inspection types, add or subtract from a `BasicInspectionPriority` enum entry.
     */
    priority?: number;
    handle(inspection: Inspection): InspectionResult;
}
/**
 * A helper class for creating inspection sections.
 */
export declare class InspectionSection implements IInspectionSection {
    /**
     * Returns an inspection section for an inspectable object, IE a creature or doodad.
     * @param inspection The inspection instance, containing some data defining the context and such of the inspection.
     * @param inspectable The object to inspect.
     */
    static get(inspection: Inspection, inspectable: IInspectable): InspectionSection[];
    /**
     * The CSS color of this inspection section's border.
     */
    border?: string;
    /**
     * An array of objects representing paragraphs/headings in this inspection section.
     */
    readonly content: IInspection[];
    /**
     * Adds headings/paragraphs to this inspection section.
     */
    add(...items: Array<IInspection | Translation | undefined | Message.None>): this;
    /**
     * Adds "extra" headings/paragraphs to this inspection section. These won't be displayed unless "always show more information" is enabled
     * or the "show more information" bind is pressed.
     *
     * This method is just an alias for using `add` with inspections that have the `extra` field set to `true`.
     */
    addExtra(...items: Array<IInspection | Translation | undefined | Message.None>): this;
    /**
     * Adds headings/paragraphs from the callback function to this inspection section, if the first argument is a truthy value.
     */
    addIf(ifTruthy: boolean | number | string | undefined | null, add: () => IterableOfOr<IInspection | Translation | undefined | Message.None>): this;
}
declare const inspections: OptionalDescriptions<InspectType, IInspectionHandler | IInspectionHandler["handle"]>;
export default inspections;
