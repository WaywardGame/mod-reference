/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 *
 *
 */
import { ItemType, StatType } from "Enums";
import INotifier from "renderer/INotifier";
import Vec2 from "utilities/math/Vector2";
export default class Notifier implements INotifier {
    private readonly capacity;
    private mostRecent;
    private mostRecentLife;
    private count;
    private readonly notifications;
    private readonly spriteBatch;
    private nextUpdate;
    constructor(gl: WebGL2RenderingContext, capacity: number);
    setTexture(texture: WebGLTexture, inverseTextureSize: Vec2): void;
    clear(): void;
    addItem(x: number, y: number, z: number, type: ItemType): void;
    addStat(x: number, y: number, z: number, type: StatType, value: number): void;
    update(): void;
    render(x: number, y: number, tileSize: number, tileScale: number, viewWidth: number, viewHeight: number): void;
    private addNote;
    private renderNote;
}
