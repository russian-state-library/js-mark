import { IRule } from '../interfaces';
interface ISubfield {
    code: string;
    isRequired: boolean;
    isRepeatable: boolean;
}
export declare class Subfield implements ISubfield {
    readonly code: string;
    readonly isRequired: boolean;
    readonly isRepeatable: boolean;
    constructor(code: string, isRequired: boolean, isRepeatable: boolean);
    rule(path?: string): IRule[];
}
export {};
