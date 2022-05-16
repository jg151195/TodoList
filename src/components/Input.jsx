import React from "react";

export default function Input({handleItemChange,item}){

    return(
        <input placeholder="Novo item" className="newTodo" name="item" onChange={handleItemChange} value={item.item}></input>
    )
}