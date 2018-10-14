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
import Inspection from "game/inspection/Inspect";
import Message from "language/dictionary/Message";
import Translation from "language/Translation";
import { MessageType } from "player/MessageManager";
export declare enum InspectType {
    Player = 0,
    NPC = 1,
    Creature = 2,
    Doodad = 3,
    TileEvents = 4,
    Items = 5,
    Corpses = 6,
    Tile = 7
}
export declare enum BasicInspectionPriority {
    Player = 0,
    NPC = 1000,
    Creature = 2000,
    Doodad = 3000,
    TileEvents = 4000,
    Items = 5000,
    Corpses = 6000,
    Tile = 7000
}
export declare enum InspectionContext {
    Tooltip = 0,
    Message = 1
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
export interface IInspectionSection {
    /**
     * The border color of an inspection section.
     */
    border?: string;
    content: IterableOf<Translation | IInspection | undefined>;
}
export interface IInspectionSectionSimple extends IInspectionSection {
    content: IterableIterator<IInspection>;
}
export declare type InspectionResult = IterableOf<IInspectionSection | IInspectionSection["content"] | undefined> | undefined;
export interface IInspection {
    text: Translation;
    /**
     * If this inspection is in a message context, this changes the message type the inspection is sent with.
     */
    messageType?: MessageType;
    /**
     * This inspection is a title. If we're in a tooltip context, this inspection will be a larger font size and use title case.
     */
    title?: true;
    /**
     * This inspection is the name of a thing — if we're in a message context, this inspection will be passed to "You see {0}".
     */
    name?: true;
    /**
     * This is "extra information" that won't be shown by default, if we're in a tooltip context.
     * A bindable must be held to see this information.
     */
    extra?: true;
}
export interface IInspectable {
    inspect(inspection: Inspection, result: InspectionSection): any;
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
    constructor();
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
