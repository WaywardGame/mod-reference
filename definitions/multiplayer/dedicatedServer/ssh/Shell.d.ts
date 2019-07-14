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
import { IMessage } from "entity/player/IMessageManager";
import Player from "entity/player/Player";
import { ISshSession, ISshStream } from "./ISsh";
export default abstract class Shell {
    readonly session: ISshSession;
    readonly stream: ISshStream;
    protected active: boolean;
    protected line: string;
    protected cursor: number;
    private buffer;
    private history;
    private historyCursor;
    private watchMessages;
    constructor(session: ISshSession, stream: ISshStream);
    start(): Promise<boolean>;
    stop(): void;
    allowHistory(): void;
    write(data: string): void;
    flush(): void;
    processData(data: string): Promise<Shell | false | undefined>;
    executeWithMessageRedirect(executor: () => Promise<void>): Promise<void>;
    displayMessage(_: Player, message: IMessage): void;
    /**
     * Writes the marker
     */
    abstract writeMarker(): Promise<void>;
    /**
     * Processes a line sent for the session
     * @returns A shell to push a new action shell, false to exit the session, undefined to keep the active shell going
     */
    abstract processLine(line: string): Promise<Shell | false | undefined>;
    /**
     * Check if Ctrl+C is allowed to close the shell
     * @return True if you want ctrl+c to close the shell
     */
    protected allowCtrlCClose(): boolean;
}
