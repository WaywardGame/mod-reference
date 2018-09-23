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
interface IDictionarySchema {
    type: "object";
    properties: {
        [key: string]: any;
    };
}
interface DictionarySchemas {
    [key: string]: IDictionarySchema;
}
export default function generateSchema(): {
    title: string;
    description: string;
    type: string;
    properties: {
        dictionaries: {
            description: string;
            type: string;
            properties: DictionarySchemas;
        };
    };
    required: string[];
    oneOf: ({
        type: string;
        properties: {
            extends: {
                description: string;
                type: string;
            };
            name?: undefined;
            shouldPluralize?: undefined;
        };
        required: string[];
    } | {
        type: string;
        properties: {
            name: {
                description: string;
                type: string;
            };
            shouldPluralize: {
                description: string;
                enum: boolean[];
            };
            extends?: undefined;
        };
        required: string[];
    })[];
};
export {};
