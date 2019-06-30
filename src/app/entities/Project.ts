import {Peripheral} from "./Peripheral";

export class Project {

  private _id:number;
  private _name:String;
  private _description:String;
  private _creationDate:String;
  private _peripherals:Array<Peripheral>;
  private _version:String;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): String {
    return this._name;
  }

  set name(value: String) {
    this._name = value;
  }

  get description(): String {
    return this._description;
  }

  set description(value: String) {
    this._description = value;
  }

  get creationDate(): String {
    return this._creationDate;
  }

  set creationDate(value: String) {
    this._creationDate = value;
  }

  get peripherals(): Array<Peripheral> {
    return this._peripherals;
  }

  set peripherals(value: Array<Peripheral>) {
    this._peripherals = value;
  }

  get version(): String {
    return this._version;
  }

  set version(value: String) {
    this._version = value;
  }
}
