import axios from 'axios'
import {useContext, useEffect, useState} from 'react'
import {UserContext} from '../context/userContext'


const Dashboard = () => {
    // const {userState} = useContext(UserContext)
    // const [user, setUser] = userState
    const [ favImage, setFavImage] = useState([])

    const showImage = () => {
        console.log('dashboard')
       const user = localStorage.getItem("userId")

        axios.get(`${process.env.REACT_APP_BACKEND_URL}/images/save`, {
            headers: {
                Authorization: user
            }
        })
        .then((response) => {
            console.log(response.data)
            setFavImage(response.data.savedImage)
        })
    }
    useEffect(() => {
        showImage()
    }, [])

    return(
        <div>
            {
            favImage.map((images, index) => (
                <div key = {index} className = 'imageSection'>
                    <img className = 'images' src ={images.image}></img>
                </div>
            ))

            }
            </div>
    )
}




export default Dashboard
