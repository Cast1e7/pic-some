import Photo from "../components/Photo"
import {getClass} from "../utils"
import { PhotosContext } from "../PhotosContext"
import { useContext } from "react"

export default function Photos() {
    const {allPhotos} = useContext(PhotosContext)

    const photosElement = allPhotos.map((photo,i) => 
        <Photo key={photo.id} img={photo} className={getClass(i)}/>
        )

    return (
        <main className="photos">
            {photosElement}
        </main>
    )
}
