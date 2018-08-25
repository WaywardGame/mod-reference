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
import { Bindable, OverlayType } from "Enums";
import { Dictionary, InterruptChoice } from "language/ILanguage";
import { Message } from "language/IMessages";
import { IBinding } from "newui/BindingManager";
import Dialog from "newui/screen/screens/game/component/Dialog";
import { DialogId, IDialogDescription } from "newui/screen/screens/game/Dialogs";
import IGameScreenApi from "newui/screen/screens/game/IGameScreenApi";
import { IMenuBarButtonDescription, MenuBarButtonType } from "newui/screen/screens/game/static/menubar/MenuBarButtonDescriptions";
import { HelpArticle, IHelpArticle } from "newui/screen/screens/menu/menus/help/HelpArticleDescriptions";
import { ModOptionSectionInitializer } from "newui/screen/screens/menu/menus/options/TabMods";
import { Source } from "player/IMessageManager";
import { INoteDescription, Note } from "player/NoteManager";
import { IOverlayDescription } from "renderer/Overlays";
export declare const SYMBOL_MOD_REGISTRATIONS: unique symbol;
export declare enum ModRegistrationType {
    Action = 0,
    Command = 1,
    Bindable = 2,
    OptionsSection = 3,
    Dictionary = 4,
    Registry = 5,
    Dialog = 6,
    HelpArticle = 7,
    Note = 8,
    Message = 9,
    Overlay = 10,
    MessageSource = 11,
    InterruptChoice = 12,
    MenuBarButton = 13
}
export interface IActionRegistration extends IBaseModRegistration {
    type: ModRegistrationType.Action;
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
    cls: {
        new (mod: any): any;
    };
}
export interface IDialogRegistration extends IBaseModRegistration {
    type: ModRegistrationType.Dialog;
    name: string;
    description: IDialogDescription;
    cls: {
        new (gsapi: IGameScreenApi): Dialog;
    };
}
export declare type ModRegistration = IActionRegistration | ICommandRegistration | IBindableRegistration | IOptionsSectionRegistration | IDictionaryRegistration | IRegistryRegistration | IDialogRegistration | IHelpArticleRegistration | INoteRegistration | IMessageRegistration | IOverlayRegistration | IMessageSourceRegistration | IInterruptChoiceRegistration | IMenuBarButtonRegistration;
declare module Register {
    /**
     * Registers a class as a sub-registry. The class can contain its own `@Register` decorators, and they will be loaded by the higher-level registry.
     *
     * The decorated property will be injected with the constructed instance of the provided registry class.
     */
    function registry(cls: {
        new (upperRegistry: any): any;
    }): <K extends string | number | symbol, T extends { [k in K]: object; }>(target: T, key: K) => void;
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
     * Registers a dialog.
     * @param name The name of the dialog.
     * @param description The definition of the dialog. (Max/min/default sizes & positioning)
     * @param cls The dialog's class. It will be passed the `IGameScreenApi`, and its `DialogId` on construction.
     *
     * The decorated property will be injected with the id of the registered dialog.
     */
    function dialog(name: string, description: IDialogDescription, cls: {
        new (gsapi: IGameScreenApi, id: number): Dialog;
    }): <K extends string | number | symbol, T extends { [k in K]: DialogId; }>(target: T, key: K) => void;
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
     * Registers a menu bar button.
     * @param description The definition of the menu bar button.
     */
    function menuBarButton(name: string, description: IMenuBarButtonDescription): <K extends string | number | symbol, T extends { [k in K]: MenuBarButtonType; }>(target: T, key: K) => void;
    /**
     * Registers an action.
     * @param description The definition of this action.
     *
     * This decorator should be used on a valid `ActionCallback` method.
     */
    function action<T = any>(description: IActionDescription): (target: any, key: string, descriptor: TypedPropertyDescriptor<ActionCallback<T>>) => void;
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
export declare module Registry {
    class Registered<T> {
        readonly key: string;
        constructor(key: string);
    }
    function id(method: (...args: any[]) => any): number;
}
declare const INVALID: unique symbol;
export declare function registry<H, T>(): {
    get<K extends keyof H>(key: K): H[K] extends T ? Registry.Registered<T> & T : typeof INVALID;
};
export interface IBaseModRegistration {
    type: ModRegistrationType;
    key: string;
    registrationId: number;
}
