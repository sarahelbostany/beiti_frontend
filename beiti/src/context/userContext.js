import axios from "axios"



const { useState, createContext } = require("react")
const UserContext = createContext()
const UserProvider = (props) => {
    const [user, setUser] = useState({})
    const userState = [user, setUser]
    const fetchUser = async () => {
        const userId = localStorage.getItem('userId')
        console.log('hello ')
        if (userId) {
            try {
                const response = await axios.get(`${process.env.REACT_user_BACKEND_URL}/users/verify`, {
                    headers: {
                        Authorization: userId
                    }
                })
                setUser(response.data.user)
            } catch (error) {
                alert('user not found')
            }
        }
    }
    const state = {
        userState: userState,
        fetchUser: fetchUser
    }
    console.log('hello from user provider')
    console.log(state)
    return (
        <UserContext.Provider value={state}>
            {props.children}
        </UserContext.Provider>
    )
}
export {UserContext, UserProvider}
