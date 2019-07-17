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
export interface ISaveInfo {
    slot: number;
    bytes?: number;
    saveObject?: ISaveObject;
}
export declare enum SaveSort {
    SaveTime = 0,
    Name = 1,
    TurnCount = 2,
    CreatedTime = 3
}
export declare enum SortDirection {
    More = 1,
    Less = -1
}
export declare let SLOT_CHALLENGE: number;
export declare let SLOT_GLOBAL: number;
export declare let SLOT_MULTIPLAYER: number;
export declare let SLOT_COUNT_MAX: number;
export declare let propertiesToSerialize: ISerializeProperty[];
export declare let propertiesToSerializeGlobal: ISerializeProperty[];
export interface ISaveObject {
    version: string;
    isCompressed: boolean;
    data: {
        [index: string]: any;
    };
}
export interface ISerializeProperty {
    key: string;
    property: string[];
    skipCompression?: boolean;
}
