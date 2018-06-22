import { ItemType, SkillType } from "Enums";
import { ITileEvent } from "tile/ITileEvent";
declare const _default: {
    items: {
        type: ItemType.HoneyFungus;
    }[];
    skillUse: SkillType.Mycology;
    particles: {
        r: number;
        g: number;
        b: number;
    };
    spreadMax: number;
    create(tileEvent: ITileEvent): void;
    update(tileEvent: ITileEvent): void;
};
export default _default;
