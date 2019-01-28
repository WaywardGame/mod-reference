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
import Emitter from "utilities/Emitter";
import Log from "utilities/Log";
export declare abstract class BaseMod extends Emitter {
    private readonly index;
    private allocatedEnums;
    private registeredPackets;
    private readonly subRegistries;
    constructor(index: number);
    getIndex(): number;
    /**
     * Returns the name of this mod.
     */
    getName(): string;
    getLog(): Log;
    getPath(): string;
    loadFile(file: string, callback: (fileText: string, success: boolean) => void): boolean;
    /**
     * Called when the save data for this mod is retrieved from a field decorated with `@Mod.saveData`.
     * @param data Any existing data, or `undefined`
     * @returns The data that should be returned. Conventionally, this is an object of some kind. It must be JSON serializable.
     *
     * This method is meant to be overridden. It is called internally.
     */
    initializeSaveData(data: any): any;
    /**
     * Called when the global data for this mod is retrieved from a field decorated with `@Mod.globalData`.
     * @param data Any existing data, or `undefined`
     * @returns The data that should be returned. Conventionally, this is an object of some kind. It must be JSON serializable.
     *
     * This method is meant to be overridden. It is called internally.
     */
    initializeGlobalData(data: any): any;
    /**
     * Event handler for `ModEvent.Unallocate`.
     */
    private onUnallocate;
    /**
     * Event handler for `ModEvent.PreInitialize`.
     *
     * Handles registration of fields decorated with ` @Register.thing`, which occur at `ModRegistrationTime.Initialize`
     */
    private onBeforeInitialize;
    /**
     * Event handler for `ModEvent.PreLoad`.
     *
     * Handles registration of fields decorated with ` @Register.thing`, which occur at `ModRegistrationTime.Load`
     */
    private onBeforeLoad;
    /**
     * All mods by default are `IRegistry`s, and any fields decorated with ` @Register.registry(Class)` are constructed as `IRegistry`s.
     *
     * This method goes through all the "registrations" stored in `[SYMBOL_MOD_REGISTRATIONS]` on the registry (these are added by the
     * ` @Register.thing` decorators) and actually registers them with the game.
     *
     * Since registrations can reference other registrations, each registration is mapped to a promise, which will resolve when it's
     * completely registered (all registrations it depends upon are registered, and then it itself is registered).
     *
     * @param registrationTime There are three times in which registrations actually happen:
     * 	1. `ModRegistrationTime.Initialize` — When the mod is enabled, or the game starts, if the mod is already enabled
     * 	2. `ModRegistrationTime.Load` — When a world is loaded
     * 	3. `ModRegistrationTime.Setup` — When the mod is set up
     *
     * Registrations which will only be used in saves are registered in `ModRegistrationTime.Load`.
     * Registrations which need to be noted always, whether or not the mod is enabled (such as languages) are registered in `ModRegistrationTime.Setup`.
     * All other registrations are registered in `ModRegistrationTime.Initialize`.
     *
     * This method will only initialize the registrations for the given time.
     *
     * @param registry The `IRegistry` to initialize.
     *
     * @returns When all registrations are complete.
     */
    private initializeRegistry;
    /**
     * Registers a registration in a registry. Wow™
     *
     * @param registry The `IRegistry` that the registration is from.
     * @param registration A `ModRegistration` — This is a type alias for any possible interface that extends `IBaseRegistration`.
     *
     * ------
     * 1. The registration is validated with `validateRegistration`. This is an asynchronous operation that replaces any references to
     * other registrations with their values, once they are registered. See `validateRegistration` for more details.
     * 2. The name of the registration is generated: `Mod<modname><registration.name (in pascal case, with all non-letters removed)>`
     * 3. If the registration contains a `description` field, sets the `modIndex` property in the description to this mod's index.
     * 4. If the registration is not "basic", IE: it needs to do something besides allocate an enum, it will have an entry in a switch
     * block for its `registration.type`. If it doesn't, by default it just allocates the enum using `registrationTypeToEnumMap`.
     */
    private register;
    /**
     * All `@Register.thing` decorators that take arguments can reference other registrations via `Registry<Mod, Thing>().get("name")`.
     * On the type side, that method returns `Thing`, but internally, a `Registry.Registered` instance is returned.
     *
     * @param registry The `IRegistry` that this registration is a part of.
     * @param registration An `IModRegistration`, or an object descendant in an `IModRegistration`. This object will be looped through,
     * and any values in it which are instances of `Registry.Registered` are asynchronously replaced with their registered values.
     */
    private validateRegistration;
    /**
     * An asynchronous getter for a registration ID in the given `IRegistry`.
     *
     * @param registry The registry to get a registration ID from.
     * @param property The property containing the registration ID.
     * (Contains a field/method, decorated with a ` @Register.thing` decorator)
     * @param type Whether the field is for a method or a property.
     * (Examples include actions/commands for methods & bindables/creatures for properties)
     *
     * - If the type is a property, and the field has a value, it's returned immediately.
     * - If the type is a method, and an ID is returned by `Registry.id(registry[property])`, the ID will be returned.
     */
    private getRegistrationId;
    /**
     * @param registry The registry to get a property value from.
     * @param property The property to get the value of.
     */
    private getRegistrationPropertyValue;
    /**
     * Resolves any promises waiting for this property (created by `getRegistrationId`) with the given value, then sets the property on
     * the registry to the given value.
     * @param registry The registry to set a property of.
     * @param property The property to set the value of.
     * @param value The value to set the property to.
     */
    private setRegistrationPropertyValue;
    /**
     * Allocates an enum for this mod.
     * @param id The enum type.
     * @param name The name of the enumeration value.
     * @param objectValue An object to register with the enum. For example, all values in the creature enumeration have a corresponding
     * `description` object.
     * @param onAllocate A callback for when the enum has been allocated.
     * @param onUnallocate A callback for when the enum has been unallocated.
     */
    private allocateEnum;
    private addTerrainResource;
}
export default BaseMod;
export interface IButton {
    name: string;
    tooltip: string;
    keyBind?: number;
}
