import { Defense, Resistances, Vulnerabilities } from "Enums";
export default class PlayerDefense extends Defense {
    parrying: number;
    constructor(base: number, parrying: number, resist: Resistances, vulnerable: Vulnerabilities);
}
