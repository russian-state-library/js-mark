import { IMarkField } from "./interfaces";
import { Field } from "./schema/field.schema";
import { Schema } from "./schema/index";
import { ILocalization } from "./interfaces";
declare class Mark {
    static fields(): Field[];
    static getRequiredFields(): Field[];
    static getRepeatableFields(): Field[];
    static field(code: string): Field | undefined;
    static validate(fields: IMarkField[]): any[];
    private static isExistsField;
    private static formatErrors;
}
export { Mark, Schema, ILocalization };
