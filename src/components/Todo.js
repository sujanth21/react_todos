import styled from "styled-components";

const Todo = ({ task }) => {
  return (
    <StyledTodo>
      <p>{task}</p>
      <div className='controls'>
        <i className='far fa-edit edit'></i>
        <i className='far fa-trash-alt delete'></i>
      </div>
    </StyledTodo>
  );
};

const StyledTodo = styled.div`
  border: 2px solid #1098f7;
  border-radius: 3px;
  padding: 1rem 2rem;
  margin-top: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  p {
    padding-right: 2rem;
    cursor: pointer;
    color: #fff;
  }

  i {
    font-size: 2rem;
    padding-left: 1rem;
    cursor: pointer;
  }

  i.edit {
    color: #3da35d;
  }

  i.delete {
    color: #d62828;
  }

  &:hover {
    background-color: #333138;
  }
`;

export default Todo;
