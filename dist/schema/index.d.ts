import { Field } from "./field.schema";
import { ILocalization } from "../interfaces";
export declare class Schema {
    private static schemaInstance;
    private codes;
    private fields;
    private localization;
    constructor(path: string, encoder?: ISchemaEncoder);
    static load(path: string, parser?: ISchemaEncoder): Schema;
    private static instance;
    static field(code: string): Field | undefined;
    static fields(): Field[];
    static setLocalization(localization: ILocalization): void;
    static getRuleLocalization(rule: string, ...args: string[]): string;
    private encoder;
}
export interface ISchemaEncoder {
    (field: any): Field;
}
