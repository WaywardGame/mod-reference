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
import ExploredMapClientData from "save/clientStore/clientData/ExploredMap";
import NewUiData from "save/clientStore/clientData/NewUiData";
export interface IClientStore {
    get<T extends ClientDataType>(type: T): ClientDataMap<T>;
}
export default IClientStore;
export declare enum ClientDataType {
    ExploredMap = 0,
    NewUi = 1
}
export interface IClientData {
    [ClientDataType.ExploredMap]: ExploredMapClientData;
    [ClientDataType.NewUi]: NewUiData;
}
export declare type ClientDataMap<T extends ClientDataType> = IClientData[T];
