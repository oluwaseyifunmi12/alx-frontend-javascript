export default function updateStudentGradeByCity(students, city, newGrades) {
  const byCity = students.filter((student) => student.location === city);

  return byCity.map((student) => {
    const myGrade = newGrades.find((grade) => grade.studentId === student.id);

    return {
      ...student,
      grade: myGrade ? myGrade.grade : 'N/A',
    };
  });
}
