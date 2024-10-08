export default function getListStudentIds(idLists) {
  if (Array.isArray(idLists)) return idLists.map((idlist) => idlist.id);
  return [];
}
