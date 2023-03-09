import { useState } from "react"

export default function Child(){
    const [value,setValue]=useState("hello")
    return(
        <>
        
            <div>{value}</div>
        
        </>
    )
}