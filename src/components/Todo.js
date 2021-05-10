import styled from "styled-components";

const Todo = ({ task, id, todos, setTodos }) => {
  const onDeleteHandler = (e) => {
    const filteredTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos([...filteredTodos]);
  };

  const onCompleteHandler = (e) => {
    console.log(e.target.parentElement.parentElement.children[0]);
    e.target.parentElement.parentElement.children[0].classList.add("completed");
  };
  return (
    <StyledTodo>
      <p>{task}</p>
      <div className='controls'>
        <i className='far fa-check-circle edit' onClick={onCompleteHandler}></i>
        <i className='far fa-trash-alt delete' onClick={onDeleteHandler}></i>
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
  p.completed {
    text-decoration-line: line-through;
    text-decoration-color: #bb3838;
  }

  i {
    font-size: 2rem;
    padding-left: 1rem;
    cursor: pointer;
  }

  i.edit {
    color: #3da35d;

    &:hover {
      color: #33854d;
    }
  }

  i.delete {
    color: #d62828;

    &:hover {
      color: #ac1515;
    }
  }

  &:hover {
    background-color: #333138;
  }
`;

export default Todo;
