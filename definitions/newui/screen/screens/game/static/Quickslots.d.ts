import { UiTranslation } from "language/ILanguage";
import QuadrantComponent, { Quadrant } from "newui/screen/screens/game/component/QuadrantComponent";
export default class Quickslots extends QuadrantComponent {
    static preferredQuadrant: Quadrant;
    readonly preferredQuadrant: Quadrant;
    protected getID(): string;
    protected getName(): UiTranslation;
}
