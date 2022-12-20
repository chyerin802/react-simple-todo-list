import React from 'react';
import styled from 'styled-components';
import { media } from '../lib/style-utils';

import TodoMain from './Todo/TodoMain';

const Wrapper = styled.div`
    padding-top: 60px;
    display: flex;
    flex-direction: column;
`

const Test = styled.div`
    margin: 2rem;
    background-color: red;
        
    ${media.tablet`
        background-color: blue;
    `}

    ${media.mobile`
        background-color: gray;      
    `}
`

const Main = () => {
    return (
        <Wrapper>
            <Test>Hello I'm Todo App</Test>
            <TodoMain></TodoMain>
        </Wrapper>
    );
};

export default Main;