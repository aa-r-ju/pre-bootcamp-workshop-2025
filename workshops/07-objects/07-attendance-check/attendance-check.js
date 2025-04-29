let classRoom = [
  {
    Marnie: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: true },
      { Thursday: true },
      { Friday: true },
    ],
  },
  {
    Lena: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: true },
      { Thursday: false },
      { Friday: true },
    ],
  },
  {
    Shoshanna: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: false },
      { Thursday: true },
      { Friday: false },
    ],
  },
  {
    Jessa: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: false },
      { Thursday: false },
      { Friday: true },
    ],
  },
];

function attendanceCheck(day) {
  let presentStudents = [];

  for (let i = 0; i < classRoom.length; i++) {
    let studentObj = classRoom[i];
    let studentName = Object.keys(studentObj)[0];
    let attendanceArray = studentObj[studentName];

    for (let j = 0; j < attendanceArray.length; j++) {
      let dayObj = attendanceArray[j];

      if (dayObj[day] === true) {
        presentStudents.push(studentName);
        break;
      }
    }
  }

  return presentStudents;
}

console.log(attendanceCheck("Monday"));
