import { Defense, Resistances, Vulnerabilities } from "Enums";
export default class PlayerDefense extends Defense {
    base: number;
    resist: Resistances;
    vulnerable: Vulnerabilities;
    constructor(base: number, resist: Resistances, vulnerable: Vulnerabilities);
}
