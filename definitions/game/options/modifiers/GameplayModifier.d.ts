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
import Entity from "entity/Entity";
import { IHasImagePath } from "game/IObject";
import { IGameOptionsPartial } from "game/options/IGameOptions";
import { RandomInstance } from "utilities/Random";
export default abstract class GameplayModifier<ID extends number> implements IHasImagePath {
    readonly id: ID;
    readonly random: RandomInstance;
    readonly imagePath?: string;
    /**
     * Game options to be applied when this modifier is active
     */
    protected readonly options?: IGameOptionsPartial | (() => IGameOptionsPartial);
    private cachedOptions?;
    constructor(id: ID, random?: RandomInstance);
    initialize(): void;
    uninitialize(): void;
    getOptions(): IGameOptionsPartial | undefined;
    isEnabledForPlayer(entity: Entity): boolean;
    getRandom(): import("../../../utilities/Random").Random<import("../../../utilities/Random").SeededGenerator>;
}
