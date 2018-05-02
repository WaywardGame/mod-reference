import { CreatureType, IModdable, IObject, ItemType, SkillType } from "Enums";
import { IPointZ } from "utilities/math/IPoint";
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
export interface ICorpse extends IObject<CreatureType>, IPointZ {
    decay?: number;
    aberrant?: boolean;
    step?: number;
}
