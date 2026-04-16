import { useState } from 'react'
import PersonalInfo from './components/PersonalInfo'
import './App.css'

function App() {
  const [CVdata, setCVdata] = useState({
    fullName: '',
    email: '',
    phone: '',
    summary: '',
    experience: '',
    education: '',
    skills: [],
    projects: [],
  })

  const handleInputChange = (e) => {
    setCVdata((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div>
      <PersonalInfo CVdata={CVdata} handleInputChange={handleInputChange} />
    </div>
  )
}

export default App
