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
export default class ScaleManager {
    private scale;
    /**
     * Returns the minimum scale we allow, 0.5.
     */
    getMinimum(): number;
    /**
     * Returns the maximum scale the screen size will allow.
     */
    getMaximum(): number;
    /**
     * Returns the current UI scale (after being clamped by min & max).
     */
    get(): number;
    getFloor(floor?: number): number;
    /**
     * Returns the currently "requested" UI scale.
     */
    getUserSetting(): number;
    /**
     * Requests a new UI scale, a multiplier of the default size.
     */
    setUserSetting(scale: number): void;
    /**
     * Updates the UI scale based on the current viewport.
     */
    update(): void;
}
