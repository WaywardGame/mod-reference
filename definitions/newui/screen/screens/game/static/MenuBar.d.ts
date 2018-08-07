/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import QuadrantComponent, { Quadrant } from "newui/screen/screens/game/component/QuadrantComponent";
import IGameScreenApi, { QuadrantComponentId } from "newui/screen/screens/game/IGameScreenApi";
import MenuBarButton from "newui/screen/screens/game/static/menubar/MenuBarButton";
import { MenuBarButtonType } from "newui/screen/screens/game/static/menubar/MenuBarButtonDescriptions";
import { IStringSection } from "utilities/string/Interpolator";
export default class MenuBar extends QuadrantComponent {
    static preferredQuadrant: Quadrant;
    readonly preferredQuadrant: Quadrant;
    private _buttons;
    readonly buttons: Map<MenuBarButtonType, MenuBarButton>;
    private readonly groups;
    constructor(gsapi: IGameScreenApi);
    /**
     * Removes any existing groups of menubar buttons, then initializes new ones from the `MenuBarButtonType` enum.
     */
    refresh(): void;
    getID(): QuadrantComponentId;
    protected getName(): IStringSection[];
    /**
     * Creates a new menu bar button of the given type, and adds it to a group component. If the group
     * component that the button's description requests does not exist, it's created.
     *
     * Note: Does not check if the button type has already been added.
     */
    private addButton;
}
