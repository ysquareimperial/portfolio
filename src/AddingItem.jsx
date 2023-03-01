import React, { useState } from 'react'

export default function AddingItem() {
  let nextId = 0
  const [name, setName] = useState('')
  const [artists, setArtists] = useState([])
  const handleAddArtist = () => {
    setName('')
    setArtists([...artists, { id: nextId++, name: name }])
    // setArtists([
    //   { id: nextId++, name: name },
    //   ...artists, // Put old items at the end
    // ])
    // artists.push({ id: nextId++, name: name })
  }
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleAddArtist}>Add</button>
      <ul>
        {artists.map((item, index) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}
