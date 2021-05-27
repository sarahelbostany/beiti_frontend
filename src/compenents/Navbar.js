import { Link } from 'react-router-dom'
import {useContext} from 'react'
import {UserContext} from '../context/userContext'

const Navbar = (props)=>{
    const {userState} = useContext(UserContext)
    const [user,setUser] = userState
    // console.log(useContext(UserContext))




    return(



        <div className = 'page-header'>
            {user ? <>

        <Link to= '/home'>Home</Link>{' | '}
        <Link to= '/dashboard'>Dashboard</Link>
        <span className = 'logOutBtn'>
                <span className = 'logOut' onClick = {() => {
                    localStorage.removeItem('userId')
                    setUser(null)
                }}>Logout</span>
                </span>

        </>
        :
        <>
        <nav>
        <Link to= '/'>Welcome</Link>{' | '}
        <Link to= '/login'>Login</Link>{' | '}
         <Link to= '/signup'>Sign-up</Link>{' | '}
        </nav>
        </>

            }



        <nav className = 'logged-in-links'>

        </nav>
        </div>



    )
}

export default Navbar
