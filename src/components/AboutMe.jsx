import { Accordion, Textarea } from '@mantine/core'

const AboutMe = ({ CVdata, handleInputChange }) => {
  return (
    <Accordion.Item value='aboutMe'>
      <Accordion.Control>About me</Accordion.Control>
      <Accordion.Panel>
        <Textarea
          name='aboutMe'
          value={CVdata.aboutMe}
          onChange={handleInputChange}
          placeholder='Write a brief summary about yourself...'
        />
      </Accordion.Panel>
    </Accordion.Item>
  )
}

export default AboutMe
