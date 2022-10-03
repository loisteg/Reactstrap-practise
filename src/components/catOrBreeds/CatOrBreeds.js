import { useEffect, useState } from "react";
import useHttpHook from "../../services/useHttpHook";

import CatFact from "./catFact/CatFact";
import BreedsTable from "./breedsTable/BreedsTable";
import Spinner from "../spinner/Spinner";

const CatOrBreeds = () => {
  const { getFactOrBreeds } = useHttpHook();
  const [catFact, setCatFact] = useState("");
  const [breeds, setBreeds] = useState([]);

  const changeTitle = () => {
    getFactOrBreeds("cat").then((data) => setCatFact(data));
  };

  useEffect(() => {
    getFactOrBreeds("cat").then((data) => setCatFact(data));
    getFactOrBreeds("breeds").then((data) => setBreeds(data));
  }, []);

  return (
    <div>
      {catFact.length === 0 ? (
        <Spinner />
      ) : (
        <CatFact title={catFact} changeTitle={changeTitle} />
      )}
      {breeds.length === 0 ? <Spinner /> : <BreedsTable breeds={breeds} />}
    </div>
  );
};

export default CatOrBreeds;
