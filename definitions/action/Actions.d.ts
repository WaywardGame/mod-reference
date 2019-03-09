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
import { ActionArgument, ActionType } from "action/IAction";
/**
 * This exists as a workaround for a declaration bug https://github.com/Microsoft/TypeScript/issues/27962
 */
export declare let INVALID: ActionArgument;
declare const actionDescriptions: {
    [ActionType.AddFuel]: import("./Action").Action<[ActionArgument.ItemNearby, ActionArgument.ItemInventory], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Apply]: import("./Action").Action<[ActionArgument.ItemNearby], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Attack]: import("./Action").Action<[[ActionArgument.Item, ActionArgument.Undefined], [ActionArgument.AttackType, ActionArgument.Undefined]], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Build]: import("./Action").Action<[ActionArgument.Item], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Carve]: import("./Action").Action<[ActionArgument.ItemInventory], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Cast]: import("./Action").Action<[ActionArgument.Item], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.CloseContainer]: import("./Action").Action<[ActionArgument.Container, [ActionArgument.Boolean, ActionArgument.Undefined]], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.CloseDoor]: import("./Action").Action<[], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, boolean>;
    [ActionType.Craft]: import("./Action").Action<[ActionArgument.ItemType, ActionArgument.ItemArrayNearby, ActionArgument.ItemArrayNearby, [ActionArgument.ItemNearby, ActionArgument.Undefined], [ActionArgument.Boolean, ActionArgument.Undefined]], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Decode]: import("./Action").Action<[ActionArgument.ItemNearby], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Dig]: import("./Action").Action<[[ActionArgument.ItemInventory, ActionArgument.Undefined]], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Disassemble]: import("./Action").Action<[ActionArgument.ItemNearby], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Dismantle]: import("./Action").Action<[ActionArgument.ItemNearby], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.DrawMap]: import("./Action").Action<[ActionArgument.ItemNearby], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.DrinkCure]: import("./Action").Action<[ActionArgument.ItemNearby], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.DrinkInFront]: import("./Action").Action<[], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.DrinkItem]: import("./Action").Action<[ActionArgument.ItemNearby], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Drop]: import("./Action").Action<[ActionArgument.ItemNearby, [ActionArgument.Boolean, ActionArgument.Undefined], [ActionArgument.Boolean, ActionArgument.Undefined]], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Eat]: import("./Action").Action<[ActionArgument.ItemNearby], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Equip]: import("./Action").Action<[ActionArgument.ItemNearby, ActionArgument.EquipType, [ActionArgument.Boolean, ActionArgument.Undefined], [ActionArgument.Boolean, ActionArgument.Undefined]], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Extinguish]: import("./Action").Action<[ActionArgument.ItemInventory], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Fire]: import("./Action").Action<[[ActionArgument.Item, ActionArgument.Undefined], [ActionArgument.AttackType, ActionArgument.Undefined]], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Gather]: import("./Action").Action<[[ActionArgument.ItemInventory, ActionArgument.Undefined], [ActionArgument.Boolean, ActionArgument.Undefined]], import("../player/IPlayer").IPlayer, void>;
    [ActionType.GatherMilk]: import("./Action").Action<[ActionArgument.ItemNearby], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.GatherTreasure]: import("./Action").Action<[[ActionArgument.ItemNearby, ActionArgument.Undefined]], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.GatherWater]: import("./Action").Action<[ActionArgument.ItemNearby], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Grasp]: import("./Action").Action<[ActionArgument.ItemInventory], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Harvest]: import("./Action").Action<[[ActionArgument.ItemInventory, ActionArgument.Undefined], [ActionArgument.Boolean, ActionArgument.Undefined]], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Heal]: import("./Action").Action<[ActionArgument.ItemNearby], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.HealOther]: import("./Action").Action<[ActionArgument.ItemInventory], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Hitch]: import("./Action").Action<[], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Idle]: import("./Action").Action<[], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Ignite]: import("./Action").Action<[ActionArgument.ItemInventory], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Inspect]: import("./Action").Action<[ActionArgument.Vector3], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Jump]: import("./Action").Action<[], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Learn]: import("./Action").Action<[ActionArgument.ItemNearby], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.LockPick]: import("./Action").Action<[ActionArgument.ItemInventory], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Move]: import("./Action").Action<[ActionArgument.Direction], import("../player/IPlayer").IPlayer, void>;
    [ActionType.MoveItem]: import("./Action").Action<[[ActionArgument.ItemNearby, ActionArgument.Undefined], [ActionArgument.Container, ActionArgument.Undefined], [ActionArgument.Container, ActionArgument.Undefined], [ActionArgument.ItemType, ActionArgument.Undefined], [ActionArgument.ItemQuality, ActionArgument.Undefined]], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.MoveTo]: import("./Action").Action<[ActionArgument.Vector2, [ActionArgument.Direction, ActionArgument.Undefined]], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Offer]: import("./Action").Action<[ActionArgument.ItemInventory], import("../player/IPlayer").IPlayer, void>;
    [ActionType.OpenBottle]: import("./Action").Action<[ActionArgument.ItemNearby], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.OpenContainer]: import("./Action").Action<[ActionArgument.Container, [ActionArgument.Boolean, ActionArgument.Undefined]], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.OpenDoor]: import("./Action").Action<[], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, boolean>;
    [ActionType.Paddle]: import("./Action").Action<[ActionArgument.ItemInventory], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Pet]: import("./Action").Action<[], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Pickup]: import("./Action").Action<[[ActionArgument.ItemInventory, ActionArgument.Undefined]], import("../player/IPlayer").IPlayer, void>;
    [ActionType.PickupAllItems]: import("./Action").Action<[], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.PickupItem]: import("./Action").Action<[], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.PlaceDown]: import("./Action").Action<[ActionArgument.Item], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Plant]: import("./Action").Action<[ActionArgument.ItemInventory], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Pour]: import("./Action").Action<[ActionArgument.ItemNearby], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.PourOnYourself]: import("./Action").Action<[ActionArgument.ItemNearby], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Preserve]: import("./Action").Action<[ActionArgument.ItemNearby, [ActionArgument.ItemNearby, ActionArgument.Undefined]], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Read]: import("./Action").Action<[ActionArgument.ItemNearby], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Reinforce]: import("./Action").Action<[ActionArgument.ItemNearby, [ActionArgument.ItemNearby, ActionArgument.Undefined]], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Release]: import("./Action").Action<[], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Rename]: import("./Action").Action<[[ActionArgument.ItemNearby, ActionArgument.Doodad, ActionArgument.Creature], ActionArgument.String], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Repair]: import("./Action").Action<[ActionArgument.ItemNearby, [ActionArgument.ItemNearby, ActionArgument.Doodad, ActionArgument.Undefined]], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Rest]: import("./Action").Action<[[ActionArgument.ItemNearby, ActionArgument.Undefined], [ActionArgument.Doodad, ActionArgument.Undefined], [ActionArgument.RestType, ActionArgument.Undefined], [ActionArgument.Boolean, ActionArgument.Undefined]], import("../player/IPlayer").IPlayer, void>;
    [ActionType.RubClockwise]: import("./Action").Action<[ActionArgument.ItemNearby], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.RubCounterclockwise]: import("./Action").Action<[ActionArgument.ItemNearby], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.SailToCivilization]: import("./Action").Action<[[ActionArgument.ItemNearby, ActionArgument.Undefined], [ActionArgument.Boolean, ActionArgument.Undefined], [ActionArgument.Boolean, ActionArgument.Undefined], [ActionArgument.Boolean, ActionArgument.Undefined]], import("../player/IPlayer").IPlayer, void>;
    [ActionType.SetDown]: import("./Action").Action<[ActionArgument.ItemInventory], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Shoot]: import("./Action").Action<[[ActionArgument.Item, ActionArgument.Undefined], [ActionArgument.AttackType, ActionArgument.Undefined]], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Sleep]: import("./Action").Action<[[ActionArgument.ItemNearby, ActionArgument.Undefined], [ActionArgument.Doodad, ActionArgument.Undefined], [ActionArgument.RestType, ActionArgument.Undefined], [ActionArgument.Boolean, ActionArgument.Undefined]], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Sling]: import("./Action").Action<[[ActionArgument.Item, ActionArgument.Undefined], [ActionArgument.AttackType, ActionArgument.Undefined]], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.SmotherFire]: import("./Action").Action<[ActionArgument.ItemInventory], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Squeeze]: import("./Action").Action<[ActionArgument.ItemInventory], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.StartFire]: import("./Action").Action<[ActionArgument.ItemInventory, [ActionArgument.ItemInventory, ActionArgument.Undefined]], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.StokeFire]: import("./Action").Action<[ActionArgument.ItemInventory], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Tame]: import("./Action").Action<[], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Teleport]: import("./Action").Action<[ActionArgument.ItemInventory], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.TellTime]: import("./Action").Action<[ActionArgument.ItemNearby], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Throw]: import("./Action").Action<[[ActionArgument.Item, ActionArgument.Undefined], [ActionArgument.AttackType, ActionArgument.Undefined]], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Till]: import("./Action").Action<[[ActionArgument.ItemInventory, ActionArgument.Undefined]], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Trade]: import("./Action").Action<[ActionArgument.NPC], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Transmogrify]: import("./Action").Action<[ActionArgument.ItemInventory, [ActionArgument.ItemInventory, ActionArgument.Undefined]], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.TraverseTheSea]: import("./Action").Action<[[ActionArgument.ItemNearby, ActionArgument.Undefined], [ActionArgument.Boolean, ActionArgument.Undefined], [ActionArgument.Boolean, ActionArgument.Undefined], [ActionArgument.Boolean, ActionArgument.Undefined]], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Unequip]: import("./Action").Action<[[ActionArgument.ItemInventory, ActionArgument.Undefined]], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Unhitch]: import("./Action").Action<[], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.UpdateDirection]: import("./Action").Action<[ActionArgument.Direction, [ActionArgument.Number, ActionArgument.Undefined]], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.UseItem]: import("./Action").Action<[ActionArgument.ItemNearby, ActionArgument.ActionType], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
};
export default actionDescriptions;
