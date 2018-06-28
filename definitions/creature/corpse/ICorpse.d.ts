import { CreatureType, IModdable, IObject, ItemType, SkillType } from "Enums";
import { IVector3 } from "utilities/math/IVector";
export interface ICorpseDescription extends IModdable {
    name?: string;
    decay?: number;
    resource?: ICorpseResourceDrop[];
    carve?: boolean;
    skill?: SkillType;
    damage?: number;
    prefix?: string;
    blood?: boolean;
    lightSource?: boolean;
    animated?: boolean;
}
export interface ICorpseResourceDrop {
    item: ItemType;
    chance?: number;
}
export interface ICorpse extends IObject<CreatureType>, IVector3 {
    decay?: number;
    aberrant?: boolean;
    step?: number;
}
