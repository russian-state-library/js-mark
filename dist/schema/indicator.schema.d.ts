import { IRule } from "../interfaces";
export declare class Indicator implements IIndicator {
    readonly name: string;
    readonly codes: string[];
    constructor(name: string, codes: string[]);
    rule(path?: string): IRule;
}
interface IIndicator {
    name: string;
    codes: string[];
    toString: () => string;
}
export {};
