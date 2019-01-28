/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 *
 *
 */
export declare enum MilestoneType {
    Abnormalizer = 0,
    Chef = 1,
    Exterminator = 2,
    Crafter = 3,
    Gardener = 4,
    Gatherer = 5,
    Hunter = 6,
    Locksmith = 7,
    ReaperOfSouls = 8,
    Survivor = 9,
    Thrower = 10,
    Trapper = 11,
    TreasureHunter = 12,
    Collector = 13,
    Explorer = 14,
    Grandmaster = 15,
    Prepared = 16,
    Doctor = 17,
    Artificer = 18,
    Seafarer = 19,
    Navigator = 20,
    DragonSlayer = 21,
    Treasurer = 22,
    Pulchritudinous = 23,
    Friendly = 24,
    Malevolent = 25,
    Benevolent = 26,
    Boundless = 27,
    Talented = 28,
    Weathered = 29,
    Seasoned = 30,
    Pacifier = 31,
    Merchant = 32,
    Notekeeper = 33,
    Operator = 34,
    Huntsman = 35
}
export declare enum MilestoneVisibility {
    Visible = 0,
    Invisible = 1,
    Hidden = 2
}
export declare enum MilestoneDataType {
    Counter = 0,
    Check = 1
}
export interface IMilestone {
    amount: number;
    dataType?: MilestoneDataType;
    visibility?: MilestoneVisibility;
}
export interface IMilestoneData {
    amount: number;
    data?: number[];
}
