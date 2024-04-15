const getListStudentIds = (studentID) => {
  if (Array.isArray(studentID))
  {
    return studentID.map((item) => item.id )
  }
  return [];
};

export default getListStudentIds;
