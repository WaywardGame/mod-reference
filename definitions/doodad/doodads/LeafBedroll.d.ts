import ItemDoodad from "doodad/doodads/ItemDoodad";
import { IDoodad, IDoodadDescription } from "doodad/IDoodad";
export default class LeafBedroll extends ItemDoodad implements IDoodad {
    getRegistrarId(): number;
    description(): IDoodadDescription | undefined;
}
