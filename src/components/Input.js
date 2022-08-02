import './Input.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from '../store/actions/TodoActions'

const Input = () => {

    const [text, setText] = useState("")
    const dispatch = useDispatch()

    return (
        <div className="input-wrapper">
            <input
                onKeyPress={(e) => {
                    if (e.key === "Enter" && text.trim() !== "") {
                        dispatch(addTodo({id:new Date().getTime(),text,complete:false}))
                        setText("")
                    }
                }}
                value={text}
                onChange={(e) => {
                    setText(e.target.value)
                }} autoFocus type="text" placeholder="Create New Todo..." />
        </div>
    )
}

export default Input;