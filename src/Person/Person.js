import React from 'react';
import classes from './Person.css';

const person = (props) => {
    
    return ( 
            /*assigning the style here 
          will over ride the class setting by default 
          css rules not because of Radium*/
        <div className={classes.Person}>
            <p onClick={props.click}>i'm {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )


};

export default person;

