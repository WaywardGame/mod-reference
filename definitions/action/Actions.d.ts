/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { ActionArgument, ActionType } from "action/IAction";
/**
 * This exists as a workaround for a declaration bug https://github.com/Microsoft/TypeScript/issues/27962
 */
export declare let INVALID: ActionArgument;
declare const actionDescriptions: {
    [ActionType.AddFuel]: import("./Action").Action<[ActionArgument.ItemNearby, ActionArgument.ItemInventory], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.Apply]: import("./Action").Action<[ActionArgument.ItemNearby], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.Attack]: import("./Action").Action<[[ActionArgument.AttackType, ActionArgument.Undefined], [ActionArgument.Item, ActionArgument.Undefined]], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.Build]: import("./Action").Action<[ActionArgument.Item], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.Carve]: import("./Action").Action<[ActionArgument.ItemInventory], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Cast]: import("./Action").Action<[ActionArgument.Item], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.CloseContainer]: import("./Action").Action<[ActionArgument.Container, [ActionArgument.Boolean, ActionArgument.Undefined]], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.CloseDoor]: import("./Action").Action<[], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, boolean>;
    [ActionType.Craft]: import("./Action").Action<[ActionArgument.ItemType, ActionArgument.ItemArrayNearby, ActionArgument.ItemArrayNearby, [ActionArgument.ItemNearby, ActionArgument.Undefined], [ActionArgument.Boolean, ActionArgument.Undefined]], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.Decode]: import("./Action").Action<[ActionArgument.ItemNearby], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Dig]: import("./Action").Action<[[ActionArgument.ItemInventory, ActionArgument.Undefined]], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Disassemble]: import("./Action").Action<[ActionArgument.ItemNearby], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.Dismantle]: import("./Action").Action<[ActionArgument.ItemNearby], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.DrawMap]: import("./Action").Action<[ActionArgument.ItemNearby], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.DrinkCure]: import("./Action").Action<[ActionArgument.ItemNearby], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.DrinkInFront]: import("./Action").Action<[], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.DrinkItem]: import("./Action").Action<[ActionArgument.ItemNearby], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.Drop]: import("./Action").Action<[ActionArgument.ItemNearby, [ActionArgument.Boolean, ActionArgument.Undefined], [ActionArgument.Boolean, ActionArgument.Undefined]], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.Eat]: import("./Action").Action<[ActionArgument.ItemNearby], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.Equip]: import("./Action").Action<[ActionArgument.ItemNearby, ActionArgument.EquipType, [ActionArgument.Boolean, ActionArgument.Undefined], [ActionArgument.Boolean, ActionArgument.Undefined]], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Extinguish]: import("./Action").Action<[ActionArgument.ItemInventory], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.Fire]: import("./Action").Action<[ActionArgument.ItemInventory], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.Gather]: import("./Action").Action<[[ActionArgument.ItemInventory, ActionArgument.Undefined], [ActionArgument.Boolean, ActionArgument.Undefined]], import("../player/IPlayer").IPlayer, void>;
    [ActionType.GatherMilk]: import("./Action").Action<[ActionArgument.ItemNearby], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.GatherTreasure]: import("./Action").Action<[[ActionArgument.ItemNearby, ActionArgument.Undefined]], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.GatherWater]: import("./Action").Action<[ActionArgument.ItemNearby], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.Grasp]: import("./Action").Action<[ActionArgument.ItemInventory], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.Harvest]: import("./Action").Action<[[ActionArgument.ItemInventory, ActionArgument.Undefined], [ActionArgument.Boolean, ActionArgument.Undefined]], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.Heal]: import("./Action").Action<[ActionArgument.ItemNearby], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.HealOther]: import("./Action").Action<[ActionArgument.ItemInventory], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.Hitch]: import("./Action").Action<[], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.Idle]: import("./Action").Action<[], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Ignite]: import("./Action").Action<[ActionArgument.ItemInventory], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.Inspect]: import("./Action").Action<[ActionArgument.Vector3], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.Jump]: import("./Action").Action<[], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.Learn]: import("./Action").Action<[ActionArgument.ItemNearby], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.LockPick]: import("./Action").Action<[ActionArgument.ItemInventory], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.Move]: import("./Action").Action<[ActionArgument.Direction], import("../player/IPlayer").IPlayer, void>;
    [ActionType.MoveItem]: import("./Action").Action<[[ActionArgument.ItemNearby, ActionArgument.Undefined], [ActionArgument.Container, ActionArgument.Undefined], [ActionArgument.Container, ActionArgument.Undefined], [ActionArgument.ItemType, ActionArgument.Undefined], [ActionArgument.ItemQuality, ActionArgument.Undefined]], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.MoveTo]: import("./Action").Action<[ActionArgument.Vector2, [ActionArgument.Direction, ActionArgument.Undefined]], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Offer]: import("./Action").Action<[ActionArgument.ItemInventory], import("../player/IPlayer").IPlayer, void>;
    [ActionType.OpenBottle]: import("./Action").Action<[ActionArgument.ItemNearby], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.OpenContainer]: import("./Action").Action<[ActionArgument.Container, [ActionArgument.Boolean, ActionArgument.Undefined]], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.OpenDoor]: import("./Action").Action<[], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, boolean>;
    [ActionType.Paddle]: import("./Action").Action<[ActionArgument.ItemInventory], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Pet]: import("./Action").Action<[], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.Pickup]: import("./Action").Action<[[ActionArgument.ItemInventory, ActionArgument.Undefined]], import("../player/IPlayer").IPlayer, void>;
    [ActionType.PickupAllItems]: import("./Action").Action<[], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.PickupItem]: import("./Action").Action<[], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.PlaceDown]: import("./Action").Action<[ActionArgument.Item], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.Plant]: import("./Action").Action<[ActionArgument.ItemInventory], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.Pour]: import("./Action").Action<[ActionArgument.ItemNearby], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.PourOnYourself]: import("./Action").Action<[ActionArgument.ItemNearby], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.Preserve]: import("./Action").Action<[ActionArgument.ItemNearby, [ActionArgument.ItemNearby, ActionArgument.Undefined]], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.Read]: import("./Action").Action<[ActionArgument.ItemNearby], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.Reinforce]: import("./Action").Action<[ActionArgument.ItemNearby, [ActionArgument.ItemNearby, ActionArgument.Undefined]], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.Release]: import("./Action").Action<[], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Rename]: import("./Action").Action<[[ActionArgument.ItemNearby, ActionArgument.Doodad, ActionArgument.Creature], ActionArgument.String], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.Repair]: import("./Action").Action<[ActionArgument.ItemNearby, [ActionArgument.ItemNearby, ActionArgument.Doodad, ActionArgument.Undefined]], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.Rest]: import("./Action").Action<[[ActionArgument.ItemNearby, ActionArgument.Undefined], [ActionArgument.Doodad, ActionArgument.Undefined], [ActionArgument.RestType, ActionArgument.Undefined], [ActionArgument.Boolean, ActionArgument.Undefined]], import("../player/IPlayer").IPlayer, void>;
    [ActionType.RubClockwise]: import("./Action").Action<[ActionArgument.ItemNearby], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.RubCounterclockwise]: import("./Action").Action<[ActionArgument.ItemNearby], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.SailToCivilization]: import("./Action").Action<[[ActionArgument.ItemNearby, ActionArgument.Undefined], [ActionArgument.Boolean, ActionArgument.Undefined], [ActionArgument.Boolean, ActionArgument.Undefined], [ActionArgument.Boolean, ActionArgument.Undefined]], import("../player/IPlayer").IPlayer, void>;
    [ActionType.SetDown]: import("./Action").Action<[ActionArgument.ItemInventory], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.Shoot]: import("./Action").Action<[ActionArgument.Item], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.Sleep]: import("./Action").Action<[[ActionArgument.ItemNearby, ActionArgument.Undefined], [ActionArgument.Doodad, ActionArgument.Undefined], [ActionArgument.RestType, ActionArgument.Undefined], [ActionArgument.Boolean, ActionArgument.Undefined]], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Sling]: import("./Action").Action<[ActionArgument.Item], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.SmotherFire]: import("./Action").Action<[ActionArgument.ItemInventory], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.Squeeze]: import("./Action").Action<[ActionArgument.ItemInventory], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.StartFire]: import("./Action").Action<[ActionArgument.ItemInventory, [ActionArgument.ItemInventory, ActionArgument.Undefined]], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.StokeFire]: import("./Action").Action<[ActionArgument.ItemInventory], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.Tame]: import("./Action").Action<[], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Teleport]: import("./Action").Action<[ActionArgument.ItemInventory], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.TellTime]: import("./Action").Action<[ActionArgument.ItemNearby], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.Throw]: import("./Action").Action<[ActionArgument.ItemNearby], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.Till]: import("./Action").Action<[[ActionArgument.ItemInventory, ActionArgument.Undefined]], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Trade]: import("./Action").Action<[ActionArgument.NPC], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.Transmogrify]: import("./Action").Action<[ActionArgument.ItemInventory, [ActionArgument.ItemInventory, ActionArgument.Undefined]], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.TraverseTheSea]: import("./Action").Action<[[ActionArgument.ItemNearby, ActionArgument.Undefined], [ActionArgument.Boolean, ActionArgument.Undefined], [ActionArgument.Boolean, ActionArgument.Undefined], [ActionArgument.Boolean, ActionArgument.Undefined]], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Unequip]: import("./Action").Action<[[ActionArgument.ItemInventory, ActionArgument.Undefined]], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.Unhitch]: import("./Action").Action<[], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.UpdateDirection]: import("./Action").Action<[ActionArgument.Direction, [ActionArgument.Number, ActionArgument.Undefined]], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
    [ActionType.UseItem]: import("./Action").Action<[ActionArgument.ItemNearby, ActionArgument.ActionType], import("../player/IPlayer").IPlayer | import("../npc/INPC").INPC, void>;
};
export default actionDescriptions;
