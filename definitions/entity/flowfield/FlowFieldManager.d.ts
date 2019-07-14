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
import { IFlowField } from "entity/flowfield/IFlowField";
import { DebugRendererDelegate } from "entity/flowfield/IFlowFieldDebugRenderer";
import IFlowFieldManager from "entity/flowfield/IFlowFieldManager";
import { MoveType } from "entity/IEntity";
import Player from "entity/player/Player";
import { Direction } from "utilities/math/Direction";
import { IVector3 } from "utilities/math/IVector";
export default class FlowFieldManager implements IFlowFieldManager {
    private readonly size;
    delegate: DebugRendererDelegate;
    flowFields: {
        [index: string]: IFlowField;
    };
    private plys;
    constructor(size: number);
    delete(): void;
    setDelegate(delegate: DebugRendererDelegate): void;
    getWidth(): number;
    getHeight(): number;
    isInFlowField(point: IVector3): boolean;
    isPlayerInFlowField(player: Player): boolean;
    getMoveDirection(x: number, y: number, z: number, moveType: MoveType): Direction;
    getOpposingMoveDirection(x: number, y: number, z: number, moveType: MoveType): Direction;
    updateTile(tileX: number, tileY: number, tileZ: number): void;
    setPlayers(plys: Player[]): void;
    update(): void;
    reset(): void;
    private getDirection;
    private getFlowField;
    private getFlowFields;
}
