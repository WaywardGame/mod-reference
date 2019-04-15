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
    [ActionType.AddFuel]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.ItemInventory], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Apply]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.AttachContainer]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Attack]: import("./Action").Action<[[import("./IAction").ActionArgument.Item, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.AttackType, import("./IAction").ActionArgument.Undefined]], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Build]: import("./Action").Action<[import("./IAction").ActionArgument.Item], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Carve]: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Cast]: import("./Action").Action<[import("./IAction").ActionArgument.Item], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.CloseContainer]: import("./Action").Action<[import("./IAction").ActionArgument.Container, [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined]], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.CloseDoor]: import("./Action").Action<[], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, boolean>;
    [ActionType.Craft]: import("./Action").Action<[import("./IAction").ActionArgument.ItemType, import("./IAction").ActionArgument.ItemArrayNearby, import("./IAction").ActionArgument.ItemArrayNearby, [import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined]], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Decode]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../player/IPlayer").IPlayer, void>;
    [ActionType.DetachContainer]: import("./Action").Action<[], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Dig]: import("./Action").Action<[[import("./IAction").ActionArgument.ItemInventory, import("./IAction").ActionArgument.Undefined]], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Disassemble]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Dismantle]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.DrawMap]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.DrinkCure]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.DrinkInFront]: import("./Action").Action<[], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.DrinkItem]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Drop]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby, [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined]], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Eat]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Equip]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.EquipType, [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined]], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Extinguish]: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Fire]: import("./Action").Action<[[import("./IAction").ActionArgument.Item, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.AttackType, import("./IAction").ActionArgument.Undefined]], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Gather]: import("./Action").Action<[[import("./IAction").ActionArgument.ItemInventory, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined]], import("../player/IPlayer").IPlayer, void>;
    [ActionType.GatherMilk]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.GatherTreasure]: import("./Action").Action<[[import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.Undefined]], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.GatherWater]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Grasp]: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Harvest]: import("./Action").Action<[[import("./IAction").ActionArgument.ItemInventory, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined]], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Heal]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.HealOther]: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Hitch]: import("./Action").Action<[], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Idle]: import("./Action").Action<[], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Ignite]: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Inspect]: import("./Action").Action<[import("./IAction").ActionArgument.Vector3], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Jump]: import("./Action").Action<[], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Learn]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.LockPick]: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Move]: import("./Action").Action<[import("./IAction").ActionArgument.Direction], import("../player/IPlayer").IPlayer, void>;
    [ActionType.MoveItem]: import("./Action").Action<[[import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Container, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Container, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.ItemType, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Quality, import("./IAction").ActionArgument.Undefined]], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.MoveTo]: import("./Action").Action<[import("./IAction").ActionArgument.Vector2, [import("./IAction").ActionArgument.Direction, import("./IAction").ActionArgument.Undefined]], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Offer]: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory], import("../player/IPlayer").IPlayer, void>;
    [ActionType.OpenBottle]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.OpenContainer]: import("./Action").Action<[import("./IAction").ActionArgument.Container, [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined]], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.OpenDoor]: import("./Action").Action<[], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, boolean>;
    [ActionType.Paddle]: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Pet]: import("./Action").Action<[], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Pickup]: import("./Action").Action<[[import("./IAction").ActionArgument.ItemInventory, import("./IAction").ActionArgument.Undefined]], import("../player/IPlayer").IPlayer, void>;
    [ActionType.PickupAllItems]: import("./Action").Action<[], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.PickupItem]: import("./Action").Action<[], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.PlaceDown]: import("./Action").Action<[import("./IAction").ActionArgument.Item], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Plant]: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Pour]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.PourOnYourself]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Preserve]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby, [import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.Undefined]], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Read]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Refine]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby, [import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.Undefined]], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Reinforce]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby, [import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.Undefined]], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Release]: import("./Action").Action<[], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Rename]: import("./Action").Action<[[import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.Doodad, import("./IAction").ActionArgument.Creature], import("./IAction").ActionArgument.String], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Repair]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby, [import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.Doodad, import("./IAction").ActionArgument.Undefined]], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Rest]: import("./Action").Action<[[import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Doodad, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.RestType, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined]], import("../player/IPlayer").IPlayer, void>;
    [ActionType.RubClockwise]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.RubCounterclockwise]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.SailToCivilization]: import("./Action").Action<[[import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined]], import("../player/IPlayer").IPlayer, void>;
    [ActionType.SetDown]: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Shoot]: import("./Action").Action<[[import("./IAction").ActionArgument.Item, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.AttackType, import("./IAction").ActionArgument.Undefined]], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Sleep]: import("./Action").Action<[[import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Doodad, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.RestType, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined]], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Sling]: import("./Action").Action<[[import("./IAction").ActionArgument.Item, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.AttackType, import("./IAction").ActionArgument.Undefined]], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.SmotherFire]: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Squeeze]: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.StartFire]: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory, [import("./IAction").ActionArgument.ItemInventory, import("./IAction").ActionArgument.Undefined]], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.StokeFire]: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Tame]: import("./Action").Action<[], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Teleport]: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.TellTime]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Throw]: import("./Action").Action<[[import("./IAction").ActionArgument.Item, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.AttackType, import("./IAction").ActionArgument.Undefined]], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Till]: import("./Action").Action<[[import("./IAction").ActionArgument.ItemInventory, import("./IAction").ActionArgument.Undefined]], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Trade]: import("./Action").Action<[import("./IAction").ActionArgument.NPC], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Transmogrify]: import("./Action").Action<[import("./IAction").ActionArgument.ItemInventory, [import("./IAction").ActionArgument.ItemInventory, import("./IAction").ActionArgument.Undefined]], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.TraverseTheSea]: import("./Action").Action<[[import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined], [import("./IAction").ActionArgument.Boolean, import("./IAction").ActionArgument.Undefined]], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Unequip]: import("./Action").Action<[[import("./IAction").ActionArgument.ItemInventory, import("./IAction").ActionArgument.Undefined]], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Unhitch]: import("./Action").Action<[], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.UpdateDirection]: import("./Action").Action<[import("./IAction").ActionArgument.Direction, [import("./IAction").ActionArgument.Number, import("./IAction").ActionArgument.Undefined]], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.UseItem]: import("./Action").Action<[import("./IAction").ActionArgument.ItemNearby, import("./IAction").ActionArgument.ActionType], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
};
export default actionDescriptions;
