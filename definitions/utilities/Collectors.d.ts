declare module Collectors {
    function toArray<T>(iterable: IterableIterator<T>): T[];
    function toString(join: string): (iterable: IterableIterator<any>) => string;
}
export default Collectors;
