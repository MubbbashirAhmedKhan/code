// import { useSelector, useDispatch } from 'react-redux'
// import { useParams } from 'react-router-dom';
// import { getUser, getAllUsers, sendMessage } from '../store/action'
// import { useEffect, useState } from 'react';

// function Home() {
//     const { id } = useParams()
//     const user = useSelector(state => state.user)
//     const dispatch = useDispatch()

// useEffect(() => {
//     dispatch(getUser(id))
//     dispatch(getAllUsers())
// }, [])

// const send_message = () => {
//     dispatch(sendMessage(message, user, currentChat))
// }

//     return (
//         <div>
//             <h1>Home</h1>
//         </div>
//     )
// }

// export default Home;

import react from 'react';




import Card from './cards/cards';
import Navbar from './Navbar/Nav';
import Footer from './Navbar/footer';
import Slider from './slider';


function Home() {
    return (
        <div>
            <div className="cont">
                <h1>Hotel management</h1>

                <div><Navbar /></div>
                <div>< Slider/></div>
                <div><Card /></div>
                <div><Footer /></div>



               

            </div>
        </div>



    )
}



export default Home;
