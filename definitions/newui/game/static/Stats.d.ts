import QuadrantElement, { Quadrant } from "newui/game/util/QuadrantElement";
import { UiApi } from "newui/INewUi";
export default class Stats extends QuadrantElement {
    readonly preferredQuadrant: Quadrant;
    private readonly statbars;
    constructor(uiApi: UiApi);
    private createStatbars();
}
