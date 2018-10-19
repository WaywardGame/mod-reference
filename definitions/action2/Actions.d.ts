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
import { ActionArgument, ActionType, IActionDescription } from "action2/IAction";
/**
 * This exists as a workaround for a declaration bug https://github.com/Microsoft/TypeScript/issues/27962
 */
export declare let INVALID: ActionArgument;
declare const actionDescriptions: {
    [ActionType.AddFuel]: import("./Action").Action<[ActionArgument.ItemNearby, ActionArgument.ItemInventory], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Apply]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Attack]: import("./Action").Action<[[ActionArgument.AttackType, ActionArgument.Undefined], [ActionArgument.Item, ActionArgument.Undefined]], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Build]: import("./Action").Action<[ActionArgument.Item], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Carve]: import("./Action").Action<[ActionArgument.ItemInventory], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Cast]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.CloseContainer]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.CloseDoor]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Craft]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Decode]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Dig]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Disassemble]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Dismantle]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.DrawMap]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.DrinkCure]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.DrinkInFront]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.DrinkItem]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Drop]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Eat]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Equip]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Extinguish]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Fire]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Gather]: import("./Action").Action<[[ActionArgument.ItemInventory, ActionArgument.Undefined], [ActionArgument.Boolean, ActionArgument.Undefined]], import("../player/IPlayer").IPlayer, void>;
    [ActionType.GatherMilk]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.GatherTreasure]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.GatherWater]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Grasp]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Harvest]: import("./Action").Action<[[ActionArgument.ItemInventory, ActionArgument.Undefined], [ActionArgument.Boolean, ActionArgument.Undefined]], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Heal]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.HealOther]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Idle]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Ignite]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Inspect]: import("./Action").Action<[ActionArgument.Vector3], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Jump]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Learn]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.LockPick]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Move]: import("./Action").Action<[ActionArgument.Direction], import("../player/IPlayer").IPlayer, void>;
    [ActionType.MoveItem]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.MoveTo]: import("./Action").Action<[ActionArgument.Vector2, [ActionArgument.Direction, ActionArgument.Undefined]], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Offer]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.OpenBottle]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.OpenContainer]: import("./Action").Action<[ActionArgument.Container, [ActionArgument.Boolean, ActionArgument.Undefined]], import("../player/IPlayer").IPlayer, void>;
    [ActionType.OpenDoor]: import("./Action").Action<[], import("../player/IPlayer").IPlayer, boolean>;
    [ActionType.Paddle]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Pet]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Pickup]: import("./Action").Action<[[ActionArgument.ItemInventory, ActionArgument.Undefined]], import("../player/IPlayer").IPlayer, void>;
    [ActionType.PickupAllItems]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.PickupItem]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.PlaceDown]: import("./Action").Action<[ActionArgument.Item], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Plant]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Pour]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.PourOnYourself]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Preserve]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Read]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Reinforce]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Release]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Rename]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Repair]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Rest]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.RubClockwise]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.RubCounterclockwise]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.SailToCivilization]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.SetDown]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Shoot]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Sleep]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Sling]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.SmotherFire]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Squeeze]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.StartFire]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.StokeFire]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Tame]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Teleport]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.TellTime]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Throw]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Till]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Trade]: import("./Action").Action<[ActionArgument.NPC], import("../player/IPlayer").IPlayer, void>;
    [ActionType.Transmogrify]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.TraverseTheSea]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.Unequip]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.UpdateDirection]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer, void>;
    [ActionType.UseItem]: import("./Action").Action<[ActionArgument.ItemNearby, ActionArgument.ActionType], import("../player/IPlayer").IPlayer, void>;
};
export default actionDescriptions;
