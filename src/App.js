import React, { useState } from "react";
import GlobalStyle from "./components/GlobalStyle";
import TodoList from "./components/TodoList";

import TodoInput from "./components/TodoInput";

const App = () => {
  const [task, setTask] = useState("");

  const [todos, setTodos] = useState([]);

  return (
    <div className='App'>
      <GlobalStyle />
      <TodoInput
        setTask={setTask}
        task={task}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
