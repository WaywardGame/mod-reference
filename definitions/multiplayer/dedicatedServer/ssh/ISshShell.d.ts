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
export default interface ISshShell {
    readonly session: ISshSession;
    readonly stream: ISshStream;
    readonly sshCommandManager?: ISshCommandManager;
    write(data: string): void;
    flush(): void;
    executeWithMessageRedirect(executor: () => Promise<void>): Promise<void>;
}
