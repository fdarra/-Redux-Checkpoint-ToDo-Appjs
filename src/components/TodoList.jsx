import React from 'react'
import TodoModel from './TodoModel'
import { useSelector } from 'react-redux'


const TodoList = () => {
    const todoList = useSelector(state =>  state.todoList );

  return (
    <div>
{todoList.map((todo) => (<TodoModel todo={todo} key={todoList.id}/>)) }
      


    </div>
  )
}

export default TodoList