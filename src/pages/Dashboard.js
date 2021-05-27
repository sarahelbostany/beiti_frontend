import axios from 'axios'
import {useContext, useEffect, useState} from 'react'
import {UserContext} from '../context/userContext'


const Dashboard = () => {
    const {userState} = useContext(UserContext)
    const [user, setUser] = useState()
    const [ favImage, setFavImage] = useState([])

    const showImage = () => {
//localstorage.getItem(userId)
        axios.get(`${process.env.REACT_APP_BACKEND_URL}images/save`, {
            headers: {
                Authorization: user
            }
        })
        .then((response) => {
            console.log(response)
            setFavImage(response.data)
        })
    }
    useEffect(() => {
        showImage()
    }, [user])

    return(
        <div>hi</div>
    )
}




export default Dashboard
