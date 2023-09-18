import React, { useState } from 'react'

const FAQ = ({ title, desc }) => {
    const [toggle, setToggle] = useState(false)
    return (
        <article>
            <div>
                <h4>{title}</h4>
                <button
                    onClick={() => {
                        setToggle(!toggle)
                    }}
                >
                    {toggle ? '-' : '+'}
                </button>
            </div>
            {toggle && <p>{desc}</p>}
        </article>
    )
}

export default FAQ
