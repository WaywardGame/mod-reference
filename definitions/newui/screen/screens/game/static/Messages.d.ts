import { UiTranslation } from "language/ILanguage";
import QuadrantElement, { Quadrant } from "newui/screen/screens/game/element/QuadrantElement";
export default class Messages extends QuadrantElement {
    static preferredQuadrant: Quadrant;
    readonly preferredQuadrant: Quadrant;
    protected getID(): string;
    protected getName(): UiTranslation;
}
