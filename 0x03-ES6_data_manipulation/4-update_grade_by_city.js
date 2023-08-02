// import getListStudents from "./0-get_list_students.js";

export default function updateStudentGradeByCity(getListStudentsVar, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  if (getListStudentsVar instanceof Array) {
    return getListStudentsVar
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (newGrades
          .filter((grade) => grade.studentId === student.id)
          .pop() || defaultGrade).grade,
      }));
  }
  return [];
}
