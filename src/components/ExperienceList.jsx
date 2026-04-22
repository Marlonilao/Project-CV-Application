import { useState } from 'react'
import {
  Accordion,
  List,
  Box,
  Paper,
  ActionIcon,
  Button,
  TextInput,
  Space,
  Flex,
  Title,
  Text,
} from '@mantine/core'
import { TrashIcon, PlusIcon } from '@phosphor-icons/react'

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
    <Accordion.Item value='experience'>
      <Accordion.Control>Experience</Accordion.Control>
      <Accordion.Panel>
        <List listStyleType='none'>
          {CVdata.experience.map((exp) => (
            <List.Item key={exp.id}>
              <Box w={300}>
                <Paper shadow='xs' p='sm' withBorder>
                  <Flex gap='sm' justify={'space-between'}>
                    <List listStyleType='none'>
                      <List.Item>{exp.experienceDetails.year}</List.Item>
                      <List.Item>
                        {exp.experienceDetails.jobTitle} at{' '}
                        {exp.experienceDetails.company}
                      </List.Item>
                      <List.Item>
                        <Text fw={700}>Responsibilities</Text>
                        <List listStyleType='disc'>
                          {exp.experienceDetails.description.map((item) => (
                            <List.Item key={item.id}>{item.text}</List.Item>
                          ))}
                        </List>
                      </List.Item>
                    </List>
                    <ActionIcon
                      variant='light'
                      color='red'
                      aria-label='remove-icon'
                      onClick={() => onRemove(exp.id)}
                    >
                      <TrashIcon style={{ width: '70%', height: '70%' }} />
                    </ActionIcon>
                  </Flex>
                </Paper>
              </Box>
            </List.Item>
          ))}
        </List>
        <Space h='md' />
        {!isAdding ? (
          <Button
            leftSection={<PlusIcon size={14} />}
            onClick={() => setIsAdding(true)}
          >
            Add Experience
          </Button>
        ) : (
          <>
            <TextInput
              label='Company'
              value={experienceDetails.company}
              name='company'
              onChange={handleInputChange}
              placeholder='Company Name'
            />
            <Space h='md' />
            <TextInput
              label='Job Title'
              value={experienceDetails.jobTitle}
              name='jobTitle'
              onChange={handleInputChange}
              placeholder='Full Stack Developer'
            />
            <Space h='md' />
            <TextInput
              label='Year'
              value={experienceDetails.year}
              name='year'
              onChange={handleInputChange}
              placeholder='20XX - 20XX'
            />
            <Space h='md' />
            <Title order={6}>Responsibilities</Title>
            {experienceDetails.description.length > 0 ? (
              <List listStyleType='disc'>
                {experienceDetails.description.map((item) => (
                  <List.Item key={item.id}>{item.text}</List.Item>
                ))}
              </List>
            ) : null}
            {isAddingDescription ? (
              <>
                <TextInput
                  // label='Description'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder='Description of your responsibility...'
                />
                <Space h='md' />
                <div style={{ display: 'flex' }}>
                  <Button onClick={handleAddDescription}>Save</Button>
                  <Space w='md' />
                  <Button onClick={() => setIsAddingDescription(false)}>
                    Cancel
                  </Button>
                </div>
              </>
            ) : (
              <>
                <Space h='md' />
                <Button
                  leftSection={<PlusIcon size={14} />}
                  onClick={() => setIsAddingDescription(true)}
                >
                  Add Description
                </Button>
              </>
            )}
            <Space h='md' />
            <div style={{ display: 'flex' }}>
              <Button onClick={handleAddExperience}>Save Experience</Button>
              <Space w='md' />
              <Button
                onClick={() => {
                  setIsAdding(false)
                  setExperienceDetails(emptyDetails)
                }}
              >
                Cancel
              </Button>
            </div>
          </>
        )}
      </Accordion.Panel>
    </Accordion.Item>
  )
}

export default ExperienceList
