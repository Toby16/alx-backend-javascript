// import getListStudents from "./0-get_list_students.js";

export default function getStudentsByLocation(getListStudentsVar, city) {
  return getListStudentsVar.filter((value) => (value.location === city));
}

// const students = getListStudents();
// console.log(getStudentsByLocation(students, 'San Francisco'));
