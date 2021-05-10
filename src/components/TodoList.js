import Todo from "./Todo";

import styled from "styled-components";
import { Container } from "../styles";

const TodoList = ({ todos }) => {
  return (
    <Container>
      <StyledTodoList>
        {todos.map((todo) => {
          return <Todo task={todo.task} key={todo.id} />;
        })}
      </StyledTodoList>
    </Container>
  );
};

const StyledTodoList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default TodoList;
