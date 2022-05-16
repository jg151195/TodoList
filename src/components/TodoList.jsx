import React from "react";
import { BsTrashFill } from 'react-icons/bs';

export default function TodoList({ lista, setList }) {

    function handleListChange(e) {

        const { id, checked } = e.target
        console.log(checked);
        setList(prevList => {
            const newList = prevList.map((item) => {
                if (item.id == id) {
                    item.done = checked
                }
                return item
            });
            console.log(newList);
            return newList
        })
    }

    function handleRemove(id) {
        setList(prevList => {
            prevList = prevList.filter((prevListId) => {
                return prevListId.id !== id
            })
            return prevList
        })
    }

    const fullList = lista.map((todo, index) => {

        const styles = {
            textDecoration: todo.done ? "line-through" : "none"
        }
        return (
            <div className="item-container" key={index}>
                <span style={styles}>{todo.item}</span>
                <div className="options">
                    <label className="checkbox-container">
                        <input className="checkbox" name="done" type="checkbox" id={todo.id} checked={todo.done} onChange={(e) => handleListChange(e)}></input>
                        <div class="checkmark"></div>
                    </label>
                    <label htmlFor={todo.id}> Done ?</label>
                    <button className="remove-button" onClick={() => handleRemove(todo.id)}><BsTrashFill /></button>
                </div>
            </div>
        )
    })

    return (
        <div className="list-container">
            {fullList}
        </div>

    )
}