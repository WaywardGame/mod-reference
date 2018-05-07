import { ActionCallback, IActionDescription } from "action/IAction";
import { CommandCallback } from "command/ICommand";
import { ICorpseDescription } from "creature/corpse/ICorpse";
import { ICreatureDescription } from "creature/ICreature";
import { IDoodadDescription } from "doodad/IDoodad";
import { IStatusEffectDescription } from "entity/StatusEffects";
import { ItemType, ITerrainResourceItem } from "Enums";
import { IItemDescription } from "item/IItem";
import { ILanguageExtension } from "language/ILanguage";
import * as Packets from "multiplayer/packets/Packets";
import { IBinding } from "newui/BindingManager";
import { UiApi } from "newui/INewUi";
import { IMenuBarButtonDescription } from "newui/screen/screens/game/static/menubar/MenuBarButtonDescriptions";
import { IStatDisplayDescription } from "newui/screen/screens/game/static/stats/IStatDisplayDescription";
import { ModOptions } from "newui/screen/screens/menu/menus/OptionsMenu";
import { IHairstyleDescription } from "player/IPlayer";
import { ISkillDescription } from "player/Skills";
import { ITerrainDescription } from "tile/ITerrain";
import { IDialogInfo } from "ui/IUi";
import Log from "utilities/Log";
export declare abstract class BaseMod {
    private readonly index;
    private allocatedEnums;
    private registeredPackets;
    constructor(index: number);
    getIndex(): number;
    /**
     * Returns the name of this mod. Uses the constructor name as a fallback.
     */
    getName(): string;
    getLog(): Log;
    getPath(): string;
    loadFile(file: string, callback: (fileText: string, success: boolean) => void): boolean;
    createOptionsSection(creationHandler: (uiApi: UiApi, uiElement: ModOptions) => any): void;
    createDialog(container: JQuery, dialogInfo: IDialogInfo): JQuery;
    getDialog(title: string): JQuery;
    addActionType(description: IActionDescription, callback: ActionCallback): number;
    addCommand(command: string, callback: CommandCallback): number;
    addSkillType(description: ISkillDescription): number;
    addMusic(name: string): number;
    addSoundEffect(name: string, variations?: number): number;
    addHairstyle(description: IHairstyleDescription): number;
    addItem(description: IItemDescription): number;
    addCreature(description: ICreatureDescription, corpseDescription?: ICorpseDescription): number;
    addTerrain(description: ITerrainDescription, terrainType?: number): number;
    addTerrainResource(terrainType: number, terrainResource: ITerrainResourceItem[], defaultItem?: ItemType): void;
    addDoodad(description: IDoodadDescription): number;
    addDictionary(name: string, dictionaryEnum: any): number;
    extendLanguage(language: string, extension: ILanguageExtension): number;
    addMessage(name: string, message: string): number;
    registerPacket(packet: Packets.IPacketClass): void;
    /**
     * Adds a bindable and the default binding for it
     * @param name The name of the binding (when translated, the name will be `Mod<mod name><name>`)
     * @param binding The default binding or bindings of this bindable
     */
    addBindable(name: string, binding: IBinding | IBinding[]): number;
    /**
     * Adds a new stat that can be added to entities, with a description of how the stat should be displayed
     * in a ui stat display.
     * @param name The name of this stat.
     * @param displayDescription The display description of this stat.
     */
    addStat(name: string, displayDescription: IStatDisplayDescription): number;
    /**
     * Adds a new status effect that can be added to entities, with a description of how the effect should
     * be rendered when on an entity.
     * @param name The name of the status effect.
     * @param description The render description of this status effect.
     */
    addStatusEffect(name: string, description: IStatusEffectDescription): number;
    /**
     * Adds a new button to the in-game menu bar.
     * @param name The name of the menu bar button.
     * @param description Details of how the menu bar button should display and what it should do.
     */
    addMenuBarButton(name: string, description: IMenuBarButtonDescription): number;
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
