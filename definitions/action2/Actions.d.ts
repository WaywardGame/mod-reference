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
    [ActionType.AddFuel]: import("./Action").Action<[ActionArgument.Item, ActionArgument.Item], import("../player/IPlayer").IPlayer>;
    [ActionType.Apply]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Attack]: import("./Action").Action<[[ActionArgument.AttackType, ActionArgument.Undefined], [ActionArgument.Item, ActionArgument.Undefined]], import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Build]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Carve]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Cast]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.CloseContainer]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.CloseDoor]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Craft]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Decode]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Dig]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Disassemble]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Dismantle]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.DrawMap]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.DrinkCure]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.DrinkInFront]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.DrinkItem]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Drop]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Eat]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Equip]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Extinguish]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Fire]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Gather]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.GatherMilk]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.GatherTreasure]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.GatherWater]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Grasp]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Harvest]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Heal]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.HealOther]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Idle]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Ignite]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Inspect]: import("./Action").Action<[ActionArgument.Vector3], import("../player/IPlayer").IPlayer>;
    [ActionType.Jump]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Learn]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.LockPick]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Move]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.MoveItem]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.MoveTo]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Offer]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.OpenBottle]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.OpenContainer]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.OpenDoor]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Paddle]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Pet]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Pickup]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.PickupAllItems]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.PickupItem]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.PlaceDown]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Plant]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Pour]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.PourOnYourself]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Preserve]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Read]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Reinforce]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Release]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Rename]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Repair]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Rest]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.RubClockwise]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.RubCounterclockwise]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.SailToCivilization]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.SetDown]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Shoot]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Sleep]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Sling]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.SmotherFire]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Squeeze]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.StartFire]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.StokeFire]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Tame]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Teleport]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.TellTime]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Throw]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Till]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Trade]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Transmogrify]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.TraverseTheSea]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.Unequip]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.UpdateDirection]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
    [ActionType.UseItem]: IActionDescription<(ActionArgument | ActionArgument[])[], import("../creature/ICreature").ICreature | import("../npc/INPC").INPC | import("../player/IPlayer").IPlayer>;
};
export default actionDescriptions;
