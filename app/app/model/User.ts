/**
 * Created by nicasandra on 12/16/2016.
 */
export class User {
    private _id: number;
    private _username: string;
    private _firstname: string;
    private _lastname: string;
    private _password: string;
    private _phone: string;
    private _dateOfBirth: Date;


    constructor(id: number, username: string, firstname: string, lastname: string, password: string, phone: string, dateOfBirth: Date) {
        this._id = id;
        this._username = username;
        this._firstname = firstname;
        this._lastname = lastname;
        this._password = password;
        this._phone = phone;
        this._dateOfBirth = dateOfBirth;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get firstname(): string {
        return this._firstname;
    }

    set firstname(value: string) {
        this._firstname = value;
    }

    get lastname(): string {
        return this._lastname;
    }

    set lastname(value: string) {
        this._lastname = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get phone(): string {
        return this._phone;
    }

    set phone(value: string) {
        this._phone = value;
    }

    get dateOfBirth(): Date {
        return this._dateOfBirth;
    }

    set dateOfBirth(value: Date) {
        this._dateOfBirth = value;
    }
}
