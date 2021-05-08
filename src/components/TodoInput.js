import styled from "styled-components";

const TodoInput = () => {
  return (
    <StyledInput>
      <input type='text' placeholder='add new task' />
      <button>Add Task</button>
    </StyledInput>
  );
};

const StyledInput = styled.div`
  margin: 5rem 0rem 2rem 0rem;
  display: flex;
  justify-content: center;

  input {
    padding: 0.5rem 2rem;
  }

  button {
    margin-left: 2rem;
    padding: 1rem 2rem;
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
