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
import { Bindable, BookType, Direction } from "Enums";
import { IMapRequest } from "game/IGame";
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
import WorldTooltipHandler from "newui/screen/screens/game/WorldTooltip";
import { IPlayer } from "player/IPlayer";
import { ITile } from "tile/ITerrain";
import { IVector2 } from "utilities/math/IVector";
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
    worldTooltipHandler: WorldTooltipHandler;
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
    isMouseWithin(): boolean;
    wasMouseStartWithin(): boolean;
    onBindLoop(bindPressed: Bindable, api: BindCatcherApi): Bindable;
    onGameStart(isLoadingSave: boolean, playedCount: number): void;
    onMove(player: IPlayer, nextX: number, nextY: number, tile: ITile, direction: Direction): boolean | undefined;
    onMoveComplete(player: IPlayer): void;
    onPlayerDamage(player: IPlayer, damageInfo: IDamageInfo): number | undefined;
    onPlayerDeath(player: IPlayer): boolean | undefined;
    onPlayerWalkToTilePath(player: IPlayer, path: IVector2[] | undefined): void;
    onGameTickEnd(): void;
    onOpenBook(human: Human, book: BookType): void;
    onReadMap(player: IPlayer, mapRequest: IMapRequest): void;
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
     * Handles top/bottom quadrants (for when in two-column mode)
     */
    private updateQuadrantPositions;
    /**
     * Returns the first unused `Quadrant`, or `Quadrant.None` if there are none.
     */
    private getUnusedQuadrant;
    private onDialogClose;
    private updatePauseIcon;
    private tryShowWorldTooltip;
}
