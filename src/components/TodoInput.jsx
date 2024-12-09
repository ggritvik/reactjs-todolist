
export default function TodoInput(props) {

    // eslint-disable-next-line react/prop-types
    const {handleAddTodo , todoValue, setTodoValue} = props

    return (
        <header>
            <input value={todoValue} 
            onChange={(e) => {
                setTodoValue(e.target.value)}} 
                placeholder="What needs to be done?..." />
            
            <button onClick={() => {
                handleAddTodo(todoValue)
                setTodoValue('')
                }}>Add
            </button>
        </header>
    )
}