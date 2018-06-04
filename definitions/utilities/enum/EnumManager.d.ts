import { IModInfo } from "mod/IModInfo";
import { EnumId, IEnumInfo } from "utilities/enum/IEnum";
declare module EnumManager {
    function isModdable(enumObject: any): boolean;
    function getMod(enumObject: any, enumName: string): IModInfo | undefined;
    function initialize(): void;
    function initializeGameState(): void;
    function restore(): void;
    function reset(): void;
    function allocate(modIndex: number, id: EnumId, name: string, objectValue?: ((enumNumber: number) => any) | any, onAllocate?: ((enumNumber: number) => void), onUnallocate?: ((enumNumber: number) => void)): IEnumInfo | undefined;
    function unallocate(enumInfo: IEnumInfo): void;
    function unallocateMod(modIndex: number): void;
}
export default EnumManager;
