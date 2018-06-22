import QuadrantComponent, { Quadrant } from "newui/screen/screens/game/component/QuadrantComponent";
import { QuadrantComponentId } from "newui/screen/screens/game/IGameScreenApi";
import { IStringSection } from "utilities/string/Interpolator";
export default class Quickslots extends QuadrantComponent {
    static preferredQuadrant: Quadrant;
    readonly preferredQuadrant: Quadrant;
    getID(): QuadrantComponentId;
    protected getName(): IStringSection[];
}
