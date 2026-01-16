import './App.css'
import UserInfo from './UserInfo'

interface UserInfoProps {
  id: number;
  name: string;
  age: number;
};

function App() {

  const users = [
    {
      id: 1,
      name: "John1",
      age: 31
    },
    {
      id: 2,
      name: "John2",
      age: 32
    },
    {
      id: 3,
      name: "John3",
      age: 33
    },
  ]

  return (
    <div>
      {users.map(user => (
        <UserInfo key={user.id} user={user} />
      ))}
    </div>
  )
}

export default App
