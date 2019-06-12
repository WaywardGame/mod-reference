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
import { ISshCommand, SshCommandCallback, SshCommandCategory, SshCommandRequirement, SshCommandType } from "./ISshCommand";
/**
 * An SSH Command
 */
export default class SshCommand<T extends SshCommandType> implements ISshCommand {
    readonly type: T;
    category: SshCommandCategory;
    helpText: string;
    requirements: SshCommandRequirement;
    callback: SshCommandCallback;
    constructor(type: T);
    setCategory(category: SshCommandCategory): this;
    setHelpText(helpText: string): this;
    setRequirements(requirements: SshCommandRequirement): this;
    addCallback(callback: SshCommandCallback): this;
}
