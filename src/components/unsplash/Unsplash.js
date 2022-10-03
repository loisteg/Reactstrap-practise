import { useState, useEffect } from "react";
import useHttpHook from "../../services/useHttpHook";
import Spinner from "../spinner/Spinner";

import UnsplashCard from "./unsplashCard/UnsplashCard";

const Unsplash = () => {
  const { getPhotos } = useHttpHook();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotos().then((data) => setPhotos(data));
  }, []);

  let content = photos.map((photo) => (
    <UnsplashCard photo={photo} key={photo.id} />
  ));

  return (
    <div className="d-flex flex-wrap justify-content-center align-items-start">
      {photos.length === 0 ? <Spinner /> : content}
    </div>
  );
};

export default Unsplash;
