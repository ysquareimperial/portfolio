import React, { useState } from 'react'
let initialCounter = [0, 0, 0]
export default function ReplacingItems() {
  const [counters, setCounters] = useState(initialCounter)
  function handleCounters(index) {
    const nextCounters = counters.map((c, i) => {
      if ((i = index)) {
        return c + 1
      } else {
        return c
      }
    })
    setCounters(nextCounters)
  }
  return (
    <div>
      <ul>
        {counters.map((counter, i) => (
          <li key={i}>
            {counter}
            <button
              onClick={() => {
                handleCounters(i)
              }}
            >
              click
            </button>
          </li>
        ))}
      </ul>
     
    </div>
  )
}
