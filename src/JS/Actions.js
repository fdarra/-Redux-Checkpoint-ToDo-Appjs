import { ADD_TODO,EDIT_TODO,DELET_TODO, DONE_TODO } from "./ActionTypes";

export const AddTodo =({id,task,description,isDone}) =>{
    return {
        type: ADD_TODO,
        payload :{id,task,description,isDone},
        
    }
}
export const EditTodo =( {id,task,description,isDone}) =>{
    return {
        type: EDIT_TODO,
        payload:  {id,task,description,isDone}  // task:newTodo.task, description:newTodo.description, isDone:newTodo.isDone}  //  {id,task:newTodo.task, description:newTodo.description, isDone:newTodo.isDone}
        
    }
}
export const DeletTodo = (id) =>{
    return {
        type: DELET_TODO,
        payload: id
        
    }
}

export const Donetodo =(id) =>{
    return {
        type: DONE_TODO,
        payload: id
        
    }

}

