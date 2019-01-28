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
import Translation from "language/Translation";
import { UiApi } from "newui/INewUi";
export declare enum EnumSort {
    Name = 0,
    Id = 1
}
export default class EnumContextMenu<E extends number, K extends string> {
    private readonly api;
    private translator?;
    private readonly enumEntries;
    private _sort;
    constructor(api: UiApi, e: {
        [key in K]: E;
    }, translator?: ((e: E) => Translation) | undefined);
    setTranslator(translator: (e: E) => Translation): this;
    setSort(sort: EnumSort | ((a: E, b: E) => number)): this;
    waitForChoice(): Promise<E | undefined>;
}
