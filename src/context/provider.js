import { imagecontext } from "./contex";
import { useState } from "react";
import Unsplash, {toJson} from "unsplash-js";
export const ImageProvider = (props) => {
    const [image, setImages] = useState([]); 
    const [search, setSearch] = useState("");
    const unsplash = new Unsplash({
        accessKey: process.env.REACT_APP_ACCESSKEY
    });
    

    const searchPhotos = async (e, search) =>{
        e.preventDefault();
        unsplash.search
        .photos(search,1,50)
        .then(toJson)
        .then((json) => {
            console.log(json.results)
            setImages(json.results);
        });
    
    }    

const value = {
    search,
    image,
    setSearch,
    setImages,
    searchPhotos,
  };
  return (
    <imagecontext.Provider value={value}>
      {props.children}
    </imagecontext.Provider>
  );
};
  
    