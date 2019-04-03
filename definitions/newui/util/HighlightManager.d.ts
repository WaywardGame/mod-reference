/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { Events } from "event/EventBuses";
import Component from "newui/component/Component";
import { HighlightSelector, IHighlight } from "newui/component/IComponent";
import { IHighlightManager } from "newui/INewUi";
export default class HighlightManager implements IHighlightManager {
    private readonly highlights;
    private readonly highlightComponents;
    start(host: any, highlight: IHighlight): void;
    end(host: any): void;
    register<C extends Component>(component: C, selector: HighlightSelector, ...until: Array<keyof Events<C>>): void;
    private getHighlightSelectorId;
    private getHighlightComponents;
    private startHighlight;
}
