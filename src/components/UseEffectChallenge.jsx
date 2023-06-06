import React, { useEffect, useState } from 'react'

export default function UseEffectChallenge() {

  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  }

  useEffect(() => {
    document.title = `You clicked ${count} times`
  }, [count])

  return (
   <>
    <button onClick={incrementCount}>Click me {count}</button>
   </>
  )
}
