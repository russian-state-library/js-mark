import { IRule } from "../interfaces";

export class Indicator implements IIndicator {

    constructor (
        public readonly name: string, 
        public readonly codes: string[]
    ) {}

    rule(path: string = ''): IRule {
        return { key: path + this.name, rule: [ 'required', `enums:${this.codes.join(',')}`, 'string' ] }
    }

}

interface IIndicator { name: string, codes: string[], toString: () => string }