import './App.css'


function App() {

  let user = {
    name: "John",
    age: 30
  }

  return (
    <>
      <h1>안녕하세요, {user.name}님! 10년 뒤 당신은 {user.age + 10}살입니다.</h1>
    </>
  )
}

export default App
