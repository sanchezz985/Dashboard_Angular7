export class Peripheral {

  private _enviroment:String;
  private _name:String;
  private _description:String;
  private _url:String

  get enviroment(): String {
    return this._enviroment;
  }

  set enviroment(value: String) {
    this._enviroment = value;
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

  get url(): String {
    return this._url;
  }

  set url(value: String) {
    this._url = value;
  }
}
