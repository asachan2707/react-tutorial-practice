import React, { useReducer, useState } from 'react';

const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo'
}

function reducer(todos, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)];
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete };
                }
                return todo;
            });
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id);
        default:
            return todos;
    }
}

function newTodo(name) {
    return { id: Date.now(), name: name, complete: false }
}



export default function ExampleTodo() {

    const [todos, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
        setName('');
    }

    console.log(todos);
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </form>
            {todos.map(todo => <Todo key={todo.id} todo={todo} dispatch={dispatch} />)}
        </div>
    );
}

function Todo({ todo, dispatch }) {
    return (
        <div>
            <span style={{ color: todo.complete ? '#AAA' : '#000' }}>{todo.name}</span>
            <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}>Toggle</button>
            <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>Delete</button>
        </div>

    );
}