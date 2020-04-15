import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';

class Practice1 extends Component {

    state = {
        userInput: ''
    }

    inputChangeHandler = (event) => {
        this.setState({ userInput: event.target.value });
    }

    deleteCharHandler = (index) => {
        const text = this.state.userInput.split('');
        text.splice(index, 1);
        let updatedText = text.join('');
        this.setState({ userInput: updatedText });
    }

    render() {
        let output = null;
        if (this.state.userInput) {
            output = <p>{this.state.userInput}</p>;
        }

        const charList = this.state.userInput.split('').map((ch, index) => {
            return <Char
                key={index}
                character={ch}
                clicked={() => this.deleteCharHandler(index)} />
        })

        return (
            <div>
                UserInput: <input type="text" onChange={this.inputChangeHandler} value={this.state.userInput} />
                <br />
                {output}

                <hr />
                <Validation inputLength={this.state.userInput.length} />
                <hr />
                {charList}
            </div>
        )
    }
}

export default Practice1;

const Validation = (props) => {

    let validationText = null
    if (props.inputLength > 5) {
        validationText = 'Text too long.'
    } else {
        validationText = 'Text too short.'
    }

    return (
        <div>
            {/* {props.inputLength > 5
                ? <span>Text too long.</span>
                : <span>Text too short.</span>
            } */}

            {validationText}
        </div>
    )
}

const Char = (props) => {

    const style = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
        '@media (min-width: 500px)': {
            width: '100px'
        }
    }
    return (
        <StyleRoot>
            <div style={style} onClick={props.clicked}>
                {props.character.toUpperCase()}
            </div>
        </StyleRoot>
    )
}