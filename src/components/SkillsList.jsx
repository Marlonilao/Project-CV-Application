import { useState } from 'react'
import {
  Accordion,
  List,
  ActionIcon,
  Button,
  TextInput,
  Flex,
  Text,
} from '@mantine/core'
import { TrashIcon, PlusIcon } from '@phosphor-icons/react'
import { Space } from '@mantine/core'

const SkillsList = ({ CVdata, onAdd, onRemove }) => {
  const [skill, setSkill] = useState('')
  const [isAdding, setIsAdding] = useState(false)

  const handleInputChange = (e) => {
    setSkill(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const skillInput = skill.trim()
      if (skillInput) onAdd(skillInput)
      setSkill('')
      setIsAdding(false)
    } else if (e.key === 'Escape') {
      setSkill('')
      setIsAdding(false)
    }
  }

  return (
    <Accordion.Item value='skills'>
      <Accordion.Control>Skills</Accordion.Control>
      <Accordion.Panel>
        <List listStyleType='disc'>
          {CVdata.skills.map((skill) => (
            <List.Item key={skill.id}>
              <Flex gap='sm' justify={'space-between'} miw={140}>
                <Text>{skill.text}</Text>
                <ActionIcon
                  variant='light'
                  color='red'
                  aria-label='remove-icon'
                  onClick={() => onRemove(skill.id)}
                >
                  <TrashIcon style={{ width: '70%', height: '70%' }} />
                </ActionIcon>
              </Flex>
            </List.Item>
          ))}
        </List>
        <Space h='md' />
        {isAdding ? (
          <>
            <TextInput
              value={skill}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder='Skill...'
            />
            <Space h='sm' />
            <Button
              onClick={() => {
                onAdd(skill)
                setSkill('')
              }}
            >
              Save
            </Button>
          </>
        ) : (
          <>
            <Button
              leftSection={<PlusIcon size={14} />}
              onClick={() => setIsAdding(true)}
            >
              Add Skill
            </Button>
          </>
        )}
      </Accordion.Panel>
    </Accordion.Item>
  )
}

export default SkillsList
