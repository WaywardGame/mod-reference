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
export interface IServerList {
    servers: IServer[];
}
export interface IServer {
    id: string;
    name: string;
    players: number;
    maxPlayers: number;
    address: string;
    port: number;
    isDedicatedServer: boolean;
}
declare class ServerDirectory {
    getServerList(): Promise<IServer[]>;
}
declare const serverDirectory: ServerDirectory;
export default serverDirectory;
