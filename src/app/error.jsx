"use client"
import React from "react"

function Error({error, retry}){
    console.log(error)
return <div className= "errorCont">
    <h2>{error.message}</h2>
    <button onClick={() => retry()}>Click To Retry</button>
</div>

} 
 export default Error;