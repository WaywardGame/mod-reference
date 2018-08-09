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
import { ActionCallback, IActionDescription } from "action/IAction";
import { CommandCallback } from "command/ICommand";
import { ICorpseDescription } from "creature/corpse/ICorpse";
import { ICreatureDescription } from "creature/ICreature";
import { IDoodadDescription } from "doodad/IDoodad";
import { IStatusEffectDescription } from "entity/StatusEffects";
import { ItemType, ITerrainResourceItem } from "Enums";
import { IItemDescription } from "item/IItem";
import { ILanguageExtension } from "language/ILanguage";
import { ModRegistration, SYMBOL_MOD_REGISTRATIONS } from "mod/ModRegistry";
import * as Packets from "multiplayer/packets/Packets";
import { IBinding } from "newui/BindingManager";
import Component from "newui/component/Component";
import { UiApi } from "newui/INewUi";
import { IMenuBarButtonDescription } from "newui/screen/screens/game/static/menubar/MenuBarButtonDescriptions";
import { IStatDisplayDescription } from "newui/screen/screens/game/static/stats/IStatDisplayDescription";
import { INPCClass } from "npc/NPCS";
import { IHairstyleDescription } from "player/IPlayer";
import { ISkillDescription } from "player/Skills";
import { ITerrainDescription } from "tile/ITerrain";
import { ITileEventDescription } from "tile/ITileEvent";
import { IDialogInfo } from "ui/IUi";
import Emitter from "utilities/Emitter";
import Log from "utilities/Log";
declare const SYMBOL_WAIT_FOR_PROPERTY: unique symbol;
interface IRegistry {
    [SYMBOL_MOD_REGISTRATIONS]: ModRegistration[];
    [SYMBOL_WAIT_FOR_PROPERTY]?: {
        [key: string]: Array<(val: any) => void>;
    };
}
export declare abstract class BaseMod extends Emitter {
    private readonly index;
    private allocatedEnums;
    private registeredPackets;
    private readonly subRegistries;
    constructor(index: number);
    getIndex(): number;
    /**
     * Returns the name of this mod. Uses the constructor name as a fallback.
     */
    getName(): string;
    getLog(): Log;
    getPath(): string;
    loadFile(file: string, callback: (fileText: string, success: boolean) => void): boolean;
    createDialog(container: JQuery, dialogInfo: IDialogInfo): JQuery;
    getDialog(title: string): JQuery;
    /**
     * @deprecated
     * @see `@Register.optionsSection`
     */
    registerOptionsSection(initializer: (api: UiApi, optionsSection: Component) => any): void;
    /**
     * @deprecated
     * @see `@Register.action`
     */
    addActionType(description: IActionDescription, callback: ActionCallback): number;
    /**
     * @deprecated
     * @see `@Register.command`
     */
    addCommand(command: string, callback: CommandCallback): number;
    addSkillType(description: ISkillDescription): number;
    /**
     * @deprecated
     * @see `@Register.overlay`
     */
    addOverlay(name: string): number;
    addNPC(name: string, npcClass: INPCClass): number;
    addMusic(name: string): number;
    addSoundEffect(name: string, variations?: number): number;
    addHairstyle(description: IHairstyleDescription): number;
    addItem(description: IItemDescription): number;
    addCreature(description: ICreatureDescription, corpseDescription?: ICorpseDescription): number;
    addTerrain(description: ITerrainDescription, terrainType?: number): number;
    addTerrainResource(terrainType: number, terrainResource: ITerrainResourceItem[], defaultItem?: ItemType): void;
    addDoodad(description: IDoodadDescription): number;
    addTileEvent(description: ITileEventDescription): number;
    addDictionary(name: string, dictionaryEnum: any): number;
    extendLanguage(language: string, extension: ILanguageExtension): number;
    addMessage(name: string, message: string): number;
    addMessageSource(name: string): number;
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
    /**
     * This is called internally. Handles decorator-registered methods & properties, such as actions, commands, or bindables
     */
    onBeforeInitialize(registry?: IRegistry): Promise<void>;
    /**
     * This is called internally. Handles decorator-registered methods & properties, such as actions, commands, or bindables
     */
    onBeforeLoad(registry?: IRegistry): Promise<void>;
    private initializeRegistry;
    private validateRegistration;
    private register;
    private getPropertyValue;
    private getRegistrationValue;
    private setRegistrationValue;
    private allocateEnum;
}
export default BaseMod;
export interface IButton {
    name: string;
    tooltip: string;
    keyBind?: number;
}
