import React from "react";

export default function Button({setList, item, setItem}){

    function sendItem(){

        setItem(prevItem => {
            return{
                ...prevItem,
                id: Math.round(Math.random(10000)*10000)
            }            
        })

        setList((prevList)=>{
            return [...prevList, item]
        })
    }

    return(
        <button className="sendItem" onClick={sendItem}>Add</button>
    )
}