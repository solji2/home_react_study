import { useCallback } from "react";
import "./App.css";

import Todos from "./Todos";
import { useState } from "react";
import Timer from "./Timer";
import Info from "./info";

function App() {
  // const [count, setCount] = useState(0);
  // const [todos, setTodos] = useState([]);

  // const increment = () => {
  //   setCount((c) => c + 1);
  // };

  // const addTodo = useCallback(() => {
  //   setTodos((t) => [...t, "New York"]);
  // }, [todos]);

  // return (
  //   <div>
  //     <Todos todos={todos} addTodo={addTodo} />
  //     <hr />
  //     <div>
  //       Count:{count}
  //       <button onClick={increment}>+</button>
  //     </div>
  //   </div>
  // );
  return (
    <div>
      <Info />
    </div>
  );
}

export default App;
