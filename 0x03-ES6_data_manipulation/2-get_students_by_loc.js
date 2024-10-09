export default function getStudentsByLocation(idLists, city) {
  return idLists.filter((idList) => idList.location === city);
}
