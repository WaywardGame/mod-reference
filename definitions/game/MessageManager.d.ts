import { MessageSource } from "game/IMessageManager";
import { Message, MessageType } from "language/IMessages";
import { IStringSection } from "utilities/string/Interpolator";
export default class MessageManager {
    private _source;
    private _type;
    private readonly history;
    /**
     * Sets the source of the next message.
     */
    source(...sources: MessageSource[]): this;
    /**
     * Sets the type of the next message.
     */
    type(type?: MessageType): this;
    /**
     * Sends a message, and adds it to the message history.
     * @param message The message to send.
     * @param args Arguments to interpolate the message with.
     *
     * Note: After sending a message, the message source and type are reset.
     */
    send(message: string | IStringSection[] | Message, ...args: any[]): this;
    /**
     * Sends a chat message from the local player
     */
    sendChatMessage(message: string): this;
}
