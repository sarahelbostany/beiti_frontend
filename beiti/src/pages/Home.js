import axios from 'axios'
import { useState, useEffect } from 'react'


const Home = () => {

    const [images, setImages] = useState([])

    const fetchImages = async () => {
        const id = localStorage.getItem('userId')
        console.log('id', id)

        const showImage = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/images/all/`)
                setImages(showImage.data)
                // ((response)=>{
                //     setImages(response.data)
                // })
                console.log('SHOW ALL IMAGES',images)
                // .catch((error)=>{
                //     console.log(error);
                // })
    }
    // useEffect(fetchImages, [])
    useEffect(() => {
        fetchImages()
    }, [])


    const favImage = () => {
        const id = localStorage.getItem('userId')


        axios.post(`${process.env.REACT_APP_BACKEND_URL}/images/save`, {id:id},{
            headers: {
                Authorization: id
            }
        })
        .then((response)=> {
            console.log('SAVED IMAGES',response)
        })

    }

    return (
        <div>
        <div className= 'imageContainer'>
        <div className = 'imageLayout'>
         {images.map(val => { return (
             <div>
                 <img src={val.image }/>
                 <span className = 'favImage' onClick ={() => favImage(val.id)}>❤️</span>

                 </div>



         )} )}


        </div>
        </div>
        </div>
    )
}

export default Home
