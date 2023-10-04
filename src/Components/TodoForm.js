import React, { useState } from "react";
import {
  FormGroup,
  InputGroup,
  Button,
  Form,
  Input,
  Container,
  InputGroupAddon
} from "reactstrap";
import { v4 } from "uuid";

const TodoForm = ({ addTodos }) => {
  const [todoString, setTodoString] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoString === "") {
      return alert("Enter the value");
    }
    const todo = {
      todoString,
      id: v4(),
    };
    addTodos(todo);
    setTodoString("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Enter the string "
            // addonType="prepend"
            value={todoString}
            onChange={(e) => setTodoString(e.target.value)}
          />
          <Button color="success">Add todo</Button>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default TodoForm;
