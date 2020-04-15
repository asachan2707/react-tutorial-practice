import React, { Component } from 'react';
import styled from 'styled-components';

const userOutput = (props) => {
    const style = {
        border: '1px dotted red',
        display: 'block',
        margin: '10px',
        padding: '5px'
    }

    const StyledContainer = styled.span`
        background-color: ${props => props.alt ? '#ccc' : 'red'};
        border: 1px dotted green;
        display: block;
        margin: 10px;
        padding: 15px;

        &:hover {
            background-color: ${props => props.alt ? 'lightgreen' : 'pink'};
            color: black;
        }
    `;
    return (
        <div>
            <span style={style}>
                <span>UserName: {props.userName}</span>
                <span>USer output</span>
            </span>

            <StyledContainer alt={props.state}>
                <span>UserName: {props.userName}</span>
                <span>USer output</span>
            </StyledContainer>
        </div>
    )
}

export default userOutput;