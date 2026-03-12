import {
  createTodo,
  addTodo,
  countTodos,
  exportTitles,
  firstTodoTitle,
  lastTodoTitle,
} from "./todo.js";

/**
 * Форма для добавления новых задач.
 * @type {HTMLFormElement}
 */
let form = document.querySelector("#todo-list-form");

/**
 * Поле ввода заголовка задачи.
 * @type {HTMLInputElement}
 */
let title = document.querySelector("#todo-title");

/**
 * Флажок для указания завершенности задачи.
 * @type {HTMLInputElement}
 */
let completed = document.querySelector("#todo-completed");

/**
 * Поле выбора категории задачи.
 * @type {HTMLSelectElement}
 */
let category = document.querySelector("#todo-category");

/**
 * Список для отображения задач.
 * @type {HTMLUListElement}
 */
let list = document.querySelector("#todo-list");

/**
 * Массив задач.
 * @type {Todo[]}
 */
let todos = [];

/**
 * Отображает задачи в списке.
 *
 * @param {Todo[]} todos - Массив задач.
 */
function render(todos) {
  list.innerHTML = `<h3>Todos (${countTodos(todos)})</h3>`;

  todos.forEach(function (todo) {
    list.insertAdjacentHTML(
      "beforeend",
      `<li><div class="card">${todo.icon} &nbsp;<strong>${todo.title}</strong> -
       by ${todo.author.firstName} ${todo.author.lastName} in ${todo.category}</div></li>`
    );
  });
}

/**
 * Обработчик события отправки формы для добавления задачи.
 *
 * @param {Event} event - Объект события.
 */
form.addEventListener("submit", (event) => {
  event.preventDefault();

  
  const todoData = {
    title: title.value.trim(), // убираем пробелы
    isCompleted: completed.checked, // ✅ boolean, а не строка
    category: category.value || "Uncategorized", // дефолт, если не выбрано
    author: {
      firstName: "Sam", 
      lastName: "Blue",
    },
  };

  // ✅ Проверка на пустой заголовок
  if (!todoData.title) {
    alert("Заголовок задачи не может быть пустым!");
    return;
  }

  const todo = createTodo(todoData);
  todos = addTodo(todos, todo); // ✅ иммутабельное обновление

  render(todos);

  // Сброс формы
  title.value = "";
  completed.checked = false;

  // Логи для отладки
  console.log("First todo title:", firstTodoTitle(todos));
  console.log("Last todo title:", lastTodoTitle(todos));
  console.log("Exported titles:", exportTitles(todos));
});
