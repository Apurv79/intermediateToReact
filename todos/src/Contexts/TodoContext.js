import { createContext , useContext } from "react";
export const TodoContext = createContext({
    todos:[{
        id:1,
        todo :"todo message",
        completed : false
    }],
    addTodo:(todo)=>{},
    updateTdodo:(id , todo)=>{},
    removeTodo:(id)=>{},
    toggleTodo:(id)=>{}
});

export const useTodo=()=>{
    return useContext(TodoContext);
}
export const TodoProvider = TodoContext.Provider;