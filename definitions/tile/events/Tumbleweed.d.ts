import { ItemType, SkillType } from "Enums";
import { ITileEvent } from "tile/ITileEvent";
declare const _default: {
    items: ({
        type: ItemType.Twigs;
    } | {
        type: ItemType.TumbleweedSeeds;
    })[];
    skillUse: SkillType.Botany;
    particles: {
        r: number;
        g: number;
        b: number;
    };
    graphicVariation: true;
    isFlammable: true;
    update(tileEvent: ITileEvent): void;
};
export default _default;
