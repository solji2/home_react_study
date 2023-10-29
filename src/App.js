import { useCallback } from "react";
import "./App.css";

import Todos from "./Todos";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New York"]);
  }, [todos]);

  return (
    <div>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count:{count}
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default App;
