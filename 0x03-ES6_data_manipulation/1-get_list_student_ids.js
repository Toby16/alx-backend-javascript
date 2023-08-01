// import getListStudents from "./0-get_list_students";

export default function getListStudentIds(arrValue) {
  if (Array.isArray(arrValue)) {
    return arrValue.map((object) => object.id);
  }

  return [];
}

// console.log(getListStudentIds("hello"));
// console.log(getListStudentIds(getListStudents()));
