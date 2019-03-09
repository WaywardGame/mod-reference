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
import IExploreMap from "renderer/IExploreMap";
import { IPreSerializeCallback } from "save/ISerializer";
export default class ExploredMapClientData implements IPreSerializeCallback {
    exploredMapEncodedData: number[][];
    exploredMap: IExploreMap[] | undefined;
    preSerializeObject(): void;
    getExploreMap(z: number): IExploreMap;
    restoreExploredMap(): void;
}
