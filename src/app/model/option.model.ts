export class Option {
  private _id : string;
  private _name : string;
  private _data : number;
  private _dataEES : number;
  private _cloudStorage : number;
  private _monthlyCost : number;
  private _plans : string[];

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

  get cloudStorage() : number {
    return this._cloudStorage;
  }

  set cloudStorage(value : number) {
    this.cloudStorage = value;
  }

  get monthlyCost() : number {
    return this._monthlyCost;
  }

  set monthlyCost(value : number) {
    this.monthlyCost = value;
  }

  get plans() : string[] {
    return this._plans;
  }

  set plans(value : string[]) {
    this.plans = value;
  }
}