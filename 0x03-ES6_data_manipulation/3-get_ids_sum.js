import getListStudentIds from './1-get_list_student_ids';
// import getListStudents from "./0-get_list_students.js";

export default function getStudentIdsSum(arrValue) {
  const idArray = getListStudentIds(arrValue);
  return idArray.reduce((acc, curVal) => acc + curVal, 0);
}

// const students = getListStudents();
// const value = getStudentIdsSum(students);
// console.log(value);
