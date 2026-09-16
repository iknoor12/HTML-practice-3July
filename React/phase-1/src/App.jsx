import './App.css'
import {Button} from './components/Button' 
import { UserProfile } from './components/UserProfile';

function App() {
  const name = "Iknoor";
  function handleClick () {
    console.log("Click clicked!");
  }

  return (
    <>
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
    <Button label="Follow" onclick={handleClick} variant="Primary"/>

    <UserProfile name="Iknoor" avatarUrl="ceramic-handmade-pottery.avif" bio="the art of pottery"/>

    </>
  )
}

export default App
