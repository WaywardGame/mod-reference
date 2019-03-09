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
import { IRGB } from "Enums";
import ISpriteInfo from "renderer/ISpriteInfo";
import { PriorityList } from "utilities/PriorityList";
export declare type IRenderFunction = (sprite: number | ISpriteInfo) => void;
export declare type IRenderLayerImplementation = (render: IRenderFunction) => any;
export declare type SpriteLineOrRenderLayerImpl = number | IRenderLayerImplementation;
export declare enum StatusEffectRenderLayer {
    Body = 1,
    Hair = 2,
    Clothes = 4
}
export declare enum RenderPriority {
    Lowest = -1000,
    Low = -100,
    Normal = 0,
    High = 100,
    Highest = 1000
}
export default class StatusEffectRenderer {
    readonly priority: number;
    protected layers: Map<StatusEffectRenderLayer, PriorityList<SpriteLineOrRenderLayerImpl>>;
    protected tints: IRGB[];
    constructor(priority?: RenderPriority);
    /**
     * Return a list of tints that the body will render with. These are all merged with each other and
     * any other tints from status effects currently on the body. Every tint has an even % except for the
     * base body tint, which is 70%.
     */
    getTints(): IRGB[];
    /**
     * Adds new tints.
     */
    addTint(...tints: IRGB[]): this;
    /**
     * Returns whether there are any registered render layers.
     */
    hasLayer(): boolean;
    /**
     * Adds a new render layer.
     * @param renderLayer The render layer this should render on (body, clothes, or hair).
     * @param spriteLine The line of the default sprite this status effect should render from.
     * @param priority The priority of this layer relative to other layers in the same render layer.
     */
    addLayer(renderLayer: StatusEffectRenderLayer, spriteLine: number, priority?: number): this;
    /**
     * Adds a new render layer.
     * @param renderLayer The render layer this should render on (body, clothes, or hair).
     * @param renderFunction A function that takes a function to be used for rendering any sprites over the player.
     * @param priority The priority of this layer relative to other layers in the same render layer.
     */
    addLayer(renderLayer: StatusEffectRenderLayer, renderFunction: IRenderLayerImplementation, priority?: number): this;
    /**
     * Renders any images for the given render layer, using the given render function.
     */
    render(renderLayer: StatusEffectRenderLayer, render: IRenderFunction): void;
    protected renderLayer(layer: number | IRenderLayerImplementation, render: IRenderFunction): void;
}
