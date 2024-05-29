import React, { useState } from 'react'

const App = () => {
  const [input, setInput] = useState('')

  const onChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <>
      <input onChange={onChange} value={input} />{input}
    </>
  )
}

export default App