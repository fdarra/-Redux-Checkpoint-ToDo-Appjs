import { ADD_TODO, DELET_TODO, DONE_TODO, EDIT_TODO } from "./ActionTypes";

const initialState = {
  todoList: [
    {
      id: Math.random(),
      task: "task 1",
      description: "Lorem ipsum dolor",
      isDone: false,
    },
    {
      id: Math.random(),
      task: "task 2",
      description: "Lorem ipsum dolor",
      isDone: true,
    },
  ],
};

const ToDoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DONE_TODO:
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };

    case DELET_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== payload),
      };

    case EDIT_TODO:
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === payload.id
            ? {
                ...todo,
                task: payload.task,
                description: payload.description,
                isDone: payload.isDone,
              }
            : todo
        ),
      };

      case ADD_TODO:
        return {
         ...state,
          todoList: [...state.todoList, payload],
        };

    default:
      return state;
  }
};
export default ToDoReducer;
