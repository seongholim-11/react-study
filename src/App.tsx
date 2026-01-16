import React, { useState } from "react"

function App() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <input type="text" value={inputValue} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)} />
      <p>입력된 값: [{inputValue}]</p>
    </div>
  )
}

export default App
