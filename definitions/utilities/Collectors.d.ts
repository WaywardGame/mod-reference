declare module Collectors {
    function toArray<T>(iterable: IterableIterator<T>): T[];
    function toString(join: string): (iterable: IterableIterator<any>) => string;
    /**
     * Creates a collector function where a value in the iterable is passed to the given function,
     * and returns the result of that function.
     * @param fn The function that takes the type of T.
     * @param strategy The strategy with which to choose which value in the iterable to return.
     * Defaults to `PassStrategy.First`
     */
    function passTo<T, X>(fn: (arg: T) => X, strategy?: PassStrategy): (iterable: IterableIterator<T>) => X;
    enum PassStrategy {
        First = 0,
        Last = 1,
        Random = 2,
    }
}
export default Collectors;
