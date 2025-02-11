import React from 'react'
import NavBar from '../components/Navbar'
import MainContent from '../components/Main'


const Home=()=>{


    return(
        <>
        <NavBar/>
         <div styel={{overFlow:"scroll"}}>
         <MainContent/>
        <MainContent/>
        <MainContent/>
        <MainContent/>
        <MainContent/>
        <MainContent/>
        <MainContent/>
         </div>
        </>
    )
}

export default Home 