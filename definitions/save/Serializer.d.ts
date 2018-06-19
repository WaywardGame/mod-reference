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
import { ISerializer } from "save/ISerializer";
export default class Serializer implements ISerializer {
    maxBytes: number;
    private buffer;
    private dataView;
    private byteOffset;
    private readonly object;
    private readonly objectKey;
    private readonly version;
    private readonly skipOnUnserialized;
    constructor(object: any, objectKey: any, version: string, skipOnUnserialized?: boolean);
    saveToString(): string;
    loadToObject(data: string): void;
    readProperty(object: any, key: any): void;
    writeProperty(object: any, key: any): void;
    private getSerializationProperties;
    private readObject;
    private readString;
    private readArrayV2;
    private readArrayBuffer;
    private readMap;
    private writeObject;
    private writeString;
    private writeArrayV2;
    private writeArrayBuffer;
    private writeMap;
    private isInteger;
    private isByteSigned;
    private isByteUnsigned;
    private isShortSigned;
    private isShortUnsigned;
    private isIntegerSigned;
    private isIntegerUnsigned;
}
