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
import { ActionType } from "entity/action/IAction";
declare const actionDescriptions: {
    [ActionType.AddFuel]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.ItemInventory], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.Apply]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.AttachContainer]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.Attack]: import("./Action").Action<[[import("./IAction").ActionArgument.Item, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.AttackType, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.Build]: import("./Action").Action<[import("./IAction").ActionArgument.Item], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.Carve]: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory], import("../player/Player").default, void>;
    [ActionType.Cast]: import("./Action").Action<[import("./IAction").ActionArgument.Item], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.CloseContainer]: import("./Action").Action<[import("./IAction").ActionArgument.Container, [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.CloseDoor]: import("./Action").Action<[], import("../player/Player").default | import("../npc/NPC").default, boolean>;
    [ActionType.Craft]: import("./Action").Action<[import("./IAction").ActionArgument.ItemType, import("./IAction").ActionArgument.ItemArrayNearby, import("./IAction").ActionArgument.ItemArrayNearby, [import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.Decode]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../player/Player").default, void>;
    [ActionType.DetachContainer]: import("./Action").Action<[], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.Dig]: import("./Action").Action<[[import("./IAction").ActionArgument.ItemInventory, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default, void>;
    [ActionType.Disassemble]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.Dismantle]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.DrawMap]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.DrinkCure]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.DrinkInFront]: import("./Action").Action<[], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.DrinkItem]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.Drop]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby, [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.Eat]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.Enchant]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby, [import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.Equip]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.EquipType, [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default, void>;
    [ActionType.Extinguish]: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.Fire]: import("./Action").Action<[[import("./IAction").ActionArgument.Item, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.AttackType, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.Gather]: import("./Action").Action<[[import("./IAction").ActionArgument.ItemInventory, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default, void>;
    [ActionType.GatherMilk]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.GatherTreasure]: import("./Action").Action<[[import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.GatherWater]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.Grasp]: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.Harvest]: import("./Action").Action<[[import("./IAction").ActionArgument.ItemInventory, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.Heal]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.HealOther]: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.Hitch]: import("./Action").Action<[], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.Idle]: import("./Action").Action<[], import("../player/Player").default, void>;
    [ActionType.Ignite]: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.Inspect]: import("./Action").Action<[import("./IAction").ActionArgument.Vector3], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.Jump]: import("./Action").Action<[], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.Learn]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.LockPick]: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.Melee]: import("./Action").Action<[[import("./IAction").ActionArgument.Item, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.AttackType, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.Move]: import("./Action").Action<[import("./IAction").ActionArgument.Direction], import("../player/Player").default, void>;
    [ActionType.MoveItem]: import("./Action").Action<[[import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Container, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Container, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.ItemType, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Quality, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.MoveTo]: import("./Action").Action<[import("./IAction").ActionArgument.Vector2, [import("./IAction").ActionArgument.Direction, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default, void>;
    [ActionType.Navigate]: import("./Action").Action<[[import("./IAction").ActionArgument.ItemInventory, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default, void>;
    [ActionType.Offer]: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory], import("../player/Player").default, void>;
    [ActionType.OpenBottle]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.OpenContainer]: import("./Action").Action<[import("./IAction").ActionArgument.Container, [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.OpenDoor]: import("./Action").Action<[], import("../player/Player").default | import("../npc/NPC").default, boolean>;
    [ActionType.Paddle]: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory], import("../player/Player").default, void>;
    [ActionType.Pet]: import("./Action").Action<[], import("../player/Player").default, void>;
    [ActionType.Pickup]: import("./Action").Action<[[import("./IAction").ActionArgument.ItemInventory, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default, void>;
    [ActionType.PickupAllItems]: import("./Action").Action<[], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.PickupExcrement]: import("./Action").Action<[[import("./IAction").ActionArgument.ItemInventory, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default, void>;
    [ActionType.PickupItem]: import("./Action").Action<[], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.PlaceDown]: import("./Action").Action<[import("./IAction").ActionArgument.Item], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.Plant]: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.Pour]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.PourOnYourself]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.Preserve]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby, [import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.Read]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.Refine]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby, [import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.Reinforce]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby, [import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.Release]: import("./Action").Action<[], import("../player/Player").default, void>;
    [ActionType.Rename]: import("./Action").Action<[[import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.Doodad, import("./IAction").ActionArgument.Creature], import("./IAction").ActionArgument.String], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.Repair]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby, [import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.Doodad, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.Rest]: import("./Action").Action<[[import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Doodad, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.RestType, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default, void>;
    [ActionType.RubClockwise]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.RubCounterclockwise]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.SailToCivilization]: import("./Action").Action<[[import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default, void>;
    [ActionType.SetDown]: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.Shoot]: import("./Action").Action<[[import("./IAction").ActionArgument.Item, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.AttackType, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.Sleep]: import("./Action").Action<[[import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Doodad, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.RestType, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default, void>;
    [ActionType.Sling]: import("./Action").Action<[[import("./IAction").ActionArgument.Item, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.AttackType, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.SmotherFire]: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.Squeeze]: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.StartFire]: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory, [import("./IAction").ActionArgument.ItemInventory, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.StokeFire]: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.Tame]: import("./Action").Action<[], import("../player/Player").default, void>;
    [ActionType.Teleport]: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.TellTime]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.TestDepth]: import("./Action").Action<[[import("./IAction").ActionArgument.ItemInventory, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default, void>;
    [ActionType.Throw]: import("./Action").Action<[[import("./IAction").ActionArgument.Item, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.AttackType, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.Till]: import("./Action").Action<[[import("./IAction").ActionArgument.ItemInventory, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default, void>;
    [ActionType.Trade]: import("./Action").Action<[import("./IAction").ActionArgument.NPC], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.Transmogrify]: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory, [import("./IAction").ActionArgument.ItemInventory, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.TraverseTheSea]: import("./Action").Action<[[import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default, void>;
    [ActionType.Unequip]: import("./Action").Action<[[import("./IAction").ActionArgument.ItemInventory, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.Unhitch]: import("./Action").Action<[], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.UpdateDirection]: import("./Action").Action<[import("./IAction").ActionArgument.Direction, [import("./IAction").ActionArgument.Number, import("./IAction").ActionArgument.Undefined]], import("../player/Player").default | import("../npc/NPC").default, void>;
    [ActionType.UseItem]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.ActionType], import("../player/Player").default | import("../npc/NPC").default, void>;
};
export default actionDescriptions;
