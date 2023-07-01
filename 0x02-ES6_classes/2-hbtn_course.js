export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  verifyString(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string.');
    }
    return value;
  }

  verifyNumber(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number.');
    }
    return value;
  }

  verifyArray(value) {
    if (!Array.isArray(value)) {
      throw new TypeError('Students must be an array.');
    }
    return value;
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
