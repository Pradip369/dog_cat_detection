import { BASE_URL } from '../App';
import axios from 'axios';

export const getCatOrDog = (setLoader, images, setImages, checked, setHasMore, pageNumber, setPageNumber) => {
    setLoader(true);
    let imgType = checked ? "CAT" : "DOG"
    axios.get(BASE_URL + `/image_detection/cat_or_dog_image/?image_type=${imgType}&page=${pageNumber}`)
        .then(res => {
            setTimeout(() => {
                setImages(images.concat(res.data.results))
                if (res.data.next) {
                    setHasMore(true)
                    setPageNumber(pageNumber + 1)
                }
                else {
                    setHasMore(false)
                }
                setLoader(false)
            }, 200)
        })
        .catch((e) => {
            console.log(e.response.data)
            setHasMore(false)
            alert(e.response.data)
            setLoader(false)
        })
}