import Togglable from './Togglable'

const Summary = ({ CVdata, handleInputChange }) => {
  return (
    <>
      <Togglable header='Summary'>
        <textarea
          name='summary'
          value={CVdata.summary}
          onChange={handleInputChange}
          placeholder='Write a short professional summary...'
        />
      </Togglable>
    </>
  )
}

export default Summary
