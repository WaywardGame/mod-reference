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
export interface ISshServerOptions {
    ssh2: any;
    crypto: any;
    fs: IFileSystem;
    serverName: string;
    port: number;
    serverKeyPath: string;
    publicKeyPath: string;
    username: string;
    password?: string;
}
export declare function start(options: ISshServerOptions): void;
