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
import InterModRegistry, { InterModRegistration } from "mod/InterModRegistry";
declare module InterModRegistryManager {
    function getRegistrations<T>(modName: string, interModRegistryName: string): InterModRegistration<T>[];
    function registerRegistry(modName: string, interModRegistryName: string, registry: InterModRegistry<any>): void;
    function deregisterRegistry(modName: string, interModRegistryName: string): void;
    function register(modName: string, interModRegistryName: string, registration: InterModRegistration<any>): void;
    function deregister(modName: string, interModRegistryName: string, registration: InterModRegistration<any>): void;
}
export default InterModRegistryManager;
