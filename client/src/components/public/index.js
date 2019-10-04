import React from 'react'
import Header from './headers'

const PublicMainView = (props) =>{
    return(
        <>
        <Header />
        <button onClick={()=>props.logIn(true)}>Toggle Logged In</button>
        </>
    )
}

export default PublicMainView;