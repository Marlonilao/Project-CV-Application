import { useState } from 'react'
import Togglable from './Togglable'

const SkillsList = ({ CVdata, onAdd, onRemove }) => {
  const [skill, setSkill] = useState('')
  const [isAdding, setIsAdding] = useState(false)

  const handleInputChange = (e) => {
    setSkill(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const skill = skill.trim()
      if (skill) onAdd(skill)
      setSkill('')
      setIsAdding(false)
    } else if (e.key === 'Escape') {
      setSkill('')
      setIsAdding(false)
    }
  }

  return (
    <Togglable header='Skills'>
      <ul>
        {CVdata.skills.map((sk) => (
          <li key={sk.id}>
            <p>
              {sk.text}{' '}
              <button type='button' onClick={() => onRemove(sk.id)}>
                remove
              </button>
            </p>
          </li>
        ))}
      </ul>

      {isAdding && (
        <>
          <input
            autoFocus
            value={skill}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder='Skill...'
          />
          <button
            type='button'
            onClick={() => {
              onAdd(skill)
              setSkill('')
            }}
          >
            add
          </button>
        </>
      )}

      {!isAdding && (
        <button type='button' onClick={() => setIsAdding(true)}>
          + Add skill
        </button>
      )}
    </Togglable>
  )
}

export default SkillsList
