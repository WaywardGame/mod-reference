import Registrar, { IRegistrarItem } from "game/Registrar";
import { INPC } from "npc/INPC";
export interface INPCClass extends IRegistrarItem {
    new (id?: number, x?: number, y?: number, z?: number): INPC;
}
export declare const registrar: Registrar<INPCClass>;
