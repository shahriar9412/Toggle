import React, { useState } from 'react'

const Toggle = () => {
  const [toggle, setToggle] = useState(true)
  return (
    <div style={{ margin: '1rem', padding: '1rem', backgroundColor: 'aqua' }}>

      {toggle && <p>
        lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit ametlocalhost lorem ipsum dolor sit lorem
      </p>}

      <div style={{ textAlign: 'center' }}>

        <button
          onClick={() => {
            setToggle(!toggle)
          }}
        >
          {toggle ? 'Hide' : 'Show'}
        </button>
        
      </div>

    </div>
  )
}

export default Toggle
