import Togglable from './Togglable'

const AboutMe = ({ CVdata, handleInputChange }) => {
  return (
    <>
      <Togglable header='About me'>
        <textarea
          name='aboutMe'
          value={CVdata.aboutMe}
          onChange={handleInputChange}
          placeholder='Write a brief summary about yourself...'
        />
      </Togglable>
    </>
  )
}

export default AboutMe
