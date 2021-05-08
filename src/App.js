import GlobalStyle from "./components/GlobalStyle";
import TodoList from "./components/TodoList";

import TodoInput from "./components/TodoInput";

function App() {
  const todos = [
    "Walk the dog",
    "Clean the room",
    "Wash cloths",
    "Learn something new",
    "Go for drive",
  ];
  return (
    <div className='App'>
      <GlobalStyle />
      <TodoInput />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
