import {Category} from "./Category";
/**
 * Created by Nick on 1/1/2017.
 */

export class Cost {
    private _name: string;
    private _value: number;
    private _category: Category;
    private _details: string;


    constructor(name: string, value: number, category: Category, details: string) {
        this._name = name;
        this._value = value;
        this._category = category;
        this._details = details;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get value(): number {
        return this._value;
    }

    set value(value: number) {
        this._value = value;
    }

    get category(): Category {
        return this._category;
    }

    set category(value: Category) {
        this._category = value;
    }

    get details(): string {
        return this._details;
    }

    set details(value: string) {
        this._details = value;
    }
}
