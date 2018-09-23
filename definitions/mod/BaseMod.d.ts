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
import { ModRegistration, SYMBOL_MOD_REGISTRATIONS } from "mod/ModRegistry";
import { INPCClass } from "npc/NPCS";
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
     * Called when the save data for this mod is retrieved from a field decorated with `@SaveData`.
     * @param data Any existing data, or `undefined`
     * @returns The data that should be returned. Conventionally, this is an object of some kind. It must be JSON serializable.
     */
    initializeSaveData(data: any): any;
    /**
     * Called when the global data for this mod is retrieved from a field decorated with `@SaveData`.
     * @param data Any existing data, or `undefined`
     * @returns The data that should be returned. Conventionally, this is an object of some kind. It must be JSON serializable.
     */
    initializeGlobalData(data: any): any;
    /**
     * Returns the name of this mod. Uses the constructor name as a fallback.
     */
    getName(): string;
    getLog(): Log;
    getPath(): string;
    loadFile(file: string, callback: (fileText: string, success: boolean) => void): boolean;
    /**
     * @deprecated
     * @see `@Register.dialog`
     */
    createDialog(container: JQuery, dialogInfo: IDialogInfo): JQuery;
    /**
     * @deprecated
     * This method only works with dialogs registered using `BaseMod.createDialog`, which is deprecated in favor of the NewUi dialog registration.
     */
    getDialog(title: string): JQuery;
    addNPC(name: string, npcClass: INPCClass): number;
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
    private addTerrainResource;
    private register;
    private getPropertyValue;
    private getRegistrationValue;
    private setRegistrationValue;
    private resolveWaitForProperty;
    private allocateEnum;
}
export default BaseMod;
export interface IButton {
    name: string;
    tooltip: string;
    keyBind?: number;
}
