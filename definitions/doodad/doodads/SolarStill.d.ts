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
import ItemDoodad from "doodad/doodads/ItemDoodad";
import { IDoodad } from "doodad/IDoodad";
import { ItemType } from "item/IItem";
export default class SolarStill extends ItemDoodad implements IDoodad {
    getRegistrarId(): number;
    description(): {
        allowedTiles?: import("../../tile/ITerrain").TerrainType[] | undefined;
        blockDig?: boolean | undefined;
        blockJump?: boolean | undefined;
        blockLos?: boolean | undefined;
        blockMove?: boolean | undefined;
        canBreak?: boolean | undefined;
        canGrow?: boolean | undefined;
        canGrowInCaves?: boolean | undefined;
        canStoke?: boolean | undefined;
        canTrampleWhenMature?: boolean | undefined;
        causesStatus?: import("../../entity/IEntity").StatusType[] | undefined;
        damage?: number | undefined;
        disableDrop?: boolean | undefined;
        gather?: import("../IDoodad").IDoodadLoot | undefined;
        graphicVariation?: boolean | undefined;
        group?: import("../IDoodad").DoodadTypeGroup[] | undefined;
        harvest?: import("../IDoodad").IDoodadLoot | undefined;
        isAnimated?: boolean | undefined;
        isFlammable?: boolean | undefined;
        isLocked?: boolean | undefined;
        repairItem?: ItemType | undefined;
        isTall?: boolean | undefined;
        isTrap?: boolean | undefined;
        isWaterSource?: boolean | undefined;
        lit?: import("../IDoodad").DoodadType | undefined;
        burnsLike?: ItemType[] | undefined;
        particles?: import("../../utilities/Color").IRGB | undefined;
        growthParticles?: import("../IDoodad").IDoodadParticles | undefined;
        pickUp?: ItemType[] | undefined;
        gatherCanHurtHands?: boolean | undefined;
        providesFire?: boolean | undefined;
        providesLight?: number | undefined;
        reduceDurabilityOnGather?: boolean | undefined;
        revert?: import("../IDoodad").DoodadType | undefined;
        spawnOnTerrain?: import("../../tile/ITerrain").TerrainType[] | undefined;
        spreadMax?: number | undefined;
        trapDamage?: number | undefined;
        waterStill?: boolean | undefined;
        gatherSkillUse?: import("../../entity/IHuman").SkillType | undefined;
        growthCycle?: boolean | undefined;
        isTree?: boolean | undefined;
        isWall?: boolean | undefined;
        isFungi?: boolean | undefined;
        isDoor?: boolean | undefined;
        isClosedDoor?: boolean | undefined;
        isGate?: boolean | undefined;
        isFence?: boolean | undefined;
        isUnlitTorch?: boolean | undefined;
        isLitTorch?: boolean | undefined;
        tier?: OptionalDescriptions<import("../IDoodad").DoodadTypeGroup, number> | undefined;
        decayMax?: number | undefined;
        skillUse?: import("../../entity/IHuman").SkillType | undefined;
        weightCapacity?: number | undefined;
        imagePath?: string | undefined;
        preservationChance?: number | undefined;
        modIndex?: number | undefined;
    } | undefined;
    update(): void;
}
