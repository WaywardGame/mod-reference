/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 *
 */
export interface IRegistrarItem {
    getRegistrarId(): number;
    setRegistrarId(id: number): void;
}
export default class Registrar<T extends IRegistrarItem> {
    private readonly registrations;
    private readonly registrationSubTypeToMainType;
    private baseItem;
    get(id: number, includeSubTypes?: boolean): T | undefined;
    isBase(item: T): boolean;
    usesBase(id: number): boolean;
    registerBase(item: T): void;
    register(item: T, id?: number, subType?: number): void;
    unregister(item: T): boolean;
}
