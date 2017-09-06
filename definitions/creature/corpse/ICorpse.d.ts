import { CreatureType, IObject, IPointZ, ItemType, SkillType } from "Enums";
export interface ICorpseDescription {
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
}
