import { useState } from 'react'
import PersonalInfo from './components/PersonalInfo'
import AboutMe from './components/AboutMe'
import ExperienceList from './components/ExperienceList'
import EducationList from './components/EducationList'
import SkillsList from './components/SkillsList'
import './App.css'
import LivePreview from './components/LivePreview'
import '@mantine/core/styles.css'
import {
  Accordion,
  MantineProvider,
  Grid,
  Center,
  ScrollArea,
  Title,
} from '@mantine/core'

function App() {
  const [CVdata, setCVdata] = useState({
    fullName: '',
    email: '',
    phone: '',
    aboutMe: '',
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
    <MantineProvider>
      <Grid>
        <Grid.Col span={3}>
          <div className='sidebar'>
            <Center justify='space-between' p='lg' className='sidebarHeader'>
              <Title order={1}>CV BUILDER</Title>
            </Center>
            <Accordion>
              <PersonalInfo
                CVdata={CVdata}
                handleInputChange={handleInputChange}
              />
              <AboutMe CVdata={CVdata} handleInputChange={handleInputChange} />
              <ExperienceList
                CVdata={CVdata}
                onAdd={(object) =>
                  handleArrayAdd('experience', {
                    id: crypto.randomUUID(),
                    experienceDetails: object,
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
              <SkillsList
                CVdata={CVdata}
                onAdd={(value) =>
                  handleArrayAdd('skills', {
                    id: crypto.randomUUID(),
                    text: value,
                  })
                }
                onRemove={(id) => handleArrayRemove('skills', id)}
              />
            </Accordion>
          </div>
        </Grid.Col>
        <Grid.Col span={9}>
          <ScrollArea h={'100vh'} type='scroll' p={'md'}>
            <LivePreview CVdata={CVdata} />
          </ScrollArea>
        </Grid.Col>
      </Grid>
    </MantineProvider>
  )
}

export default App
