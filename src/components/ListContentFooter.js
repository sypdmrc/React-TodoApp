import './ListContentFooter.css'
import { useSelector, useDispatch } from 'react-redux'
import { setTodoFilter } from '../store/actions/TodoActions'

const ListContentFooter = () => {
    const { todoList, todoFilter } = useSelector((state) => state.todo)
    const dispatch = useDispatch()
    return (
        <div className="content-footer">
            <div className="left-item">
                {todoList.filter((x) => !x.complete).length} Kaldı
            </div>
            <div onClick={() => {
                dispatch(setTodoFilter('all'))
            }} className={`menu-item ${todoFilter === "all" ? "active" : ""}`}>
                Tümü
            </div>
            <div onClick={() => {
                dispatch(setTodoFilter('complete'))
            }} className={`menu-item ${todoFilter === "complete" ? "active" : ""}`}>
                Tamamlanan
            </div>
        </div>
    )
}

export default ListContentFooter;