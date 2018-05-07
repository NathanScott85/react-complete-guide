import React from 'react';
const person = () => {

    return <p>i'm a person and I am {Math.floor(Math.random() * 30)} years old</p> 
    /* Wrapping text in {} brace's like above allows it to be shown as JS code rather than plain text*/
}

export default person;