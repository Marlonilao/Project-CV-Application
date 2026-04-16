import { useState } from 'react'
import Togglable from './Togglable'

const EducationList = ({ CVdata, onAdd, onRemove }) => {
  const [education, setEducation] = useState({
    school: '',
    degree: '',
    year: '',
  })
  const [isAdding, setIsAdding] = useState(false)

  const handleInputChange = (e) => {
    setEducation((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <Togglable header='Education'>
      <ul>
        {CVdata.education.map((ed) => (
          <li key={ed.id}>
            <p>{ed.details.year}</p>
            <p>{ed.details.school}</p>
            <p>{ed.details.degree}</p>
            <p>
              <button type='button' onClick={() => onRemove(ed.id)}>
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
            name='school'
            value={education.school}
            onChange={handleInputChange}
            placeholder='University name...'
          />

          <input
            value={education.degree}
            name='degree'
            onChange={handleInputChange}
            placeholder='Degree...'
          />

          <input
            value={education.year}
            name='year'
            onChange={handleInputChange}
            placeholder='Start year - End year...'
          />
          <button
            type='button'
            onClick={() => {
              if (education.school && education.degree && education.year) {
                onAdd(education)
                setEducation({
                  school: '',
                  degree: '',
                  year: '',
                })
                setIsAdding(false)
              }
            }}
          >
            Add
          </button>
        </>
      )}

      {!isAdding && (
        <button type='button' onClick={() => setIsAdding(true)}>
          + Add Education
        </button>
      )}
    </Togglable>
  )
}

export default EducationList
