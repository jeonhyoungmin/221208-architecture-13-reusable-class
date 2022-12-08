const { EmitFlags } = require("typescript");

class StudentBasicInfo {
  constructor(indexForNumbering, studentName, phoneNumber, emailAddress) {
    this.indexForNumbering = indexForNumbering;
    this.studentName = studentName;
    this.phoneNumber = phoneNumber;
    this.emailAddress = emailAddress;
  }
  set indexForNumbering(value) {
    if (typeof value === "number") {
      this._indexForNumbering = value;
    } else {
      throw new Error("Invalid argument type");
    }
  }
}

class ClassRoom extends StudentBasicInfo {
  constructor(
    indexForNumbering,
    studentName,
    phoneNumber,
    emailAddress,
    hosil
  ) {
    super(...arguments);
    this.hosil = hosil;
  }
}

// class TenFloor extends StudentBasicInfo {
//   constructor(
//     indexForNumbering,
//     studentName,
//     phoneNumber,
//     emailAddress,
//     work,
//     dataWork,
//     change
//   ) {
//     super(...arguments);
//     this.work = work;
//     this.dataWork = dataWork;
//     this.change = change;
//   }
// }

// class TenFloor extends StudentBasicInfo {
//   constructor(
//     indexForNumbering,
//     studentName,
//     phoneNumber,
//     emailAddress,
//     work,
//     dataWork,
//     change
//   ) {
//     super(
//       indexForNumbering,
//       studentName,
//       phoneNumber,
//       emailAddress,
//       work,
//       dataWork
//     );
//     this.work = work;
//     this.dataWork = dataWork;
//     this.change = change;
//   }
// }

class TenFloor extends StudentBasicInfo {
  constructor(i, s, p, e, work, dataWork, change) {
    super(...arguments);
    this.work = work;
    this.dataWork = dataWork;
    this.change = change;
  }
}

const test = new StudentBasicInfo(1, "kong", "123-456-7890", "eee@ddd.com");
console.log(test);
const classRoomTest = new ClassRoom(2, "uk", "233-233-233", "333@ddd.com", 4);
console.log(classRoomTest);
const tenFloorTest = new TenFloor(
  3,
  "name",
  "010",
  "naver",
  "work",
  "datawork",
  "change"
);
console.log(tenFloorTest);
