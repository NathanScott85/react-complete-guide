import React from 'react';
import './Person.css';
import Radium from 'radium';
const person = (props) => {
    
    //Using Radium with media queries
   const style = { 
       '@media(min-width: 500px)': {
         width: '450px'
       }
   };
    return ( 
            /*assigning the style here 
          will over ride the class setting by default 
          css rules not because of Radium*/
        <div className="Person" style={style}>
            <p onClick={props.click}>i'm {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )


};

export default Radium (person);

