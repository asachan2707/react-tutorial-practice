import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // http request ...
    const timer = setTimeout(() => {
      toggleBtnRef.current.click();
      alert('Change button state from \'useRef\' React hook in functional component.');
    }, 2000);
    return () => {
      clearTimeout(timer);
      console.log('[Cockpit.js] cleanup in useEffect');
    }
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect-2');
    return () => console.log('[Cockpit.js] cleanup in useEffect-2');
  });

  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        ref={toggleBtnRef}
        className={btnClass}
        onClick={props.clicked}>Toggle Persons</button>
        <AuthContext.Consumer>
        {(context) => <button onClick={context.login}>Log In</button>}
        </AuthContext.Consumer>
    </div>
  );
};

export default React.memo(cockpit);