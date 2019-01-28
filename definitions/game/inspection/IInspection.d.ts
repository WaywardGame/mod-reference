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
