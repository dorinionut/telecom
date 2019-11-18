import { IPerson } from './person.interface';

export class Person implements IPerson {
  private _firstName: string;
  private _lastName: string;
  private _email: string;
  private _phone: string;

  constructor(firstName?: string, lastName?: string, email?: string, phone?: string) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
    this._phone = phone;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }
}
