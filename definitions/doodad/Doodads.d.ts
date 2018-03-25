import Registrar, { IRegistrarItem } from "game/Registrar";
import { IDoodad, IDoodadDescription, IDoodadOptions, IGroupDescription } from "IDoodad";
export interface IDoodadClass extends IRegistrarItem {
    new (id?: number, x?: number, y?: number, z?: number, options?: IDoodadOptions): IDoodad;
}
export declare const registrar: Registrar<IDoodadClass>;
export declare const doodadDescriptions: SaferDescription<IDoodadDescription>;
export default doodadDescriptions;
export declare const doodadGroups: Description<IGroupDescription>;
