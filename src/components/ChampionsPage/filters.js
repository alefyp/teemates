export const filterByInput = (data, searchTerm) => {
  console.log(data[0].name, searchTerm);
  const filterBy = searchTerm.toLowerCase();
  return data.filter(
    (champ) => champ.name.toLocaleLowerCase().indexOf(filterBy) !== -1
  );
};

export const filterByRol = (data, rol) => {
  return data.filter((champ) => champ.tags[0] === rol || champ.tags[1] === rol);
};
