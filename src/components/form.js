import React from 'react'

const form = props => (
    <form onSubmit = {props.weatherMethod}>
        <input type="text" name="city" placeholder="Enter City"/>
        <button>Check the Weather</button>
    </form>
)

export default form;
