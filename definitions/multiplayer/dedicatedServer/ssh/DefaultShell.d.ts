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
import { ISshSession, ISshStream } from "./ISsh";
import { ISshCommandManager } from "./ISshCommandManager";
import ISshShell from "./ISshShell";
import Shell from "./Shell";
export default class DefaultShell extends Shell implements ISshShell {
    private readonly username;
    private readonly serverName;
    readonly sshCommandManager: ISshCommandManager;
    constructor(session: ISshSession, stream: ISshStream, username: string, serverName: string);
    /**
     * Writes the marker
     */
    writeMarker(): Promise<void>;
    /**
     * Processes a line sent for the session
     * @returns A shell to push a new action shell, false to exit the session, undefined to keep the active shell going
     */
    processLine(line: string): Promise<Shell | false | undefined>;
    /**
     * Check if Ctrl+C is allowed to close the shell
     * @return True if you want ctrl+c to close the shell
     */
    protected allowCtrlCClose(): boolean;
}
