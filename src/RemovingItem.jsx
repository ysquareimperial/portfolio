import React, { useState } from 'react'
let studentsList = [
  { id: 1, name: 'mike' },
  { id: 2, name: 'sani' },
]
export default function RemovingItem() {
  const [students, setStudents] = useState(studentsList)
  return (
    <div>
      <ul>
        {students.map((item, index) => (
          <li key={item.id}>
            {item.name}
            <button
              onClick={() =>
                setStudents(students.filter((a) => a.id !== item.id))
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
