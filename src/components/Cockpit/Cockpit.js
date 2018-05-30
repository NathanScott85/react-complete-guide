import React from "react";
import classes from './Cockpit.css';
const cockpit = props => {

    let assignedClasses = [];
    let btnClass = '';
    
    //Changes the text of the P tag assigned to below based on
    //the number of persons inside the clicked button.
    if (props.showPersons) {
        btnClass = classes.blue;
    }
    
    if (props.persons.length <= 2) 
    {
      assignedClasses.push(classes.blue);
    } 

    if (props.persons.length <= 1)
    {
      assignedClasses.push( classes.bold) 
     }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.appTitle}</h1>
      {/*putting .join(' ') here forces the text to be bold and blue */}
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      {/*button when clicked shows the persons.*/}
      <button className={btnClass} 
      onClick={props.clicked}>
        Toggle
      </button>
    </div>
  );
};

export default cockpit;
