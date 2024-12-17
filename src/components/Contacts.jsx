import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ContactCard from './CardView/ContactCard'
import { useForm } from '@formspree/react';

  


function Contacts() {

  const [state, handleSubmit] = useForm("manygoww");
  const [showAlert, setShowAlert] = useState(false);



    useEffect(()=>{
      if (state.succeeded&&!showAlert) {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      }
    },[state.succeeded]);
  
  return (

    <form onSubmit={handleSubmit}>
    <div name="/contacts">
      
<h1  className='text-3xl font-bold mb-5 shadow-md p-4  rounded-lg bg-[darkcyan] my-20'>Contacts</h1>

<div className='contactContainer'>
<div className="contactDetails">
<div className="contactCol">
<ContactCard name={"FirstName"} inpName={"First Name"}/>
<ContactCard name={"LastName"} inpName={"Last Name"}/>

</div>
<div className="contactCol">
<ContactCard name={"PhoneNumber"} inpName={"Phone Number"}/>
<ContactCard name={"Email"} inpName={"Email Address"}/>

</div>

<div className="contactCol">
<textarea className='msgArea' placeholder="Message" name="Message"></textarea>

</div>

<button type='submit' className='submitBtn' >Submit</button>

{showAlert&&
(<div className='bg-green-400 px-10 py-2 mt-4 text-xl text-black font-bold rounded-2xl transition-all'>
  Data Successfully Submited
</div>)
}
</div>
</div>
    </div>
    </form>
  );
}


Contacts.propTypes = {

}

export default Contacts

