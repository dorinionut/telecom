export class Plan {
  private _id : string;
  private _name : string;
  private _monthlyCost : number;
  private _minutes : number;
  private _sms : number;
  private _minutesIntl : number;
  private _data : number;
  private _dataEES : number;
  private _carrier : string;

  get id() : string {
    return this._id;
  }

  set id(value : string) {
    this._id = value;
  }

  get name() : string {
    return this._name;
  }

  set name(value : string) {
    this._name = value;
  }

  get monthlyCost() : number {
    return this._monthlyCost;
  }

  set monthlyCost(value : number) {
    this._monthlyCost = value;
  }

  get minutes() : number {
    return this._minutes;
  }

  set minutes(value : number) {
    this._minutes = value;
  }

  get sms() : number {
    return this._sms;
  }

  set sms(value : number) {
    this._sms = value;
  }

  get minutesIntl() : number {
    return this._minutesIntl;
  }

  set minutesIntl(value : number) {
    this._minutesIntl = value;
  }

  get data() : number {
    return this._data;
  }

  set data(value : number) {
    this._data = value;
  }

  get dataEES() : number {
    return this._dataEES;
  }

  set dataEES(value : number) {
    this._dataEES = value;
  }

  get carrier() : string {
    return this._carrier;
  }

  set carrier(value : string) {
    this._carrier = value;
  }
}