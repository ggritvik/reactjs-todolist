
export default function TodoInput(props) {

    // eslint-disable-next-line react/prop-types
    const {handleAddTodo , todoValue, setTodoValue} = props

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
          handleAddTodo(todoValue); // Add the todo when Enter key is pressed
          setTodoValue(''); // Clear the input field after adding
        }
      };

    return (
        <header>
            <input value={todoValue} 
            onChange={(e) => {
                setTodoValue(e.target.value)}} 
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleAddTodo(todoValue); // Add the todo when Enter key is pressed
                      setTodoValue(''); // Clear the input field after adding
                    }}}
                placeholder="What needs to be done?..." />
            
            <button onClick={() => {
                handleAddTodo(todoValue)    
                setTodoValue('')
                }}>Add
            </button>
        </header>
    )
}