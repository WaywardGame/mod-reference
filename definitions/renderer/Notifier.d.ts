import Vec2 = TSM.vec2;
import { ItemType, StatType } from "Enums";
import INotifier from "renderer/INotifier";
export default class Notifier implements INotifier {
    private capacity;
    private mostRecent;
    private mostRecentLife;
    private count;
    private notifications;
    private spriteBatch;
    private nextUpdate;
    constructor(gl: WebGLRenderingContext, capacity: number);
    setTexture(texture: WebGLTexture, inverseTextureSize: Vec2): void;
    clear(): void;
    addItem(x: number, y: number, type: ItemType): void;
    addStat(x: number, y: number, z: number, type: StatType, value: number): void;
    update(): void;
    render(x: number, y: number, tileSize: number, tileScale: number, viewWidth: number, viewHeight: number): void;
    private addNote(x, y, type);
    private renderNote(note);
}
