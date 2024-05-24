import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const About = () => {
  const reduxvalue = useSelector((state) => state.countvalue.value);
  return (
       <h1>This is my About Page {reduxvalue}</h1>

  )
}

export default About
