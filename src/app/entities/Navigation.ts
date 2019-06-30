export class Navigation {

  private _name:String;
  private _url:String;

  get name(): String {
    return this._name;
  }

  set name(value: String) {
    this._name = value;
  }

  get url(): String {
    return this._url;
  }

  set url(value: String) {
    this._url = value;
  }
}
