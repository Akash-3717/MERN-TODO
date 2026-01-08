import React, { useRef, useState } from 'react'

const StateVsRef = () => {

    console.log('refresh')
    const [stateClick, setStateClick] = useState(0);

    const refClicked = useRef (0);

    const stateHandle = () => {
        console.log("state click")
        setStateClick(stateClick+1)
    }

    const refHandle = () => {
        console.log("ref click")
        refClicked.current += 1;
    }
  return (
    <>
    <h1 >State clickd {stateClick}</h1> <br />
    <h1 >Ref clickd {refClicked.current}</h1>
    <button onClick={stateHandle}>State click</button>
    <button onClick={refHandle}>Ref click</button>
    </>
  )
}

export default StateVsRef