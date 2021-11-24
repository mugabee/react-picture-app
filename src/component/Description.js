import reactDom from "react-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useContext, useState, useEffect } from "react";
import { imagecontext } from "../context/contex";


const Description = () => {
    const {id} = useParams();
    const { image, setImages, searchPhotos } = useContext(imagecontext);
    const [selected,setSelected] = useState([]);
    
    function getImageDetails(){
        const selectedImage = image.filter((image)=>image.id ===id)
        console.log(selected[0])
       return selectedImage
        

    }
    useEffect(() => {
        if(id && id !== null){
            const image=getImageDetails();
            setSelected(image)
        }
    }, [selected])
    

    return (
        <div>
         hello
            
        </div>
    )
}

export default Description
