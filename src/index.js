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
 * Represents a todo.
 * @typedef {Object} Todo
 * @property {number} id - 할 일 리스트 아이디
 * @property {string} content - 할 일 내용
 * @property {boolean} isDone - 할 일 완료 여부
 * @property {string} category - 할 일 분류
 * @property {string[]} [tags] - 할 일 태그 리스트
 */

/**
 * Represents a todo.
 * @param {number} id - 할 일 리스트 아이디
 * @param {string} content - 할 일 내용
 * @param {boolean} isDone - 할 일 완료 여부
 * @param {string} category - 할 일 분류
 * @param {string[]} [tags] - 할 일 태그 리스트
 *
 */
function CREATE(id, content, isDone, category, tags) {}

/**
 * Represents a todo.
 * @param {number} [id] - 아이디가 있으면 특정 아이디 조회 , 없으면 모든 할 일 조회
 * @returns {Todo|Todo[]} - 아이디가 있으면 특정 할 일 리턴 , 없으면 모든 할 일 리스트 리턴
 */
function READ() {}

/**
 * Represents a todo.
 * @param {string} id - 아이디를 받아서 해당 아이디를 제외한 모든 할 일 수정 가능
 * @param {string} [content] - 할 일 내용 수정 가능
 * @param {boolean} [isDone] - 할 일 완료 여부 수정 가능
 * @param {string} [category] - 할 일 카테고리 수정 가능
 * @param {string[]} [tags] - 특정 할 일 태그 수정 가능
 */
function UPDATE(id, content, isDone, category, tags) {}

/**
 * Represents a todo.
 * @param {number} [id] - 아이디를 받아서 특정 할 일 삭제 가능 , 없으면 모든 할 일 삭제 가능
 * @param {string[]} [tags] - 특정 할 일 특정 태그 삭제 가능 , 모든 태그 삭제 가능
 */
function DELETE(id, tags) {}
