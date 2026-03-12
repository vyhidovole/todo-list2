/**
 * @typedef {{title: String, isCompleted: Boolean, icon: String, category: String, author: Object}} Todo
 *
 * @param {object} data
 */
export function createTodo(data) {
  return  {
    title: data.title || "The title from data",
    isCompleted:  data.isCompleted || false,
    icon: data.isCompleted ? "✅" : "⏳",
    category:  data.category || "Uncategorized",
    author: {
      firstName:  data.author?.firstName || "Unknown",
      lastName:  data.author?.lastName || "User"
    }
  }
}

/**
 * Добавляет задачу в массив задач.
 * @param {Todo[]} todos - Массив существующих задач
 * @param {Todo} todo - Новая задача
 * @returns {Todo[]} Обновлённый массив задач
 */
export function addTodo(todos, todo) {
  return [...todos, todo]; // Новый массив, без мутирования
}


/**
 * Возвращает количество задач.
 * @param {Todo[]} todos - Массив задач
 * @returns {number} Количество задач
 */
export function countTodos(todos) {
  return todos.length
}

/**
 * Возвращает заголовок первой задачи.
 * @param {Todo[]} todos - Массив задач
 * @returns {string | undefined} Заголовок первой задачи или undefined, если массив пуст
 */
export function firstTodoTitle(todos) {
  return todos.length > 0 ? todos[0].title : undefined;
}
/**
 * Возвращает заголовок последней задачи.
 * @param {Todo[]} todos - Массив задач
 * @returns {string | undefined} Заголовок последней задачи или undefined, если массив пуст
 */
export function lastTodoTitle(todos) {
  return todos.length > 0 ? todos[todos.length - 1].title : undefined;
}


/**
 * @param {Todo[]} todos
 */
export function exportTitles(todos) {
  return todos.map(todo => todo.title)
  }

