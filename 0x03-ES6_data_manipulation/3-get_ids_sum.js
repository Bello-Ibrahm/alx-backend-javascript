const getStudentIdsSum = (arrList) => {
  const idsSum = arrList.reduce(
    (acc, value) => acc + value.id, 0,
  );
  return idsSum;
};

export default getStudentIdsSum;
