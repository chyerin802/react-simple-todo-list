import React from 'react';
import styled from 'styled-components'

const HeaderWrapper = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    height: 60px;
    width: 100%;
`

const Header = () => {
    return (
        <HeaderWrapper>
            Todo
        </HeaderWrapper>
    );
};

export default Header;