import TodoCard from "./TodoCard";

export default function TodoList(props) {
  // eslint-disable-next-line react/prop-types
  const { todos = [] } = props;

  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard {...props} key={todoIndex} index={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
