import './App.css'
import UserInfo from './UserInfo'

function App() {

  const user = {
    name: "John",
    age: 30
  }

  return (
    <UserInfo user={user} />
  )
}

export default App
