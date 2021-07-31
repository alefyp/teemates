export const filterByInput = (champions, searchTerm) => {
  const filterBy = searchTerm.toLowerCase();
  return champions.filter(
    (champ) => champ.name.toLocaleLowerCase().indexOf(filterBy) !== -1
  );
};

export const filterByRol = (data, rol) => {
  data.forEach((e) => {
    console.log(e.tags[0], rol);
    console.log(e.tags[0] === rol);
  });

  return data.filter((champ) => champ.tags[0] === rol || champ.tags[1] === rol);
};
