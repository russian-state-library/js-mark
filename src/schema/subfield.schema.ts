import { Validator } from 'neck-validator';
import { IRule } from '../interfaces';
interface ISubfield {
    code: string;
    isRequired: boolean,
    isRepeatable: boolean
}

export class Subfield implements ISubfield {

    constructor(
        public readonly code: string,
        public readonly isRequired: boolean,
        public readonly isRepeatable: boolean
    ) {}

    rule(path: string = ''): IRule[] {
        const rules: IRule[] = [];

        let suffix = '';

        if (this.isRepeatable) {
            rules.push({ key: path + this.code, rule: [ 'required', 'array' ] });
            suffix = Validator.VALIDATOR_RULE_DELIMITER + Validator.VALIDATOR_ARRAY_DELIMITER;
        }

        rules.push({ 
            key: path + this.code + suffix, 
            rule: (this.isRequired) ? [ 'required', 'string' ] : [] 
        });

        return rules;
    }

}