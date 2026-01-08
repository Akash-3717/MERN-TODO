import React, { useRef, useState } from 'react'

const Form = () => {
console.log("painting form")

const [firstval, setFirstval] = useState();

  const FirstName = useRef ()
  console.log(FirstName.current)

  const submitHandel =(event) => {
    console.log(event)
    event.preventDefault();
  }

  const firstNameHandle = (event) => {
    setFirstval(event.target.value)
  }
  return (
    <div>
      <h1>state val :{firstval}</h1>
        <form action="/submit-data"  onSubmit={submitHandel}>
            <input type="text"  placeholder='First name' ref={FirstName} onKeyDown={firstNameHandle}/> <br />
            <input type="text"  placeholder='Last name'/> <br />
            <label htmlFor="dob"></label>
            <input type="date"  id='dob'/> <br />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Form