import { ActionCallback, IActionDescription } from "action/IAction";
import { CommandCallback } from "command/ICommand";
import { ICreatureDescription } from "creature/ICreature";
import { IDoodadDescription } from "doodad/IDoodad";
import { ItemType, ITerrainResourceItem } from "Enums";
import { IItemDescription } from "item/IItem";
import { ILanguageExtension } from "language/ILanguage";
import { Hook, HookPriority } from "mod/IMod";
import * as Packets from "multiplayer/packets/Packets";
import { IBinding } from "newui/BindingManager";
import { UiApi } from "newui/INewUi";
import { ModOptions } from "newui/menu/OptionsMenu";
import { IHairstyleDescription } from "player/IPlayer";
import { ISkillDescription } from "player/Skills";
import { ITerrainDescription } from "tile/ITerrain";
import { IDialogInfo } from "ui/IUi";
export declare abstract class BaseMod {
    private readonly index;
    private readonly buttons;
    private allocatedEnums;
    private registeredPackets;
    /**
     * This field can't be initialized here because hooks are registered via decorator, and decorators
     * are called before the constructor finishes. It is instead initialized in the two methods that
     * use it, `registerHook` and `getHooks`
     */
    private hooks;
    constructor(index: number);
    /**
     * Registers the given hook for this mod.
     * @param hook See `Hook` or `Mod` for valid values
     *
     * @see `mod/Mod/hook`
     */
    registerHook(hook: Hook, priority?: HookPriority): void;
    /**
     * Returns a new array created from this mod's internal list of registered hooks.
     */
    getHooks(): {
        canClientMove?: number | undefined;
        canConsumeItem?: number | undefined;
        canCreatureAttack?: number | undefined;
        canCreatureMove?: number | undefined;
        canCreatureSpawn?: number | undefined;
        canDoodadSpawn?: number | undefined;
        canDropItem?: number | undefined;
        canPickupDoodad?: number | undefined;
        canPlayerAttack?: number | undefined;
        canSeeCreature?: number | undefined;
        getAmbientColor?: number | undefined;
        getAmbientColorCave?: number | undefined;
        getAmbientColorDay?: number | undefined;
        getAmbientColorNight?: number | undefined;
        getAmbientLightLevel?: number | undefined;
        getCreatureSpriteBatchLayer?: number | undefined;
        getPlayerFieldOfViewRadius?: number | undefined;
        getPlayerMaxHealth?: number | undefined;
        getPlayerStrength?: number | undefined;
        getPlayerSpriteBatchLayer?: number | undefined;
        getPlayerWeightMovementPenalty?: number | undefined;
        getPlayerWeightStatus?: number | undefined;
        getTileLightLevel?: number | undefined;
        isPlayerSwimming?: number | undefined;
        isTileInspectable?: number | undefined;
        onBindLoop?: number | undefined;
        onBuild?: number | undefined;
        onButtonBarClick?: number | undefined;
        onContainerItemAdd?: number | undefined;
        onContainerItemRemove?: number | undefined;
        onContainerItemUpdate?: number | undefined;
        onCraft?: number | undefined;
        onCreateWorld?: number | undefined;
        onCreatureDamage?: number | undefined;
        onCreatureDeath?: number | undefined;
        onCreatureSpawn?: number | undefined;
        onDisplayMessage?: number | undefined;
        onDoodadSpawn?: number | undefined;
        onGameEnd?: number | undefined;
        onGameStart?: number | undefined;
        onGameTickEnd?: number | undefined;
        onGameTickStart?: number | undefined;
        onInspectTile?: number | undefined;
        onInventoryItemAdd?: number | undefined;
        onInventoryItemRemove?: number | undefined;
        onInventoryItemUpdate?: number | undefined;
        onItemEquip?: number | undefined;
        onMove?: number | undefined;
        onMoveComplete?: number | undefined;
        onMoveDirectionUpdate?: number | undefined;
        onNoInputReceived?: number | undefined;
        onPickupDoodad?: number | undefined;
        onPlayerDamage?: number | undefined;
        onPlayerDeath?: number | undefined;
        onPlayerJoin?: number | undefined;
        onPlayerLeave?: number | undefined;
        onPlayerTickEnd?: number | undefined;
        onPlayerTickStart?: number | undefined;
        onQueueSoundEffect?: number | undefined;
        onShowInGameScreen?: number | undefined;
        onSpawnCreatureFromGroup?: number | undefined;
        onTileUpdate?: number | undefined;
        onTurnEnd?: number | undefined;
        onTurnStart?: number | undefined;
        onUpdateWeight?: number | undefined;
        postExecuteAction?: number | undefined;
        postGenerateWorld?: number | undefined;
        postRender?: number | undefined;
        postRenderPostProcess?: number | undefined;
        postRenderWorld?: number | undefined;
        preExecuteAction?: number | undefined;
        preExecuteCommand?: number | undefined;
        preRender?: number | undefined;
        preRenderPostProcess?: number | undefined;
        preRenderWorld?: number | undefined;
        processInput?: number | undefined;
        shouldRender?: number | undefined;
    };
    getIndex(): number;
    /**
     * Returns the name of this mod. Uses the constructor name as a fallback.
     */
    getName(): string;
    getPath(): string;
    loadFile(file: string, callback: (fileText: string, success: boolean) => void): boolean;
    createOptionsSection(creationHandler: (uiApi: UiApi, uiElement: ModOptions) => any): void;
    createButton(translationId: string, imagePath: string, keyBind?: number): JQuery;
    removeButton(button: JQuery): void;
    getButtons(): JQuery;
    createDialog(container: JQuery, dialogInfo: IDialogInfo): JQuery;
    getDialog(title: string): JQuery;
    addActionType(description: IActionDescription, callback: ActionCallback): number;
    addCommand(command: string, callback: CommandCallback): number;
    addSkillType(description: ISkillDescription): number;
    addMusic(name: string): number;
    addSoundEffect(name: string, variations?: number): number;
    addHairstyle(description: IHairstyleDescription): number;
    addItem(description: IItemDescription): number;
    addCreature(description: ICreatureDescription): number;
    addTerrain(description: ITerrainDescription, terrainType?: number): number;
    addTerrainResource(terrainType: number, terrainResource: ITerrainResourceItem[], defaultItem?: ItemType): void;
    addDoodad(description: IDoodadDescription): number;
    addDictionary(name: string, dictionaryEnum: any): number;
    extendLanguage(language: string, extension: ILanguageExtension): void;
    addMessage(name: string, message: string): number;
    registerPacket(packet: Packets.IPacketClass): void;
    /**
     * Adds a bindable and the default binding for it
     * @param name The name of the binding (when translated, the name will be `Mod<mod name><name>`)
     * @param binding The default binding or bindings of this bindable
     */
    addBindable(name: string, binding: IBinding | IBinding[]): number;
    itemNameToObjectType(name: string): ItemType | undefined;
    getItemByType(itemType: ItemType): IItemDescription | undefined;
    getItemByName(name: string): IItemDescription | undefined;
    /**
     * This is called internally after unloading a mod
     */
    unallocate(): void;
    private allocateEnum(id, name, objectValue?, onAllocate?, onUnallocate?);
}
export default BaseMod;
export interface IButton {
    name: string;
    tooltip: string;
    keyBind?: number;
}
