import { IMarkField } from './interfaces';
export declare class MarkField implements IMarkField {
    readonly code: string;
    readonly ind1?: string;
    readonly ind2?: string;
    readonly subfields?: {
        code: string;
        value: string;
    }[];
    readonly value?: string;
    constructor(code: string, ind1?: string, ind2?: string, subfields?: {
        code: string;
        value: string;
    }[], value?: string);
    toValidatorStructure(): object;
}
