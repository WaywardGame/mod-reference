import { DamageType } from "Enums";
import { Message } from "language/IMessages";
export declare function makeString(msg: Message | string, ...variables: any[]): string;
export declare const messages: Description<string>;
export default messages;
export declare const equipTypeToMessage: Message[];
export declare const damageTypeToMessage: Message[];
export declare function fullDamageType(damageType: DamageType): string;
export declare const recipeLevelToMessage: Message[];
