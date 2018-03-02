declare module Enums {
    function isModded<Enum extends number>(enumObject: any, entry: Enum): boolean;
    function findByName<Enum extends number>(enumObject: any, name: string): Enum | undefined;
    function getNth<Enum extends number>(enumObject: any, n: number): Enum | undefined;
    function getLength(enumObject: any): any;
    function getRandom<Enum extends number>(enumObject: any): Enum;
    function keys(enumObject: any): IterableIterator<string>;
    function values<Enum extends number>(enumObject: any): IterableIterator<Enum>;
    function entries<Enum extends number>(enumObject: any): IterableIterator<[string, Enum]>;
    function toString(enumObject: any, n: number): string;
    /**
     * @deprecated
     */
    function getNext(enumObject: any, n: number): number;
    /**
     * @deprecated
     */
    function getPrevious(enumObject: any, n: number): number;
}
export default Enums;
