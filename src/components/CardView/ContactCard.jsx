import React from 'react'
import './contacts.css'
function ContactCard(props) {
  return (
       <div className="data_col">
            <input
            name={props.name}
              id={props.name}
              className={props.name}
              type="text"
              placeholder={props.inpName}
            />
          </div>
  )
}

export default ContactCard
