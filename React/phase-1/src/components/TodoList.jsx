import { useState } from 'react'

function TodoList() {
    const [todos, setTodos] = useState([{ id: 1, text: "Learn React", completed: false }]);
    const [text, setText] = useState("");
    const [filter, setFilter] = useState("all");

    // Add todo
    function addTodo() {
        if (text.trim() === "") return;

        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false
        };

        setTodos([...todos, newTodo]);
        console.log("added todo", newTodo);
        setText("");
        console.log("todos", todos);
    }


    // Delete todo
    function deleteTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    // Toggle complete
    function toggleTodo(id) {
        setTodos(todos.map(todo => todo.id == id ? { ...todo, completed: !todo.completed } : todo));
    }

    // Filter todos
    const filteredTodos = todos.filter(todo => {
        if (filter === "active") {
            return !todo.completed;
        }
        if (filter === "completed") {
            return todo.completed;
        }

        return true;
    });


    return (<>
        <h1>Todo list</h1>

        <input value={text} onChange={e => setText(e.target.value)} placeholder='Enter one todo task' />

        <button onClick={addTodo}>Add</button>

        <div>
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("active")}>Active</button>
            <button onClick={() => setFilter("completed")}>Completed</button>
        </div>

        {filteredTodos.map(todo => {
            return <div key={todo.id}>
                <span onClick={() => toggleTodo(todo.id)}
                    style={{ textDecoration: todo.completed ? "line-through" : "none" }}
                >{todo.text}</span>

                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
        })}
    </>)
}

export default TodoList;