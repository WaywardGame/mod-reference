import { IDoodad, IDoodadOptions } from "doodad/IDoodad";
import Registrar, { IRegistrarItem } from "game/Registrar";
export interface IDoodadClass extends IRegistrarItem {
    new (id?: number, x?: number, y?: number, z?: number, options?: IDoodadOptions): IDoodad;
}
export declare const registrar: Registrar<IDoodadClass>;
