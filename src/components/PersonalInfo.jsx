import Togglable from './Togglable'

const PersonalInfo = ({ CVdata, handleInputChange }) => {
  return (
    <>
      <Togglable header='Personal Information'>
        <label>
          Full Name:{' '}
          <input
            type='text'
            name='fullName'
            value={CVdata.fullName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:{' '}
          <input
            type='email'
            name='email'
            value={CVdata.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Phone:{' '}
          <input
            type='tel'
            name='phone'
            value={CVdata.phone}
            onChange={handleInputChange}
          />
        </label>
      </Togglable>
    </>
  )
}

export default PersonalInfo
