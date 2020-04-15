import React, { useState } from 'react';
import classes from './App.module.css';
import Radium from 'radium';
import First from './component/1-first'
import Person from './Person/Person';
import UserInput from './component/UserInput/UserInput';
import UserOutput from './component/UserOutput/UserOutput';
import Practice1 from './Practice/Practice1';

const App = props => {

  const [personState, setPersonsState] = useState({
    persons: [
      { id: 1, name: 'Max', age: 27 },
      { id: 12, name: 'Sam', age: 45 },
      { id: 13, name: 'Kewin', age: 19 }
    ],
    otherState: true
  });

  const switchNameHadler = (newName) => {
    setPersonsState({
      persons: [
        { id: 1, name: newName, age: 27 },
        { id: 12, name: 'Sam', age: 45 },
        { id: 13, name: 'Kewin', age: 90 }
      ],
      otherState: personState.otherState
    });
  }

  const nameChangeHandler = (event, id) => {

    const personIndex = personState.persons.findIndex(p => p.id === id)

    const person = { ...personState.persons[personIndex] }

    person.name = event.target.value;

    const persons = [...personState.persons];
    persons[personIndex] = person;

    setPersonsState({
      persons: persons,
      otherState: personState.otherState
    });
  }

  const [getPerson, setPersonName] = useState({
    name: 'Max'
  });

  const changePersonNameHandler = (newName) => {
    setPersonName({ name: newName });
  }

  const style1 = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    margin: '8px',
    ':hover': {
      backgroundColor: 'blue',
      color: 'red'
    }
  }
  const style2 = {
    border: '3px solid red',
  }
  const style3 = {
    border: '3px dashed red',
  }

  const togglePersonHandler = (newName) => {
    const doseShow = personState.otherState;
    setPersonsState({
      persons: [
        { name: newName, age: 27 },
        { name: 'Sam', age: 45 },
        { name: 'Kewin', age: 9 }
      ],
      otherState: !doseShow
    });
  }

  const deletePersonHandler = (index) => {
    // const newList = personState.persons.splice(index, 1);   or
    const persons = [...personState.persons];
    persons.splice(index, 1);

    setPersonsState({
      persons: persons,
      otherState: personState.otherState
    });
  }

  return (
    <div className={classes.App}>
      <header className={classes.App_header}>
        React App
      </header>
      <Practice1 />

      <First />
      {/* <h5>Static data</h5>
      <Person name="Max" age="28" />
      IMPORTANT  bz of Additional info My Hobbies
      <Person name="Sam" age="71">My Hobbies: Racing</Person>
      <Person name="Peta" age="35" /> */}

      <h5>
        Little dynamic data
          <button
          style={style1, style2}
          onClick={() => switchNameHadler('Maximillion')}>Switch Name</button>

        <button
          style={style1}
          onClick={() => togglePersonHandler('Maximillion')}>Toggle view</button>
      </h5>

      {personState.otherState ?
        <div>
          {/* ITERATE person */}
          {personState.persons.map((person, index) => {
            return <Person key={person.id}
              click={deletePersonHandler.bind(this, index)}
              name={person.name}
              age={person.age}
              changed={(event) => nameChangeHandler(event, person.id)} />
          })}

          {/* <Person
            name={personState.persons[0].name}
            age={personState.persons[0].age} />
          <Person
            name={personState.persons[1].name}
            age={personState.persons[1].age}
            click={switchNameHadler.bind(this, 'Max!!!')}
            changed={nameChangeHandler}>My Hobbies: Racing</Person>
          <Person
            name={personState.persons[2].name}
            age={personState.persons[2].age} /> */}
        </div> : null
      }

      <div style={style3}>
        <span className={classes.GlobalInput}>
          <UserInput
            changed={changePersonNameHandler.bind(this, 'Wilson')}
            currentName={getPerson.name} />
        </span>
        <UserOutput
          userName={getPerson.name}
          state={personState.otherState} />
        <UserOutput 
          userName={getPerson.name}/>
        <UserOutput
          userName='Max'
          state={personState.otherState}/>
      </div>
    </div >
  );
}

export default Radium(App);