import {
  createTodo,
  addTodo,
  countTodos,
  exportTitles,
  firstTodoTitle,
  lastTodoTitle
} from "../src/js/todo.js";

describe("createTodo", () => {
  it("should create a todo object with the correct properties", () => {
    const data = {
      todoTitle: "Write code",
      completed: true,
      chosenCategory: "programming",
      user: { first: "John", last: "Doe" }
    };
    const todo = createTodo(data);
    expect(todo).toEqual({
      title: "Write code",
      isCompleted: true,
      icon: "✅",
      category: "programming",
      author: { firstName: "John", lastName: "Doe" }
    });
  });
});

describe("addTodo", () => {
  it("should add a todo to the list of todos", () => {
    const todos = [{ title: "Take a walk" }];
    const todo = { title: "Write code" };
    const updatedTodos = addTodo(todos, todo);
    expect(updatedTodos).toEqual([
      { title: "Take a walk" },
      { title: "Write code" }
    ]);
  });
});

describe("countTodos", () => {
  it("should return the number of todos in the list", () => {
    const todos = [{ title: "Take a walk" }, { title: "Write code" }];
    const count = countTodos(todos);
    expect(count).toBe(2);
  });
});

describe("firstTodoTitle", () => {
  it("should return the title of the first todo in the list", () => {
    const todos = [{ title: "Take a walk" }, { title: "Write code" }];
    const title = firstTodoTitle(todos);
    expect(title).toBe("Take a walk");
  });
});

describe("lastTodoTitle", () => {
  it("should return the title of the last todo in the list", () => {
    const todos = [{ title: "Take a walk" }, { title: "Write code" }];
    const title = lastTodoTitle(todos);
    expect(title).toBe("Write code");
  });
});

describe("exportTitles", () => {
  it("should return an strings of todo titles", () => {
    const todos = [{ title: "Take a walk" }, { title: "Write code" }];
    const titles = exportTitles(todos);
    expect(titles).toEqual(["Take a walk", "Write code"]);
  });
});
