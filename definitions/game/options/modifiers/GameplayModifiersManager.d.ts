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
import GameplayModifier from "game/options/modifiers/GameplayModifier";
export default class GameplayModifiersManager<ID extends number, MODIFIER extends GameplayModifier<ID>> {
    protected readonly instances: Map<ID, MODIFIER>;
    constructor(enumObject: any, classes: OptionalDescriptions<ID, Class<MODIFIER, [ID]>>);
    getImage(milestone: ID): string | undefined;
    getModifierInstance(milestone: ID): MODIFIER | undefined;
    createCollection(): GameplayModifiersCollection<ID, MODIFIER>;
}
export declare class GameplayModifiersCollection<ID extends number, MODIFIER extends GameplayModifier<ID>> {
    private readonly manager;
    private readonly initializedModifiers;
    constructor(manager: GameplayModifiersManager<ID, MODIFIER>);
    initialize(...ids: ID[]): void;
    uninitialize(): void;
    options(): import("../../../utilities/stream/Stream").default<import("../IGameOptions").IGameOptionsPartial>;
    initialized(): Set<ID>;
}
