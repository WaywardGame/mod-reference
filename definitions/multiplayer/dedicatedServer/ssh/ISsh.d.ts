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
import Log from "utilities/Log";
export declare const globalHistory: Map<string, string[]>;
export declare const maxHistory = 50;
export interface ISshStream {
    write(data: string): void;
    end(): void;
    exit(code: number): void;
    on(name: "error", callback: (ex: any) => void): void;
    on(name: "data", callback: (data: {
        toString(): string;
    }) => void): void;
}
export interface ISshSession {
    clientId: string;
    clientLog: Log;
}
