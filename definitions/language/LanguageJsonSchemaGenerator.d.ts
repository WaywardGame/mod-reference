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
    allOf: ({
        type: string;
        anyOf: ({
            type: string;
            properties: {
                dictionaries: {
                    description: string;
                    type: string;
                    properties: DictionarySchemas;
                };
                pluralizationRules?: undefined;
            };
            required: string[];
        } | {
            type: string;
            properties: {
                pluralizationRules: {
                    description: string;
                    type: string;
                    properties: {
                        pluralRules: {
                            description: string;
                            type: string;
                            additionalProperties: {
                                type: string;
                            };
                        };
                        singularRules: {
                            description: string;
                            type: string;
                            additionalProperties: {
                                type: string;
                            };
                        };
                        uncountableRules: {
                            description: string;
                            type: string;
                            minItems: number;
                            items: {
                                type: string;
                            };
                        };
                        irregularRules: {
                            description: string;
                            type: string;
                            minItems: number;
                            items: {
                                type: string;
                                items: {
                                    type: string;
                                }[];
                            };
                        };
                        articleRules: {
                            description: string;
                            type: string;
                            minItems: number;
                            items: {
                                type: string;
                                items: ({
                                    anyOf: {
                                        type: string;
                                    }[];
                                    type?: undefined;
                                } | {
                                    type: string;
                                    anyOf?: undefined;
                                })[];
                            };
                        };
                    };
                    additionalProperties: boolean;
                };
                dictionaries?: undefined;
            };
            required: string[];
        })[];
        oneOf?: undefined;
    } | {
        type: string;
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
        anyOf?: undefined;
    })[];
};
export {};
