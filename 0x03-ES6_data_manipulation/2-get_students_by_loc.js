const getStudentsByLocation  = (arrObjList, city) => {
  const arrObjFilters = arrObjList.filter((item) => item.location === city);
  return arrObjFilters;
};

export default getStudentsByLocation;
