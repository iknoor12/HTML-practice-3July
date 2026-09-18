import './App.css'
import { Button } from './components/Button'
import { UserProfile } from './components/UserProfile';
import { TodoList } from './components/TodoList'
import { useState } from 'react';

function App() {
  // PHASE-1
  // DAY-1
  const name = "Iknoor";


  // DAY-2
  function handleClick() {
    console.log("Click clicked!");
  }


  // DAY-3
  const products = [
    { id: 1, name: "Laptop", price: 50000, inStock: true },
    { id: 2, name: "Phone", price: 20000, inStock: false },
    { id: 3, name: "Keyboard", price: 2000, inStock: true },
    { id: 4, name: "Mouse", price: 1000, inStock: false },
    { id: 5, name: "Monitor", price: 15000, inStock: true },
    { id: 6, name: "Headphones", price: 3000, inStock: true }
  ];

  const students = [
    { id: 1, name: "Aman", passed: true },
    { id: 2, name: "Riya", passed: false },
    { id: 3, name: "Karan", passed: true },
    { id: 4, name: "Simran", passed: true },
    { id: 5, name: "Rahul", passed: false }
  ];


  // PHASE-2 DAY-1
  const [ count, setCount ] = useState(0);

  function increament(){
    setCount( count + 1);
  }

  function decreament(){
    setCount(count - 1);
  }

  function reset(){
    setCount(0);
  }


  const [ dark, setDark ] = useState(false);

  function toggle(){
    setDark(!dark);
  }

  return (
    <div style={{
      backgroundColor: dark ? "black": "white",
      color: dark ? "white": "black",
    }}>
      {/* PHASE-1 */}
      {/* DAY-1 */}
      <div>
        <h1>Welcome to React</h1>
        <h2>My name is {name}</h2>
        <p>
          I am learning React and building applications using JavaScript and React.
        </p>
        <p>Current Year: {new Date().getFullYear()}</p>
      </div>


      {/* DAY-2 */}
      <Button label="Follow" onclick={handleClick} variant="Primary" />

      <UserProfile name="Iknoor" avatarUrl="ceramic-handmade-pottery.avif" bio="the art of pottery" />


      {/* DAY-3 */}
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h4>{product.id}. {product.name}</h4>
            <p>₹{product.price}</p>

            {!(product.inStock) && (<span>Out of Stock</span>)}
          </div>
        ))}
      </div>

      <div>
        {students.filter((student) => student.passed)
          .map((student) => (
            <p key={student.id}>{student.id}. {student.name} - {student.passed ? "pass": "fail"}</p>
          ))}
      </div>


      {/* PHASE-2 */}
      {/* DAY-1 */}
      <div>
        <h2>{count}</h2>

        <button onClick={increament}>Increament</button>
        <button onClick={decreament}>Decreament</button>
        <button onClick={reset}>Reset</button>
      </div>


      <button onClick={toggle}>Toggle Button</button>


      {/* DAY-2 */}
      <TodoList />

    </div>
  )
}

export default App
