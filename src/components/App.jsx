import React, { useState } from "react";
import Input from "./Input";
import TodoList from "./TodoList";
import Button from "./Button";

export default function App() {
    const [list, setList] = useState([]);
    const [item, setItem] = useState({
        item: '',
        id: Math.round(Math.random(10000)*10000)
    })


    function handleItemChange(ev){
        const {value} = ev.target
        setItem((prevItem) => {
            return {
                ...prevItem,
                item: value
            }
        })
    }


    return (
        <div className="container">
            <Input handleItemChange={handleItemChange} item={item} />
            <Button item={item} setList={setList} setItem={setItem} />
            <TodoList lista={list} setList={setList}/>
        </div>
    )
}