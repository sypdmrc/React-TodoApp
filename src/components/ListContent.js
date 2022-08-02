import './ListContent.css'
import React, { useState, useEffect } from 'react'
import ListContentFooter from './ListContentFooter'
import { useSelector } from 'react-redux'
import ListItem from './ListItem'



const ListContent = () => {

    const { todoList, todoFilter } = useSelector((state) => state.todo)
    const [list, setList] = useState([])

    useEffect(() => {
        if (todoFilter === "all") {
            setList(todoList)
            return
        }
        setList(todoList.filter((x) => x.complete))
    }, [todoList, todoFilter])


    return (
        <div className="item-content-wrapper">
            <div className="item-content">
                {list.length < 1 && <div className="text-gray-700 font-bold text-center capitalize">henüz bir eleman mevcut değil</div>}

                {list.map((x) => {
                    return (
                        <ListItem key={x.id} item={x} className={x.complete ? "completed" : ""} />
                    )
                })}
            </div>
            <ListContentFooter />
        </div>
    )
}

export default ListContent;