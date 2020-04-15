import React from 'react';
import classes from './Person.module.css';

const person = (props) => {
    let random = Math.random();
    if (random > 0.9) {
        throw new Error('Got some error!!!');
    }

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old.
            <span>{props.children}</span>
            </p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;