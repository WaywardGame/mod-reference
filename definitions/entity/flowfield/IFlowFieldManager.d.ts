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
import IFlowField from "entity/flowfield/IFlowField";
import { DebugRendererDelegate } from "entity/flowfield/IFlowFieldDebugRenderer";
import { MoveType } from "entity/IEntity";
import Player from "entity/player/Player";
import { Direction } from "utilities/math/Direction";
import { IVector3 } from "utilities/math/IVector";
export interface IFlowFieldManager {
    delegate: DebugRendererDelegate;
    flowFields: {
        [index: number]: IFlowField;
    };
    delete(): void;
    getHeight(): number;
    getMoveDirection(worldX: number, worldY: number, worldZ: number, moveType: MoveType): Direction;
    getOpposingMoveDirection(worldX: number, worldY: number, worldZ: number, moveType: MoveType): Direction;
    getWidth(): number;
    isInFlowField(point: IVector3): boolean;
    isPlayerInFlowField(player: Player): boolean;
    reset(): void;
    setDelegate(delegate: DebugRendererDelegate): void;
    setPlayers(plys: Player[]): void;
    update(): void;
    updateTile(tileX: number, tileY: number, tileZ: number): void;
}
export default IFlowFieldManager;
export declare const blockedPenalty = 11;
