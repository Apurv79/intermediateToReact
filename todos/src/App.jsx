
import { TodoProvider } from "./Contexts";
import { useEffect ,useState } from "react";
import { TodoForm } from "./Components";
import { TodoItems } from "./Components";


function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([...todos, {id : Date.now() , ...todo }]);
  };
  const updateTodo = (id, todo) => {
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id === id ? todo : prevTodo));
  };
  const removeTodo = (id) => {setTodos((prev)=>prev.filter((prevTodo)=>prevTodo.id !== id));};

  const toggleTodo = (id) => {
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id === id ? {...prevTodo , completed : !prevTodo.completed} : prevTodo));
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);  

  return (
    <TodoProvider value={{todos, addTodo , updateTodo , removeTodo , toggleTodo}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm /> 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo) => (
                            <TodoItems key={todo.id} todo={todo} className="w-full"/>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
