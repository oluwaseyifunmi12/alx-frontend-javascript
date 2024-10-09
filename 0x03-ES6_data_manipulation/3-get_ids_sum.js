export default function getStudentIdsSum(Students) {
  return Students.map((Student) => Student.id)
    .reduce((acc, currVal) => acc + currVal, 0);
}
