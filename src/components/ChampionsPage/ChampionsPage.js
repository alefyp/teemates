import { getAllChampions } from "../../api/dataDragonApi";

const ChampionsPage = () => {
  console.log("holongo", getAllChampions());
  return (
    <div>
      <h1>soy la página con todos los champs</h1>
    </div>
  );
};

export default ChampionsPage;
