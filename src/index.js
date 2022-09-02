/*
필수 요구사항
아래의 Todo 앱 요구사항을 참고하여

필요한 데이터를 모두 모델링한다.
사용되는 모든 함수를 선언부만 만든다.
함수 및 클래스의 내부는 구현하지 않습니다.
JSDoc을 활용해 문서화한다.
GitHub Page를 활용해 JSDoc 정적 페이지를 배포한다.


Todo {
  아이디(required),
  내용(required),
  완료여부(required),
  카테고리(required),
  태그들(optional),
}

*/

/**
 * 할일
 * @typedef {Object} Todo
 * @property {number} id - The id of the todo.
 * @property {string} content - The content of the todo.
 * @property {boolean} isDone - The isDone of the todo.
 * @property {string} category - The category of the todo.
 * @property {string[]} [tags] - The tags of the todo.
 */

/**
 * Represents a todo.
 * @param {number} id - The id of the todo.
 * @param {string} content - The content of the todo.
 * @param {boolean} isDone - The isDone of the todo.
 * @param {string} category - The category of the todo.
 * @param {string[]} [tags] - The tags of the todo.
 *
 */
function CREATE(id, content, isDone, category, tags) {}

/**
 * Represents a todo.
 * @param {number} [id] - The id of the todo.
 * @returns {Todo|Todo[]} if id in Param return Todo , else return Todos
 */
function READ() {}

/**
 * Represents a todo.
 * @param {string} [content] - The content of the todo.
 * @param {boolean} [isDone] - The isDone of the todo.
 * @param {string} [category] - The category of the todo.
 * @param {string[]} [tags] - The tags of the todo.
 *
 */
function UPDATE(content, isDone, category, tags) {}

/**
 * Represents a todo.
 * @param {number} id - The id of the todo.
 * @param {string} content - The content of the todo.
 * @param {string[]} [tags] - The tags of the todo.
 *
 */
function DELETE(id, content, tags) {}
