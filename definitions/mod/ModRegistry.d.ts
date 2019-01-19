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
import { ActionType, IActionDescription } from "action/IAction";
import { CommandCallback } from "command/ICommand";
import { ICorpseDescription } from "creature/corpse/ICorpse";
import { ICreatureDescription } from "creature/ICreature";
import { IDoodadDescription } from "doodad/IDoodad";
import { Bindable, Command, CreatureType, DoodadType, ItemType, ItemTypeGroup, ITerrainResourceItem, Music, NPCType, OverlayType, SfxType, SkillType, TerrainType } from "Enums";
import { ChallengeModifier, IDailyChallengeModifier } from "game/Challenge";
import { InspectType } from "game/inspection/IInspection";
import { IInspectionHandler } from "game/inspection/Inspections";
import { IItemDescription, IItemGroupDescription } from "item/IItem";
import { Dictionary } from "language/Dictionaries";
import InterruptChoice from "language/dictionary/InterruptChoice";
import Message from "language/dictionary/Message";
import Note from "language/dictionary/Note";
import Language from "language/Language";
import LanguageExtension from "language/LanguageExtension";
import InterModRegistry, { InterModRegistration } from "mod/InterModRegistry";
import { IPacketClass } from "multiplayer/packets/Packets";
import { IBinding } from "newui/BindingManager";
import Dialog from "newui/screen/screens/game/component/Dialog";
import { DialogId, IDialogDescription } from "newui/screen/screens/game/Dialogs";
import IGameScreenApi from "newui/screen/screens/game/IGameScreenApi";
import { IMenuBarButtonDescription, MenuBarButtonType } from "newui/screen/screens/game/static/menubar/MenuBarButtonDescriptions";
import { HelpArticle, IHelpArticle } from "newui/screen/screens/menu/menus/help/HelpArticleDescriptions";
import { ModOptionSectionInitializer } from "newui/screen/screens/menu/menus/options/TabMods";
import { INPCClass } from "npc/NPCS";
import { Source } from "player/IMessageManager";
import { INoteDescription } from "player/note/NoteManager";
import { QuestType } from "player/quest/quest/IQuest";
import { Quest } from "player/quest/quest/Quest";
import { RequirementType } from "player/quest/requirement/IRequirement";
import { Requirement } from "player/quest/requirement/Requirement";
import { ISkillDescription } from "player/Skills";
import { IOverlayDescription } from "renderer/Overlays";
import { ITerrainDescription } from "tile/ITerrain";
import { ITileEventDescription, TileEventType } from "tile/ITileEvent";
export declare const SYMBOL_MOD_REGISTRATIONS: unique symbol;
export declare enum ModRegistrationType {
    Action = 0,
    Bindable = 1,
    Command = 2,
    Creature = 3,
    DailyChallengeModifier = 4,
    Dialog = 5,
    Dictionary = 6,
    Doodad = 7,
    HelpArticle = 8,
    InspectionType = 9,
    InterModRegistration = 10,
    InterModRegistry = 11,
    InterruptChoice = 12,
    Item = 13,
    ItemGroup = 14,
    Language = 15,
    LanguageExtension = 16,
    MenuBarButton = 17,
    Message = 18,
    MessageSource = 19,
    MusicTrack = 20,
    Note = 21,
    NPC = 22,
    OptionsSection = 23,
    Overlay = 24,
    Packet = 25,
    Quest = 26,
    QuestRequirement = 27,
    Registry = 28,
    Skill = 29,
    SoundEffect = 30,
    Terrain = 31,
    TileEvent = 32
}
export interface ILanguageRegistration extends IBaseModRegistration {
    type: ModRegistrationType.Language;
    instance: Language;
}
export interface ILanguageExtensionRegistration extends IBaseModRegistration {
    type: ModRegistrationType.LanguageExtension;
    instance: LanguageExtension;
}
export interface IInspectionTypeRegistration extends IBaseModRegistration {
    type: ModRegistrationType.InspectionType;
    name: string;
    description: IInspectionHandler | IInspectionHandler["handle"];
}
export interface IDailyChallengeModifierRegistration extends IBaseModRegistration {
    type: ModRegistrationType.DailyChallengeModifier;
    name: string;
    description: IDailyChallengeModifier | IDailyChallengeModifier["apply"];
}
export interface IMusicTrackRegistration extends IBaseModRegistration {
    type: ModRegistrationType.MusicTrack;
    name: string;
}
export interface ISoundEffectRegistration extends IBaseModRegistration {
    type: ModRegistrationType.SoundEffect;
    name: string;
    variations?: number;
}
export interface IPacketRegistration extends IBaseModRegistration {
    type: ModRegistrationType.Packet;
    class: IPacketClass;
}
export interface INPCRegistration extends IBaseModRegistration {
    type: ModRegistrationType.NPC;
    name: string;
    class: INPCClass;
}
export interface IActionRegistration extends IBaseModRegistration {
    type: ModRegistrationType.Action;
    name: string;
    description: IActionDescription;
}
export interface IHelpArticleRegistration extends IBaseModRegistration {
    type: ModRegistrationType.HelpArticle;
    name: string;
    description: IHelpArticle;
}
export interface IMenuBarButtonRegistration extends IBaseModRegistration {
    type: ModRegistrationType.MenuBarButton;
    name: string;
    description: IMenuBarButtonDescription;
}
export interface INoteRegistration extends IBaseModRegistration {
    type: ModRegistrationType.Note;
    name: string;
    description?: INoteDescription;
}
export interface ICommandRegistration extends IBaseModRegistration {
    type: ModRegistrationType.Command;
    name: string;
}
export interface IInterruptChoiceRegistration extends IBaseModRegistration {
    type: ModRegistrationType.InterruptChoice;
    name: string;
}
export interface IMessageSourceRegistration extends IBaseModRegistration {
    type: ModRegistrationType.MessageSource;
    name: string;
}
export interface IMessageRegistration extends IBaseModRegistration {
    type: ModRegistrationType.Message;
    name: string;
}
export interface IOverlayRegistration extends IBaseModRegistration {
    type: ModRegistrationType.Overlay;
    name: string;
    description?: IOverlayDescription;
}
export interface IBindableRegistration extends IBaseModRegistration {
    type: ModRegistrationType.Bindable;
    name: string;
    defaultBindings: IBinding[];
}
export interface IDictionaryRegistration extends IBaseModRegistration {
    type: ModRegistrationType.Dictionary;
    name: string;
    dictionaryEnum: any;
}
export interface IOptionsSectionRegistration extends IBaseModRegistration {
    type: ModRegistrationType.OptionsSection;
}
export interface IRegistryRegistration extends IBaseModRegistration {
    type: ModRegistrationType.Registry;
    class: new (mod: any) => any;
}
export interface IDialogRegistration extends IBaseModRegistration {
    type: ModRegistrationType.Dialog;
    name: string;
    description: IDialogDescription;
    class: new (gsapi: IGameScreenApi) => Dialog;
}
export interface IInterModRegistryRegistration extends IBaseModRegistration {
    type: ModRegistrationType.InterModRegistry;
    name: string;
}
export interface IInterModRegistration extends IBaseModRegistration {
    type: ModRegistrationType.InterModRegistration;
    modName: string;
    registryName: string;
    value: any;
}
export interface ISkillRegistration extends IBaseModRegistration {
    type: ModRegistrationType.Skill;
    name: string;
    description?: ISkillDescription;
}
export interface IItemRegistrationDescription extends IItemDescription {
    groups?: ItemTypeGroup[];
}
export interface IItemRegistration extends IBaseModRegistration {
    type: ModRegistrationType.Item;
    name: string;
    description?: IItemRegistrationDescription;
}
export interface ICreatureRegistration extends IBaseModRegistration {
    type: ModRegistrationType.Creature;
    name: string;
    description: ICreatureDescription;
    corpseDescription?: ICorpseDescription;
}
export interface ITerrainRegistration extends IBaseModRegistration {
    type: ModRegistrationType.Terrain;
    name: string;
    description?: ITerrainRegistrationDescription;
}
export interface ITerrainRegistrationDescription extends ITerrainDescription {
    resources?: ITerrainResourceItem[];
    defaultItem?: ItemType;
}
export interface IDoodadRegistration extends IBaseModRegistration {
    type: ModRegistrationType.Doodad;
    name: string;
    description?: IDoodadDescription;
}
export interface ITileEventRegistration extends IBaseModRegistration {
    type: ModRegistrationType.TileEvent;
    name: string;
    description?: ITileEventDescription;
}
export interface IItemGroupRegistration extends IBaseModRegistration {
    type: ModRegistrationType.ItemGroup;
    name: string;
    description: IItemGroupDescription;
}
export interface IQuestRegistration extends IBaseModRegistration {
    type: ModRegistrationType.Quest;
    name: string;
    description: Quest;
}
export interface IQuestRequirementRegistration extends IBaseModRegistration {
    type: ModRegistrationType.QuestRequirement;
    name: string;
    description: Requirement;
}
export declare type ModRegistration = (IActionRegistration | IBindableRegistration | ICommandRegistration | ICreatureRegistration | IDialogRegistration | IDictionaryRegistration | IDoodadRegistration | IHelpArticleRegistration | IInspectionTypeRegistration | IInterModRegistration | IInterModRegistryRegistration | IInterruptChoiceRegistration | IItemGroupRegistration | IItemRegistration | ILanguageExtensionRegistration | ILanguageRegistration | IMenuBarButtonRegistration | IMessageRegistration | IMessageSourceRegistration | IMusicTrackRegistration | INoteRegistration | INPCRegistration | IOptionsSectionRegistration | IOverlayRegistration | IPacketRegistration | IQuestRegistration | IQuestRequirementRegistration | IRegistryRegistration | ISkillRegistration | ISoundEffectRegistration | ITerrainRegistration | ITileEventRegistration);
declare module Register {
    /**
     * Registers a class as a sub-registry. The class can contain its own `@Register` decorators, and they will be loaded by the higher-level registry.
     *
     * The decorated property will be injected with the constructed instance of the provided registry class.
     */
    function registry(cls: new (upperRegistry: any) => any): <K extends string | number | symbol, T extends { [k in K]: object; }>(target: T, key: K) => void;
    /**
     * Registers a language.
     * @param instance The language instance.
     *
     * The decorated property will be injected with the provided language instance.
     */
    function language<L extends Language>(instance: L): <K extends string | number | symbol, T extends { [k in K]: L; }>(target: T, key: K) => void;
    /**
     * Registers a language extension.
     * @param instance The language extension instance.
     *
     * The decorated property will be injected with the provided language extension instance.
     */
    function languageExtension<L extends LanguageExtension>(instance: L): <K extends string | number | symbol, T extends { [k in K]: L; }>(target: T, key: K) => void;
    /**
     * Registers a music track.
     * @param name The name of the music track.
     * @param description The definition of the music track.
     *
     * The decorated property will be injected with the id of the registered music track.
     */
    function musicTrack(name: string): <K extends string | number | symbol, T extends { [k in K]: Music; }>(target: T, key: K) => void;
    /**
     * Registers a sound effect.
     * @param name The name of the sound effect.
     * @param description The definition of the sound effect.
     *
     * The decorated property will be injected with the id of the registered sound effect.
     */
    function soundEffect(name: string, variations?: number): <K extends string | number | symbol, T extends { [k in K]: SfxType; }>(target: T, key: K) => void;
    /**
     * Registers a packet.
     * @param cls The packet class.
     *
     * The decorated property will be injected with the passed packet class.
     */
    function packet<C extends IPacketClass>(cls: C): <K extends string | number | symbol, T extends { [k in K]: C; }>(target: T, key: K) => void;
    /**
     * Registers an NPC.
     * @param cls The NPC class.
     *
     * The decorated property will be injected with the NPCType of the registered NPC.
     */
    function npc<C extends INPCClass>(name: string, cls: C): <K extends string | number | symbol, T extends { [k in K]: NPCType; }>(target: T, key: K) => void;
    /**
     * Registers a help article.
     * @param name The name of the help article.
     * @param description The definition of the help article.
     *
     * The decorated property will be injected with the id of the registered help article.
     */
    function helpArticle(name: string, description: IHelpArticle): <K extends string | number | symbol, T extends { [k in K]: HelpArticle; }>(target: T, key: K) => void;
    /**
     * Registers a note.
     * @param name The name of the note.
     * @param description The definition of the note.
     *
     * The decorated property will be injected with the id of the registered note.
     */
    function note(name: string, description?: INoteDescription): <K extends string | number | symbol, T extends { [k in K]: Note; }>(target: T, key: K) => void;
    /**
     * Registers a skill.
     * @param name The name of the skill.
     * @param description The definition of the skill.
     *
     * The decorated property will be injected with the id of the registered skill.
     */
    function skill(name: string, description?: ISkillDescription): <K extends string | number | symbol, T extends { [k in K]: SkillType; }>(target: T, key: K) => void;
    /**
     * Registers an item.
     * @param name The name of the item.
     * @param description The definition of the item.
     *
     * The decorated property will be injected with the id of the registered item.
     */
    function item(name: string, description?: IItemRegistrationDescription): <K extends string | number | symbol, T extends { [k in K]: ItemType; }>(target: T, key: K) => void;
    /**
     * Registers a creature.
     * @param name The name of the creature.
     * @param description The definition of the creature.
     *
     * The decorated property will be injected with the id of the registered creature.
     */
    function creature(name: string, description: ICreatureDescription, corpseDescription?: ICorpseDescription): <K extends string | number | symbol, T extends { [k in K]: CreatureType; }>(target: T, key: K) => void;
    /**
     * Registers a terrain.
     * @param name The name of the terrain.
     * @param description The definition of the terrain.
     *
     * The decorated property will be injected with the id of the registered terrain.
     */
    function terrain(name: string, description?: ITerrainRegistrationDescription): <K extends string | number | symbol, T extends { [k in K]: TerrainType; }>(target: T, key: K) => void;
    /**
     * Registers a doodad.
     * @param name The name of the doodad.
     * @param description The definition of the doodad.
     *
     * The decorated property will be injected with the id of the registered doodad.
     */
    function doodad(name: string, description?: IDoodadDescription): <K extends string | number | symbol, T extends { [k in K]: DoodadType; }>(target: T, key: K) => void;
    /**
     * Registers a tile event.
     * @param name The name of the tile event.
     * @param description The definition of the tile event.
     *
     * The decorated property will be injected with the id of the registered tile event.
     */
    function tileEvent(name: string, description?: ITileEventDescription): <K extends string | number | symbol, T extends { [k in K]: TileEventType; }>(target: T, key: K) => void;
    /**
     * Registers a dialog.
     * @param name The name of the dialog.
     * @param description The definition of the dialog. (Max/min/default sizes & positioning)
     * @param cls The dialog's class. It will be passed the `IGameScreenApi`, and its `DialogId` on construction.
     *
     * The decorated property will be injected with the id of the registered dialog.
     */
    function dialog(name: string, description: IDialogDescription, cls: new (gsapi: IGameScreenApi, id: number) => Dialog): <K extends string | number | symbol, T extends { [k in K]: DialogId; }>(target: T, key: K) => void;
    /**
     * Registers a bindable.
     * @param name The name of the bindable.
     * @param defaultBindings The default bindings of the bindable.
     *
     * For example, `@Register.bindable("Cut", { key: "KeyX" }) public bindableCut: Bindable;`
     *
     * The decorated property will be injected with the id of the registered note.
     */
    function bindable(name: string, ...defaultBindings: IBinding[]): <K extends string | number | symbol, T extends { [k in K]: Bindable; }>(target: T, key: K) => void;
    /**
     * Registers a dictionary.
     * @param name The name of the dictionary.
     * @param dictionaryEnum The enum representing the dictionary; containing all its entries.
     *
     * The decorated property will be injected with the id of the registered dictionary.
     */
    function dictionary(name: string, dictionaryEnum: any): <K extends string | number | symbol, T extends { [k in K]: Dictionary; }>(target: T, key: K) => void;
    /**
     * Registers a message.
     * @param name The name of the message.
     *
     * The decorated property will be injected with the id of the registered message.
     *
     * Note: This decorator replaces the previous `Mod.addMessage(name, message)` call. However, it does not support passing
     * a string. To translate your message, create a language file that extends English.
     */
    function message(name: string): <K extends string | number | symbol, T extends { [k in K]: Message; }>(target: T, key: K) => void;
    /**
     * Registers an interrupt choice.
     * @param name The name of the interrupt choice.
     *
     * The decorated property will be injected with the id of the registered interrupt choice.
     */
    function interruptChoice(name: string): <K extends string | number | symbol, T extends { [k in K]: InterruptChoice; }>(target: T, key: K) => void;
    /**
     * Registers a message source.
     * @param name The name of the message source.
     *
     * The decorated property will be injected with the id of the registered message source.
     */
    function messageSource(name: string): <K extends string | number | symbol, T extends { [k in K]: Source; }>(target: T, key: K) => void;
    /**
     * Registers an overlay.
     * @param description The definition of the overlay.
     */
    function overlay(name: string, description?: IOverlayDescription): <K extends string | number | symbol, T extends { [k in K]: OverlayType; }>(target: T, key: K) => void;
    /**
     * Registers an inspection type, which will appear in tile tooltips or the messages after inspecting a tile.
     * @param description The definition of the inspection type.
     */
    function inspectionType(name: string, description: IInspectionHandler | IInspectionHandler["handle"]): <K extends string | number | symbol, T extends { [k in K]: InspectType; }>(target: T, key: K) => void;
    /**
     * Registers a daily challenge modifier, a "modifier" that will change based on the seed in daily challenge mode.
     * @param description The definition of the daily challenge modifier.
     */
    function dailyChallengeModifier(name: string, description: IDailyChallengeModifier | IDailyChallengeModifier["apply"]): <K extends string | number | symbol, T extends { [k in K]: ChallengeModifier; }>(target: T, key: K) => void;
    /**
     * Registers a menu bar button.
     * @param description The definition of the menu bar button.
     */
    function menuBarButton(name: string, description: IMenuBarButtonDescription): <K extends string | number | symbol, T extends { [k in K]: MenuBarButtonType; }>(target: T, key: K) => void;
    /**
     * Registers an item group.
     * @param description The definition of the item group.
     */
    function itemGroup(name: string, description: IItemGroupDescription): <K extends string | number | symbol, T extends { [k in K]: ItemTypeGroup; }>(target: T, key: K) => void;
    /**
     * Registers a quest.
     * @param description The definition of the quest.
     */
    function quest(name: string, description: Quest): <K extends string | number | symbol, T extends { [k in K]: QuestType; }>(target: T, key: K) => void;
    /**
     * Registers a quest requirement.
     * @param description The definition of the quest requirement.
     */
    function questRequirement(name: string, description: Requirement<any, any>): <K extends string | number | symbol, T extends { [k in K]: RequirementType; }>(target: T, key: K) => void;
    /**
     * Registers an action.
     * @param description The definition of this action.
     */
    function action(name: string, description?: IActionDescription): <K extends string | number | symbol, T extends { [k in K]: ActionType; }>(target: T, key: K) => void;
    function interModRegistry<V>(name: string): <K extends string | number | symbol, T extends { [k in K]: InterModRegistry<V>; }>(target: T, key: K) => void;
    function interModRegistration<V>(modName: string, registryName: string, value: V): <K extends string | number | symbol, T extends { [k in K]: InterModRegistration<V>; }>(target: T, key: K) => void;
    /**
     * Registers a command.
     * @param name The name of this command (what players will type to use it, eg: `/heal`).
     *
     * This decorator should be used on a valid `CommandCallback` method.
     */
    function command(name: string): (target: any, key: string, descriptor: TypedPropertyDescriptor<CommandCallback>) => void;
    /**
     * Registers an options section.
     *
     * This decorator should be used on a valid `ModOptionSectionInitializer` method.
     */
    function optionsSection(target: any, key: string, descriptor: TypedPropertyDescriptor<ModOptionSectionInitializer>): void;
}
export default Register;
export declare const SYMBOL_REGISTRATION_ID: unique symbol;
export interface RegisteredMethod {
    [SYMBOL_REGISTRATION_ID]: number;
}
declare const INVALID: unique symbol;
/**
 * This function and module is for retrieving the IDs of other registered things.
 *
 * # As a module
 * Provides the method `id`, which is for retrieving the ID of `@Register`'d functions. For more information on using this method,
 * see that method's documentation.
 *
 * # As a function
 * As a function, its only purpose is for within other `@Register` decorators. It *does not actually return the ID*, but a temporary
 * value that is internally used in lieu of it. Do *not* use this method outside of a decorator, and assume you're going to get the
 * correct ID. You're not.
 *
 * To, it requires two type parameters:
 * @param H The "Host" of the registration.
 * @param T The type of the registration.
 *
 * For example, if you're trying to get a bindable that was registered by your mod, you would call it like this:
 * `Registry<YourModClass, Bindable>().get("theNameOfTheFieldThatContainsTheBindableYouWant")`
 *
 * Here's a full example (excerpt from [Starter Quest](https://github.com/WaywardGame/starterquest)):
 * ```ts
 * @Register.bindable("Toggle", { key: "KeyJ" })
 * 	public readonly bindable: Bindable;
 *
 * 	@Register.menuBarButton("Starter Quest", {
 * 		bindable: registry<StarterQuest, Bindable>().get("bindable"),
 * 		tooltip: tooltip => tooltip.addText(text => text
 * 			.setText(new Translation(this.dictionary, StarterQuestDictionary.StarterQuestTitle))),
 * 		onActivate: () => ui.toggleDialog(this.dialog)
 * 	})
 * 	public readonly menuBarButton: MenuBarButtonType;
 * ```
 */
