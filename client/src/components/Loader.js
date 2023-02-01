import React from 'react'
import {Spinner} from 'react-bootstrap';
const Loader = (props) => {
  return (
    <Spinner animation="border" variant={props.variant}>
        <span className='sr-only'>{props.message}</span>
    </Spinner>
  )
}

export default Loader;