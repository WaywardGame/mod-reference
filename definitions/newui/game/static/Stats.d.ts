import QuadrantElement, { Quadrant } from "newui/game/util/QuadrantElement";
import { UiApi } from "newui/INewUi";
export default class Stats extends QuadrantElement {
    static preferredQuadrant: Quadrant;
    private readonly statbars;
    readonly preferredQuadrant: Quadrant;
    constructor(uiApi: UiApi);
    /**
     * Returns a new `Map<Stat, Statbar>` from all `Stat`s on `localPlayer`
     */
    private createStatbars();
}
