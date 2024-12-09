export default function TodoCard(props) {
  
  // eslint-disable-next-line react/prop-types
  const { children, handleDeleteTodo, index, handleEditTodo } = props;

  return (
    <li className="todoItem">
      {children}
      <div className="actionContainer">
        <button
          onClick={() => {
            handleEditTodo(index);
          }}
        >
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
        <button
          onClick={() => {
            handleDeleteTodo(index);
          }}
        >
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}