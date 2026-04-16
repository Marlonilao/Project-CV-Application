import { useState } from 'react'
import PersonalInfo from './components/PersonalInfo'
import Summary from './components/Summary'
import ExperienceList from './components/Experience'
import EducationList from './components/Education'
import './App.css'

function App() {
  const [CVdata, setCVdata] = useState({
    fullName: '',
    email: '',
    phone: '',
    summary: '',
    experience: [],
    education: [],
    skills: [],
    projects: [],
  })

  const handleInputChange = (e) => {
    setCVdata((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleArrayAdd = (field, value) => {
    setCVdata((prevData) => ({
      ...prevData,
      [field]: [...prevData[field], value],
    }))
  }

  const handleArrayRemove = (field, id) => {
    setCVdata((prevData) => ({
      ...prevData,
      [field]: prevData[field].filter((item) => item.id !== id),
    }))
  }

  return (
    <div>
      <form>
        <PersonalInfo CVdata={CVdata} handleInputChange={handleInputChange} />
        <Summary CVdata={CVdata} handleInputChange={handleInputChange} />
        <ExperienceList
          CVdata={CVdata}
          onAdd={(value) =>
            handleArrayAdd('experience', {
              id: crypto.randomUUID(),
              text: value,
            })
          }
          onRemove={(id) => handleArrayRemove('experience', id)}
        />
        <EducationList
          CVdata={CVdata}
          onAdd={(object) =>
            handleArrayAdd('education', {
              id: crypto.randomUUID(),
              details: object,
            })
          }
          onRemove={(id) => handleArrayRemove('education', id)}
        />
      </form>
    </div>
  )
}

export default App
