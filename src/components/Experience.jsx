import { useState } from 'react'
import Togglable from './Togglable'

const ExperienceList = ({ CVdata, onAdd, onRemove }) => {
  const [inputValue, setInputValue] = useState('')
  const [isAdding, setIsAdding] = useState(false)

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const val = inputValue.trim()
      if (val) onAdd(val)
      setInputValue('')
      setIsAdding(false)
    } else if (e.key === 'Escape') {
      setInputValue('')
      setIsAdding(false)
    }
  }

  return (
    <Togglable header='Experience'>
      <ul>
        {CVdata.experience.map((exp) => (
          <li key={exp.id}>
            {exp.text} <button onClick={() => onRemove(exp.id)}>remove</button>
          </li>
        ))}
      </ul>

      {isAdding && (
        <input
          autoFocus
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder='New experience...'
        />
      )}

      {!isAdding && (
        <button type='button' onClick={() => setIsAdding(true)}>
          + Add Experience
        </button>
      )}
    </Togglable>
  )
}

export default ExperienceList
