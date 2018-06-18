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
import { IDamageInfo } from "creature/ICreature";
import { Bindable } from "Enums";
import { IHookHost } from "mod/IHookHost";
import { BindCatcherApi } from "newui/BindingManager";
import Component from "newui/component/Component";
import { UiApi } from "newui/INewUi";
import Screen from "newui/screen/Screen";
import Dialog from "newui/screen/screens/game/component/Dialog";
import QuadrantComponent, { Quadrant } from "newui/screen/screens/game/component/QuadrantComponent";
import { DialogId } from "newui/screen/screens/game/Dialogs";
import IGameScreenApi from "newui/screen/screens/game/IGameScreenApi";
import MenuBar from "newui/screen/screens/game/static/MenuBar";
import Messages from "newui/screen/screens/game/static/Messages";
import Quickslots from "newui/screen/screens/game/static/Quickslots";
import Stats from "newui/screen/screens/game/static/Stats";
import MovementHandler from "newui/screen/screens/game/util/movement/MovementHandler";
import { IPlayer } from "player/IPlayer";
import Player from "player/Player";
export declare type IDialogStates = {
    [key in DialogId]: boolean;
};
export default class GameScreen extends Screen implements IHookHost, IGameScreenApi {
    readonly uiApi: UiApi;
    dialogs: Map<DialogId, Dialog>;
    visibleDialogs: IDialogStates;
    quadrantComponentQuadrants: {
        [key: string]: Quadrant;
    };
    menuBar: MenuBar;
    stats: Stats;
    quickslots: Quickslots;
    messages: Messages;
    movementHandler: MovementHandler;
    private quadrantContainer;
    private readonly quadrantMap;
    private readonly gameCanvas;
    constructor(api: UiApi);
    create(): void;
    openDialog<D = Dialog>(id: DialogId): D;
    closeDialog(id: DialogId): Promise<void>;
    toggleDialog(id: DialogId, force?: boolean): void;
    toggleDialogs(states: IDialogStates): void;
    getQuadrantComponent<C extends QuadrantComponent = QuadrantComponent>(id: string | number): C | undefined;
    getQuadrantContainer(): Component;
    onGameStart(): void;
    onBindLoop(bindPressed: Bindable, api: BindCatcherApi): Bindable;
    onMove(player: Player): boolean | undefined;
    onMoveComplete(player: Player): void;
    onPlayerDamage(player: IPlayer, damageInfo: IDamageInfo): undefined;
    onPlayerDeath(player: IPlayer): undefined;
    /**
     * Adds a quadrant element to the screen.
     *
     * The quadrant is decided following these steps:
     * 1. Starts with the `preferredQuadrant` of the element.
     * 2. If the quadrant is `Quadrant.None`, or the quadrant is already used,
     * use instead the result of `getUnusedQuadrant()`
     */
    private addQuadrantElement;
    /**
     * Event handler for `QuadrantElementEvent.ChangeQuadrant`
     *
     * The element that is changing quadrants switches places with the element already in that quadrant.
     *
     * If the element is changing to `Quadrant.None`, it is removed from the `quadrantMap`. If the element
     * was in `Quadrant.None` and is switching places with another element, that element is removed
     * from the `quadrantMap`.
     */
    private onQuadrantElementChange;
    /**
     * Returns the first unused `Quadrant`, or `Quadrant.None` if there are none.
     */
    private getUnusedQuadrant;
    private onDialogClose;
}
