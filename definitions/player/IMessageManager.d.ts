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
import Message from "language/dictionary/Message";
import { ISerializedTranslation } from "language/Translation";
import { MessageType } from "player/MessageManager";
import { IVector3 } from "utilities/math/IVector";
export declare enum Source {
    /**
     * Every message
     */
    All = 0,
    /**
     * Messages referring to the actions you just took
     */
    Action = 1,
    /**
     * Messages pertaining to your allies (tamed creatures, NPCs, and other players (including in PVP))
     */
    Allies = 2,
    /**
     * Messages sent by a player
     */
    Chat = 3,
    /**
     * Messages pertaining to creatures or combat
     */
    Combat = 4,
    /**
     * Messages in response to a command
     */
    Command = 5,
    /**
     * Messages about creatures and creature actions
     */
    Creature = 6,
    /**
     * Messages referring to your equipment. Tools, armour, things breaking, etc
     */
    Equipment = 7,
    /**
     * Any non-chat message
     */
    Game = 8,
    /**
     * Messages about item interactions of any kind
     */
    Item = 9,
    /**
     * Messages about the metagame — saving the game, exiting the game, pausing/unpausing, etc.
     */
    Meta = 10,
    /**
     * Messages pertaining to milestones
     */
    Milestone = 11,
    /**
     * Messages pertaining to multiplayer
     */
    Multiplayer = 12,
    /**
     * Messages regarding item gathering, harvesting and carving
     */
    Resource = 13,
    /**
     * Messages pertaining to skills that are raised
     */
    Skill = 14,
    /**
     * Messages pertaining to your wellbeing — stats, status effects, etc.
     */
    Wellbeing = 15,
    /**
     * "You felt your X increasing" messages
     */
    Stat = 16
}
export interface IMessage {
    id: number;
    source: Source[];
    time: number;
    turn: number;
    type?: MessageType;
    message: ISerializedTranslation;
}
export interface IMessageManager {
    getMessageHistory(): IterableIterator<IMessage>;
    clear(): this;
    source(noGameSource: true, ...sources: Array<Source | false | undefined>): this;
    source(...sources: Array<Source | false | undefined>): this;
    type(type?: MessageType): this;
    ifVisible(human?: Human, canSee?: IVector3): this;
    send(message: Message, ...args: any[]): boolean;
}
