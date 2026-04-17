import { useState } from 'react'
import Togglable from './Togglable'

const emptyDetails = { company: '', jobTitle: '', year: '', description: [] }

const ExperienceList = ({ CVdata, onAdd, onRemove }) => {
  const [experienceDetails, setExperienceDetails] = useState(emptyDetails)
  const [description, setDescription] = useState('')
  const [isAdding, setIsAdding] = useState(false)
  const [isAddingDescription, setIsAddingDescription] = useState(false)

  const handleInputChange = (e) => {
    setExperienceDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleAddDescription = () => {
    const val = description.trim()
    if (!val) return
    setExperienceDetails((prev) => ({
      ...prev,
      description: [
        ...prev.description,
        { id: crypto.randomUUID(), text: val },
      ],
    }))
    setDescription('')
    setIsAddingDescription(false)
  }

  const handleAddExperience = () => {
    if (!experienceDetails.company.trim() || !experienceDetails.jobTitle.trim())
      return
    onAdd(experienceDetails)
    setExperienceDetails(emptyDetails)
    setDescription('')
    setIsAdding(false)
    setIsAddingDescription(false)
  }

  return (
    <Togglable header='Experience'>
      <ul>
        {CVdata.experience.map((exp) => (
          <li key={exp.id}>
            <em>{exp.experienceDetails.year}</em>
            {' - '}
            <strong>{exp.experienceDetails.jobTitle}</strong> at{' '}
            {exp.experienceDetails.company}
            <ul>
              {exp.experienceDetails.description.map((desc) => (
                <li key={desc.id}>{desc.text}</li>
              ))}
            </ul>
            <button type='button' onClick={() => onRemove(exp.id)}>
              remove
            </button>
          </li>
        ))}
      </ul>

      {isAdding && (
        <div>
          <input
            value={experienceDetails.company}
            name='company'
            onChange={handleInputChange}
            placeholder='Company...'
          />
          <input
            value={experienceDetails.jobTitle}
            name='jobTitle'
            onChange={handleInputChange}
            placeholder='Job Title...'
          />
          <input
            value={experienceDetails.year}
            name='year'
            onChange={handleInputChange}
            placeholder='Year...'
          />
          <ul>
            {experienceDetails.description.map((desc) => (
              <li key={desc.id}>{desc.text}</li>
            ))}
          </ul>

          {isAddingDescription ? (
            <>
              <input
                autoFocus
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder='Description...'
              />
              <button type='button' onClick={handleAddDescription}>
                + Add
              </button>
              <button
                type='button'
                onClick={() => setIsAddingDescription(false)}
              >
                Cancel
              </button>
            </>
          ) : (
            <button type='button' onClick={() => setIsAddingDescription(true)}>
              + Add Description
            </button>
          )}

          <button type='button' onClick={handleAddExperience}>
            Save Experience
          </button>
          <button
            type='button'
            onClick={() => {
              setIsAdding(false)
              setExperienceDetails(emptyDetails)
            }}
          >
            Cancel
          </button>
        </div>
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
