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
import { IStreamable } from "utilities/stream/IStream";
export default class RangeStream implements IStreamable<number> {
    private readonly end;
    private readonly step;
    private _done;
    private _value;
    readonly value: number;
    readonly done: boolean;
    constructor(start: number, end: number, step: number);
    next(): void;
}
