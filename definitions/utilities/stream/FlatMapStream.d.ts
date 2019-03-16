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
export default class FlatMapStream<T, R> implements IStreamable<R> {
    private readonly stream;
    private readonly mapper?;
    private subIterable;
    private _value;
    private _done;
    readonly value: R;
    readonly done: boolean;
    constructor(stream: IStreamable<T>, mapper?: ((value: T) => Iterable<R>) | undefined);
    next(): void;
}
