import { useState } from 'react'
import {
  Accordion,
  List,
  ActionIcon,
  Paper,
  Button,
  TextInput,
  Space,
  Flex,
  Box,
} from '@mantine/core'
import { TrashIcon, PlusIcon } from '@phosphor-icons/react'

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
    <Accordion.Item value='education'>
      <Accordion.Control>Education</Accordion.Control>
      <Accordion.Panel>
        <List listStyleType='none'>
          {CVdata.education.map((item) => (
            <List.Item key={item.id}>
              <Box w={200}>
                <Paper shadow='xs' p='sm' withBorder>
                  <Flex gap='sm' justify={'space-between'}>
                    <List listStyleType='none'>
                      <List.Item>{item.details.year}</List.Item>
                      <List.Item>{item.details.school}</List.Item>
                      <List.Item>{item.details.degree}</List.Item>
                    </List>
                    <ActionIcon
                      variant='light'
                      color='red'
                      aria-label='remove-icon'
                      onClick={() => onRemove(item.id)}
                    >
                      <TrashIcon style={{ width: '70%', height: '70%' }} />
                    </ActionIcon>
                  </Flex>
                </Paper>
              </Box>
              <Space h='sm' />
            </List.Item>
          ))}
        </List>
        <Space h='md' />
        {!isAdding ? (
          <Button
            leftSection={<PlusIcon size={14} />}
            onClick={() => setIsAdding(true)}
          >
            Add Education
          </Button>
        ) : (
          <>
            <TextInput
              label='School'
              name='school'
              value={education.school}
              onChange={handleInputChange}
              placeholder='School of Rock!'
            />
            <Space h='md' />
            <TextInput
              label='Degree'
              name='degree'
              value={education.degree}
              onChange={handleInputChange}
              placeholder='BS in Computer Science'
            />
            <Space h='md' />
            <TextInput
              label='School Year'
              name='year'
              onChange={handleInputChange}
              placeholder='19XX - 200X'
            />
            <Space h='md' />
            <div style={{ display: 'flex' }}>
              <Button
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
                Save
              </Button>
              <Space w='md' />
              <Button onClick={() => setIsAdding(false)}>Cancel</Button>
            </div>
          </>
        )}
      </Accordion.Panel>
    </Accordion.Item>
  )
}

export default EducationList
