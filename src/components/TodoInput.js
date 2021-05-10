import React from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

const TodoInput = ({ setTask, task, setTodos, todos }) => {
  const onInputTaskHandler = (e) => {
    setTask(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    setTodos([...todos, { task: task, completed: false, id: uuidv4() }]);
    setTask("");
  };

  return (
    <StyledInput>
      <form onSubmit={onSubmitHandler}>
        <input
          name='task'
          type='text'
          placeholder='add new task'
          onChange={onInputTaskHandler}
          value={task}
        />
        <button>Add Task</button>
      </form>
    </StyledInput>
  );
};

const StyledInput = styled.div`
  margin: 5rem 0rem 2rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    padding: 0.5rem 2rem;
  }

  button {
    margin-left: 2rem;
    padding: 0.5rem 2rem;
    background-color: #3da35d;
    border: none;
    border-radius: 3px;
    color: #fff;
    font-size: 1.9rem;
    cursor: pointer;
    transition: background-color 1s ease-in-out;

    &:hover {
      background-color: #33854d;
    }
  }
`;

export default TodoInput;
