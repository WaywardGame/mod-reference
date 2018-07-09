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
import { EnumId, IEnumInfo } from "utilities/enum/IEnum";
declare module EnumManager {
    function initialize(): void;
    function initializeGameState(): void;
    function restore(): void;
    function reset(): void;
    function allocate(modIndex: number, id: EnumId, name: string, objectValue?: ((enumNumber: number) => any) | any, onAllocate?: ((enumNumber: number) => void), onUnallocate?: ((enumNumber: number) => void)): IEnumInfo | undefined;
    function unallocate(enumInfo: IEnumInfo): void;
    function unallocateMod(modIndex: number): void;
}
export default EnumManager;
