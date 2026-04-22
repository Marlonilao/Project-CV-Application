import { Accordion, TextInput, Space } from '@mantine/core'

const PersonalInfo = ({ CVdata, handleInputChange }) => {
  return (
    <Accordion.Item value='personalInformation'>
      <Accordion.Control>Personal Information</Accordion.Control>
      <Accordion.Panel>
        <TextInput
          label='Full Name'
          placeholder='Juan De La Cruz'
          name='fullName'
          value={CVdata.fullName}
          onChange={handleInputChange}
        />
        <Space h='md' />
        <TextInput
          label='Email'
          placeholder='juanDelaCruz@email.com'
          name='email'
          value={CVdata.email}
          onChange={handleInputChange}
        />
        <Space h='md' />
        <TextInput
          label='Phone'
          placeholder='09123456789'
          name='phone'
          value={CVdata.phone}
          onChange={handleInputChange}
        />
      </Accordion.Panel>
    </Accordion.Item>
  )
}

export default PersonalInfo
