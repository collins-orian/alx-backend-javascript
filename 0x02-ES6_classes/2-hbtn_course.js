export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  verifyString(name) {
    if (typeof name !== "string") {
      throw new TypeError("Name must be a string.");
    }
    return name;
  }

  verifyNumber(length) {
    if (typeof length !== "number") {
      throw new TypeError("Length must be a number.");
    }
    return length;
  }

  verifyArray(students) {
    if (!Array.isArray(students)) {
      throw new TypeError(" must be an array.");
    }
    return students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = this.verifyString(name);
  }

  get length() {
    return this._length;
  }

  set length(length) {
    this._length = this.verifyNumber(length);
  }

  get students() {
    return this._students;
  }

  set students(students) {
    this._students = this.verifyArray(students);
  }
}
