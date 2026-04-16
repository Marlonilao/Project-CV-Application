import { useState } from 'react'

const Togglable = (props) => {
  const [visible, setVisible] = useState(false)

  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisible = () => setVisible(!visible)

  return (
    <div>
      <h3>
        {props.header}{' '}
        <button type='button' onClick={toggleVisible}>
          {visible ? <span>&#9654;</span> : <span>&#9662;</span>}
        </button>
      </h3>{' '}
      <div style={showWhenVisible}>{props.children}</div>
    </div>
  )
}

export default Togglable
