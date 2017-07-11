import { Defense, Resistances, Vulnerabilities } from "Enums";
export default class PlayerDefense extends Defense {
    base: number;
    parrying: number;
    resist: Resistances;
    vulnerable: Vulnerabilities;
    constructor(base: number, parrying: number, resist: Resistances, vulnerable: Vulnerabilities);
}
