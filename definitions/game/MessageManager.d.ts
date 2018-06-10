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
import IBaseHumanEntity from "entity/IBaseHumanEntity";
import { MessageSource } from "game/IMessageManager";
import { Message, MessageType } from "language/IMessages";
import IPlayer from "player/IPlayer";
import { IVector3 } from "utilities/math/IVector";
import { IStringSection } from "utilities/string/Interpolator";
export interface IMessage {
    id: number;
    source: MessageSource[];
    message: IStringSection[];
}
export default class MessageManager {
    private _source;
    private _type;
    private readonly history;
    private lastMessageId;
    private canSend;
    getMessageHistory(): IterableIterator<IMessage>;
    /**
     * Clears the entire message history.
     */
    clear(): void;
    /**
     * Sets the source of the next message.
     */
    source(...sources: MessageSource[]): this;
    /**
     * Sets the type of the next message.
     */
    type(type?: MessageType): this;
    /**
     * Sets the human this message will be sent to. If the human is not the local player, or is undefined,
     * the message will be sent.
     */
    toHuman(human?: IBaseHumanEntity, canSee?: IVector3): this;
    /**
     * Sends a message, and adds it to the message history.
     * @param message The message to send.
     * @param args Arguments to interpolate the message with.
     *
     * Note: After sending a message, the message source, type, and human (if any) are reset.
     */
    send(message: string | IStringSection[] | Message, ...args: any[]): boolean;
    /**
     * Sends a chat message from the player
     */
    sendChatMessage(player: IPlayer, message: string): this;
}