export declare function Registry<H, T extends CommandCallback>(): IRegistryRegisteredCommandIntermediateGetter<H, T>;
export declare function Registry<H, T>(): IRegistryRegisteredPropertyIntermediateGetter<H, T>;
export declare module Registry {
    /**
     * Returns the ID of a registered action or command callback which was decorated with its respective `@Register` decorator.
     * @param method An action or command callback method
     */
    function id<M extends (...args: any[]) => any>(method: M): Command;
    /**
     * Used internally for `Registry<H, T>.get(key)`
     */
    class Registered {
        readonly key: string;
        readonly type: RegistryRegisteredIntermediateType;
        constructor(key: string, type: RegistryRegisteredIntermediateType);
    }
}
export interface IBaseModRegistration {
    type: ModRegistrationType;
    key: string;
    registrationId: number;
}
export interface IRegistryRegisteredActionIntermediateGetter<H, T> {
    /**
     * @param key The key of `H` which contains an `ActionCallback`.
     * @returns An intermediate value referencing the `ActionCallback` stored in the given key in `H`
     */
    getAction<K extends keyof H>(key: K): H[K] extends T ? ActionType : typeof INVALID;
}
export interface IRegistryRegisteredCommandIntermediateGetter<H, T> {
    /**
     * @param key The key of `H` which contains a `CommandCallback`.
     * @returns An intermediate value referencing the `CommandCallback` stored in the given key in `H`
     */
    getCommand<K extends keyof H>(key: K): H[K] extends T ? Command : typeof INVALID;
}
export interface IRegistryRegisteredPropertyIntermediateGetter<H, T> {
    /**
     * @param key The key of `H` which contains `T`.
     * @returns An intermediate value referencing the `T` stored in the given key in `H`
     */
    get<K extends keyof H>(key: K): H[K] extends T ? T : typeof INVALID;
}
export declare const enum RegistryRegisteredIntermediateType {
    Property = 0,
    Callback = 1
}
